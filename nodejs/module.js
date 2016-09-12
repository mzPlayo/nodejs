/*
	创建一个node.js模块
	exprots是模块公开的接口
*/
var name="";

exports.setName = function(thyName){
	name = thyName;
};

exports.sayHello = function(){
	console.log('Hello ' + name);
};