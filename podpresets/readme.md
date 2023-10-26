inject info into pods at build time

applied to pods via 'matchLabels' selector in preset spec

can use multiple per pod, unless there are conflicts

great for sharing things like config, volumes or environment variables across many pods

this feature is in alpha, does not work in minikube so can't test!