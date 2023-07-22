const express = require('express');
const app = express();
const port = 3000;
const userSecret = process.env.USER_SECRET;

app.get('/getstuff', (req, res) => {
  res.send({result: `stuff from other app!`})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})