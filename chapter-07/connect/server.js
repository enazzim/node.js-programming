var http = require('http')
  , fs = require('fs')
  , path = require('path')
  , io = require('socket.io');

var server = http.createServer(function(req, res) {
  var filename = path.join(process.cwd(), req.url);

  path.exists(filename, function(exists) {
    if(!exists) {
      res.writeHead(404, {"Content-Type": "text/plain"});
      res.write("404 Not Found\n");
      res.end();
      return;
    }

    fs.readFile('./index.html', encoding='utf-8', function(err, data) {
      if (err) {
        res.writeHead(500, {"Content-Type": "text/plain"});  
        res.write(err + "\n");  
        res.end();  
        return;  
      } 
      res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"}); 
      res.end(data);
    }); 
  }); 
});

server.listen(3000);

console.log("서버가 시작되었습니다. http://localhost:3000");
