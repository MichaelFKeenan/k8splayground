minikube start
sudo service docker start
docker login
docker image ls
docker run -p 3000:3000 -it [image]

minikube ssh
docker login
docker pull kikeymeenan/docker-demo, kikeymeenan/testapp1, kikeymeenan/testapp2

minikube kubectl -- create -f pod-helloworld.yml

