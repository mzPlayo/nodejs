var mongoose = require('mongoose');//引入mongoose库  
mongoose.connect('mongodb://localhost:27017/microblog');//mongodb连接地址,microblog为数据库名称,默认mongodb连接不需要密码  
exports.mongoose = mongoose;//导出mongoose对象 