const express = require('express');
const app = express();
const path = require('path');

app.listen(9091);

app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.use(express.static('public'));

// route
// GET(조회), POST(입력), PUT(수정), DELETE(삭제)
app.get('/',function(req,res){

  const data = {
    title : '메인페이지',
    number : [ 10, 20, 30, 40, 50 ]
  }

  res.render('index',data);
  // res.send('<a href="/login">로그인하러 가기</a>');
  // res.sendFile(path.join(__dirname) + '/index.html');
  // res.json({ a : 10 });
  // res.redirect('/aa');
});

app.get('/login',function(req,res){
  res.send('<a href="/">메인으로 가기</a>');
});

// github
// github.com/riahnrhyme
// modu-project
// hanpixel.com
















