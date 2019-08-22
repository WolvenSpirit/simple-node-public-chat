var http = require('http');
var fs = require('fs');
var ws = require('ws');

const wss = new ws.Server({port:8080});
wss.on('connection',wsconn=>{
    var msg;
   wsconn.on('message',message=>{
        console.log(message);
        wss.clients.forEach((client)=>client.send(message))
   })
})