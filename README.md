# cors_proxy
Simple proxy server used to overcome browser CORS issues when working with OpenStack APIs

Utilises great package located here https://github.com/Rob--W/cors-anywhere

# Installation
## Docker
This cors proxy application has been built to run inside a docker container as follows:

 1. Download the repository from my github account https://github.com/allthingsclowd
```bash
mkdir cors_proxy && cd cors_proxy
git clone https://github.com/allthingsclowd/cors_proxy.git .
```

 2. Build the docker container image
```bash
docker build -t cors_proxy .
```

 3. Run the image
 ```bash
 docker run -it --rm -p 2337:2337 cors_proxy
 ```

  4. Verify by opening a browser and navigating to port 2337 on your docker host's ip address e.g. http://<docker-host-ip>:2337

  ![image](https://user-images.githubusercontent.com/9472095/34605322-0e8e4c7e-f203-11e7-9ccb-40f6f95c33f9.png)
  