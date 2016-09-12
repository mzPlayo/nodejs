/*
	异步读取testSynchronize.txt文件内容
*/
var fs = require('fs');

fs.readFile('testSynchronize.txt','utf-8',function(err,data){
	if(err){
		console.log('error');
	}else{
		console.log(data);
	}
});

console.log('end.');