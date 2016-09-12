var express = require('express');
var router = express.Router();

var UserListEntity = require('../models/UserList').UserListEntity;  

/* GET home page. */
router.get('/', function(req, res, next) {
  // 如果请求中的 cookie 存在 isVisit, 则输出 cookie
  // 否则，设置 cookie 字段 isVisit, 并设置过期时间为1分钟
  /*if (req.cookies.isVisit) {
    console.log(req.cookies);
    res.send("再次欢迎访问");
  } else {
    res.cookie('isVisit', 1, {maxAge: 60 * 1000});
    res.send("欢迎第一次访问");
  }*/

  // 检查 session 中的 isVisit 字段
  // 如果存在则增加一次，否则为 session 设置 isVisit 字段，并初始化为 1。
  /*if(req.session.isVisit) {
    req.session.isVisit++;
    res.send('<p>第 ' + req.session.isVisit + '次来此页面</p>');
  } else {
    req.session.isVisit = 1;
    res.send("欢迎第一次来这里");
    console.log(req.session);
  }*/

  res.render('index', { title: '微博首页' });
});

router.get('/u/:user', function(req, res) {
});

router.post('/post', function(req, res) {
});

router.get('/reg', function(req, res) {
	res.render('reg',{title: '用户注册'});
}).post('/doReg', function(req, res) {
	if(req.body['rePassword'] != req.body['password']){
		req.flash("2次输入的密码不一致");
		return res.redirect('/reg');
	}

	var username = req.body.username;
	var password = req.body.password;

	var newUser = new UserListEntity({
		username:username,
		password:password
	});

	UserListEntity.findOne({username:username},function(err,doc){
		if(doc){
			err = "username exists...";
		}

		if(err){
			//req.flash(err);
			return res.redirect('/reg');
		}

		newUser.save(function(err,row){ 
	        if(err){//服务器保存异常
	        	//req.flash("保存失败，请重试");
	            return res.redirect('/reg');  
	        }  

	        //req.session.user = newUser;
	        res.redirect('/');
	    });
	});

});

router.get('/login', function(req, res) {
}).post('/doLogin', function(req, res) {
});

router.get('/logout', function(req, res) {
});


module.exports = router;
