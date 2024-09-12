// var http = require('http');
import http from 'http';

// var date = require("./date");
import date from "./date";

// var getURL = require("./getURL")
import getURL from "./getURL";

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
   
    res.write(date() + "<br>");

    res.write(getURL.getPath(req) + "<br>")
    res.write(getURL.getParamsURL(req) + "<br>");

    res.end('Hello KTPM0121, chúc bạn thành công với Nodjs');
}).listen(8080);