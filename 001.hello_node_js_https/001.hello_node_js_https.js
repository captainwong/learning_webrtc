'use strict'

var https = require('https');
var fs = require('fs')
var options = {
    key: fs.readFileSync('/etc/letsencrypt/live/rtc.captainwong.cn/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/rtc.captainwong.cn/fullchain.pem')
}

var app = https.createServer(options, function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('https: Hello World\n');
}).listen(10443, '0.0.0.0');
