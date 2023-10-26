minikube start
(if using pod presets, you need to tell it to allow alpha features, this takes absolutely AGES)
minikube start --extra-config=apiserver.enable-admission-plugins=NamespaceLifecycle,LimitRanger,ServiceAccount,DefaultStorageClass,DefaultTolerationSeconds,NodeRestriction,MutatingAdmissionWebhook,ValidatingAdmissionWebhook,ResourceQuota,PodPreset

sudo service docker start
docker login
docker image ls
docker run -p 3000:3000 -it [image]

minikube ssh
docker login
docker pull kikeymeenan/docker-demo, kikeymeenan/testapp1, kikeymeenan/testapp2

-- updating image
- navigate to directory with Dockerfile in
- run 'docker build .'
- optionally tag the image, but i'm currently just running on latest
- docker push kikeymeenan/testapp1 or 2, whatever image referenced in pod spec is

minikube kubectl -- create -f pod-helloworld.yml


docker build issue from cgroups:
sudo mkdir /sys/fs/cgroup/systemd
sudo mount -t cgroup -o none,name=systemd cgroup /sys/fs/cgroup/systemd
