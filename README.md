# Cross Origin Resource Sharing (CORS) Proxy Server wrapped in Docker Container or Cloud Foundry 
Simple proxy server used to overcome browser CORS issues when working with OpenStack APIs

Utilises super npm package located here https://github.com/Rob--W/cors-anywhere

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

  4. Verify by opening a browser and navigating to port 2337 on your docker host's ip address e.g. https://<docker-host-ip>:2337

  ![image](https://user-images.githubusercontent.com/9472095/34605322-0e8e4c7e-f203-11e7-9ccb-40f6f95c33f9.png)

# Installation

## Cloud Foundry
This is as easy as you'd expect when using a PaaS platform

 1. Download the repository from my github account https://github.com/allthingsclowd
```bash
mkdir cors_proxy && cd cors_proxy
git clone https://github.com/allthingsclowd/cors_proxy.git .
```

 2. Upload the application to your Cloud Foundry platform
 ```bash
 cf push
 ```
 
## Updated to use SSL
In order to attempt to start leveraging best practises I've enabled SSL for this proxy. The test certificates are included in this repository. If you wish to create you own 'self-signed' certificates ensure to name them the same as mine or modify the new filenames within the repo

```bash
openssl req -newkey rsa:2048 -nodes -x509 -days 99999 -out althingscloud.pem -keyout corsproxyprivate.pem
mv *.pem certs/
```

## Self-Signed Certificate Errors in Browsers (Chrome)
```dos
zone.js:2975 OPTIONS https://localhost:2337/identity.uk-1.cloud.global.fujitsu.com:443/v3/auth/tokens net::ERR_INSECURE_RESPONSE

```

If you get the above error during testing with self-signed certificates:
 - navigate to the proxy url in your browser, select Advanced and select Proceed.
  or
 - simply paste this into your chrome browser
 ```bash
 chrome://flags/#allow-insecure-localhost
 ```
   and select enable

Alternatively use CA signed certificates

