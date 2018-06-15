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
    res.render('index');
});

router.post('/',function(req,res){
  if(req.session.uid){
    res.redirect('/loginin');
  }else{
 var username = req.body['accountL'];
 var userpass = req.body['pwdL'];
 if(userpass.length == 0 || username.length == 0){
    res.redirect('/');
 }else{
   User.checkAccount(username,userpass,function(err,result){
     if(result=='good'){
       res.redirect('/loginin');
     }else{
       res.redirect('/');
     }
   });
  }
}
});




module.exports = router;
