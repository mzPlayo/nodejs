/*常用工具类util
	1.util.inherits 原形复制
*/
var util = require('util');

function Base(){
	this.name = 'base';
	this.base = 1991;
	
	this.sayHello = function(){
		console.log('Hello '+this.name);
	};
}

Base.prototype.showName = function(){
	console.log(this.name);
};

function Sub(){
	this.name = 'sub';
}

util.inherits(Sub,Base);

var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);

console.log('--------------------------------------------------------------------');
/*
	2.util.inspect 将任意对象转化为字符串
*/
function Person(){
	this.name = 'playo';
	
	this.toString = function(){
		return this.name;
	};
}

var obj = new Person();

console.log(util.inspect(obj));
console.log(util.inspect(obj,true));