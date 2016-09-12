/*
	调用hello.js
	exports方式
	
	var Hello1 = require('./hello');
	hello = new Hello1.Hello();
	hello.setName('playo');
	hello.sayHello();
*/

/*
	module.exports方式
	在外部引用该模块时,其接口对象就是要输出的Hello对象本身
*/
var Hello = require('./hello');
hello = new Hello();
hello.setName('playo');
hello.sayHello();