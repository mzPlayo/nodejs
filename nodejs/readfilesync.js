/*
	同步执行
*/
var fs = require('fs');

var data = fs.readFileSync('testSynchronize.txt','utf-8');
console.log(data);
console.log('end.');