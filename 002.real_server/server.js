'use strict'

var http = require('http');
var https = require('https');
var fs = require('fs');
var express = require('express');
var serveIndex = require('serve-index');

var app = express();
app.use(serveIndex('./public'));
app.use(express.static('./public'));

// http server
var http_server = http.createServer(app);
http_server.listen(8080, '0.0.0.0');

// https server
var https_options = {
    key: fs.readFileSync('/etc/letsencrypt/live/rtc.captainwong.cn/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/rtc.captainwong.cn/fullchain.pem')
}

var https_server = https.createServer(https_options);
https_server.listen(10443, '0.0.0.0');
