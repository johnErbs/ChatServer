"use strict";
///<Sumnary>
//
///</Sumnary>
Object.defineProperty(exports, "__esModule", { value: true });
var Express = require("express");
var Http = require("http");
var Socket = require("socket.io");
var app = Express();
var http = new Http.Server(app);
var io = Socket(http);
app.get('/', function (req, resp) {
    resp.sendFile(__dirname + "/index.html");
});
io.on('connection', function (conn) {
    console.log('Someone connected!');
    conn.on('message', function (mess) {
        console.log(mess.a);
        //Sender server ud til alle kanaler
        io.emit('whatever', 'whas uup?');
    });
    conn.on('disconnect', function () {
        console.log("someone disconnected!");
    });
});
http.listen(3000, function () {
    console.log('listening on port 3000');
});
