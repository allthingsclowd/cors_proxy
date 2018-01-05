# cors_proxy
Simple proxy server used to overcome browser CORS issues when working with OpenStack APIs

Utilises great package located here https://github.com/Rob--W/cors-anywhere

# Installation
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