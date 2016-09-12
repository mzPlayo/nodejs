/*
	nodejs http请求
	通过命令行访问app.js文件 node app.js(修改js文件后不可调试,可下载supersvisor,通过命令supervisor app.js执行)
	在浏览器中访问 http://127.0.0.1:3000
*/
var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200,{'content-Type':'text/html'});
	res.write('<h1>node.js<h1>');
	res.end('<p>Hello World!</p>');
}).listen(3000);

console.log("HTTP server is listening at port 3000.");


