var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,resposne){
    var url = request.url;
    if(url == '/'){
        url = '/index.html';
    }if(url=='/favicon.ico'){
        return resposne.writeHead(404);
    }
    resposne.writeHead(200);
    console.log(__dirname+url);
    resposne.end(fs.readFileSync(__dirname+url));

});
app.listen(3000);