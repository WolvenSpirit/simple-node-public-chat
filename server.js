// Node.js fiddle
var http = require('http');
var fs = require('fs');

http.createServer((rq,wr)=>{
            if(rq.url=='/client.js'){
                wr.writeHead(200,{"Content-Type":"text/javascript"});
                fs.readFile('client.js',
                (e,data)=>{
                    if(!e)wr.write(data)
                    else wr.write(e.message)
                    wr.end();
                });
                return
            }
            console.log(rq.headers);
            wr.writeHead(200,{'Content-type':'text/html'});
            wr.write(`    
                    <html>
                    <head>
                        <meta charset="utf-8">
                        <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <title></title>
                        <meta name="description" content="">
                        <meta name="viewport" content="width=device-width, initial-scale=1">
                        <script src="client.js" type="application/javascript" async defer></script>
                        <link rel="stylesheet" href="">
                    </head>
                    <body onload="connect()">
                        <h3>Running on node server.</h3>
                        <input type="text" id="nickname" placeholder="enter a nickname">
                        <div id="render" style="width:19em;height:9em;border:solid grey 1px;background-color:black;color:green;padding:3em;">
                        </div>
                        <input id="msg" type="text">
                        <button onclick="sendMsg()">Send</button>
                    </body>
                    </html>`);
                    wr.end();

}).listen(80,'localhost');