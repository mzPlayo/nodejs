/*获取一个get请求参数
	请求路径:http://127.0.0.1:3000/user?name=playo&email=857335134@qq.com
*/
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/plain'});
	res.end(util.inspect(url.parse(req.url,true)));
}).listen(3000);