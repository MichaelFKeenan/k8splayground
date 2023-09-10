using minikube k8s ingress controller

kubectl create deployment web --image=gcr.io/google-samples/hello-app:1.0
kubectl expose deployment web --type=NodePort --port=8080

kubectl create deployment web2 --image=gcr.io/google-samples/hello-app:2.0
kubectl expose deployment web2 --port=8080 --type=NodePort

curl --resolve "hello-world.info:80:$( minikube ip )" -i http://hello-world.info
curl --resolve "hello-world.info:80:$( minikube ip )" -i http://hello-world.info/v2