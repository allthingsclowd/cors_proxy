// Simple proxy server used to overcome browser CORS issues when working with OpenStack APIs
// Author: Graham J Land
// Date: 05/01/2018
// Github: https://github.com/allthingsclowd/cors_proxy
// Blog: https://allthingscloud.eu

// Cloud Foundry defines the environment variable PORT, and requires the binding address to be 0.0.0.0 
var host = process.env.PORT ? '0.0.0.0' : '127.0.0.1';
var port = process.env.PORT || 2337;
 
var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins 
    //requireHeader: ['origin', 'x-subject-token'],
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});