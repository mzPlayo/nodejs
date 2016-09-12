/*
	创建模块接口
*/
function Hello(){
	var name;
	
	this.setName = function(thyName){
		name = thyName;
	};
	
	this.sayHello = function(){
		console.log('Hello '+ name);
	};
};

exports.Hello = Hello;
//module.exports = Hello;