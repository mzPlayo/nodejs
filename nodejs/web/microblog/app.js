// 加载依赖库，原来这个类库都封装在connect中，现在需单独加载
var express = require('express');
// 首先引入 express-session 这个模块
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var flash = require('connect-flash');

// 加载路由控制
var routes = require('./routes/index');
var users = require('./routes/users');
var user = require('./routes/user');
var config = require('./config/config');

// 创建项目实例
var app = express();

// view engine setup
// 定义EJS模板引擎和模板文件位置，也可以使用jade或其他模型引擎
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
// 定义icon图标
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// 定义日志和输出级别
app.use(logger('dev'));
// 定义数据解析器
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// 定义cookie解析器
app.use(cookieParser());
// 定义静态文件目录
app.use(express.static(path.join(__dirname, 'public')));
// 引入bower的静态包
app.use(express.static(path.join(__dirname, 'bower_components')));
//express4不支持flash 需要先使用npm install connect-flash 然后在app.js中添加如下代码:app.use(flash());
//app.use(flash());
//IPT 需要放在匹配路由代码之前
/*app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'recommand 128 bytes random string', // 建议使用 128 个字符的随机字符串
  cookie: { maxAge: 60 * 1000 }
}));*/
//使用session需要添加的内容
app.use(session({
  secret:config.cookieSecret,
  key:config.dbName,
  cookie:{maxAge:1000*60*60*24*30},
  store:new MongoStore({db:config.dbName})
}));


// 匹配路径和路由
app.use('/', routes);
app.use('/users', users);
app.use('/user', user);

// catch 404 and forward to error handler
// 404错误处理
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
// 开发环境，500错误处理和错误堆栈跟踪
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
// 生产环境，500错误处理
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//添加应用程序监听
/*app.listen(8888,function(){
  console.log("Server Start on port 8888...");
});*/

// 输出模型app
module.exports = app;
