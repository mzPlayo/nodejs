var base = require('./Base');  
var ObjectId = base.ObjectId;  
var UserListScheme =new base.Schema({  
	username:String,//用户名
    password:String,//密码  
});
var UserListEntity = base.mongoose.model('UserListEntity',UserListScheme,'userList');//指定在数据库中的collection名称为userList  
exports.UserListEntity  = UserListEntity;//导出实体