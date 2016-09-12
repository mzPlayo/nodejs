/*
	获取目录somePackage/index.js内容
	
	Node.js 在调用某个包时,会首先检查包中package.json文件的main字段,将其作为包的接口模块,
	如果package.json或main字段不存在,会尝试寻找index.js或index.node作为包的接口。
*/
var somePackage = require('./somePackage');
somePackage.hello();
