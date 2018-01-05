// Simple proxy server used to overcome browser CORS issues when working with OpenStack APIs
// Author: Graham J Land
// Date: 05/01/2018
// Github: https://github.com/allthingsclowd/cors_proxy
// Blog: https://allthingscloud.eu

// Cloud Foundry defines the environment variable PORT, and requires the binding address to be 0.0.0.0 
var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 2337;
 
var cors_proxy = require('cors-anywhere');
var fs = require('fs');
var path = require('path');

// read in the self-signed certs created with the following command:
// openssl req -newkey rsa:2048 -nodes -x509 -days 99999 -out althingscloud.pem -keyout corsproxyprivate.pem
var httpsOptions = {
    key: fs.readFileSync('certs/corsproxyprivate.pem')
  , cert: fs.readFileSync('certs/althingscloud.pem')
  };

cors_proxy.createServer({ originWhitelist: [],httpsOptions,})
            .listen(port, host, function() { console.log('Running CORS Anywhere on ' + host + ':' + port);
});