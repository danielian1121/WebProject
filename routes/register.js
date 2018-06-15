var express = require('express');
var router = express.Router();
var User = require('./user');
var session = require('express-session');
var cookieParser = require('cookie-parser');

router.use(cookieParser('sessiontest'));
router.use(session({
 secret: 'sessiontest',//与cookieParser中的一致
 resave: true,
 saveUninitialized:true
}));
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('register');
});

router.post('/', function(req, res, next) {
  var username = req.body['txtUserName'];
  var password = req.body['txtUserPwd'];
  User.createAccount(username,password,function(uid,result){
    if(result=='good'){
      res.redirect('/');
    }else{
      res.redirect('/register');
    }
  });
});

module.exports = router;
