/*测试http.get请求*/
var http = require('http');

http.get({host:'wwww.byvoid.com'},function(res){
	res.setEncoding('utf8');
	res.on('data',function(data){
		console.log(data);
	});
});