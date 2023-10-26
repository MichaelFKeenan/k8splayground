configmap is a type of volume that os mounted on the container

here we are mapping some config to the /etc/nginx/conf.d path

this is the default path nginx looks to for its config

this config is telling nginx to route all '/' requests through to port 3000 (second app) and any '/50x.html' requests to a static directory