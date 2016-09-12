/*
	调用module.js
	require用于从外部获取一个模块的接口
	myModule1,myModule2变量引用指向同一个实例,即单次加载
*/
var myModule = require('./module');
myModule.setName('playo');
myModule.sayHello();

var myModule1 = require('./module');
myModule1.setName('mzPlayo1');
//myModule1.sayHello();

var myModule2 = require('./module');
myModule2.setName('mzPlayo2');
myModule2.sayHello();

var module = require('./node_modules/playo');
