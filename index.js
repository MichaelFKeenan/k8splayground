const express = require('express');
const https = require("http");
const app = express();
const port = 3000;
const userSecret = process.env.USER_SECRET;
const testApi = process.env.API_SERVICE;


// const secondappurl = "http://localhost:3001";
const secondappurl = testApi;

app.get('/', (req, res) => {
  console.log(secondappurl);
  //res.send(`api url is ${secondappurl}`);
  // get stuff from second app
  https
  .get(`${secondappurl}/getstuff`, resp => {
    let data = "";

    // A chunk of data has been recieved.
    resp.on("data", chunk => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on("end", () => {
      let response = JSON.parse(data);
      console.log(response);
      res.send(`Test App 1, with user secret: ${userSecret} and response form 2nd app: ${response.result}`)
    });
  })
  .on("error", err => {
    console.log("Error: " + err.message);
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})