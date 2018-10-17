// with express
const express = require('express');
const app = express();
const path = require('path');

app.listen(9002);

app.set('views');
app.set('view engine','ejs');
app.use(express.static('public'));

// 라우트(갈래)
// GET, POST, PUT, DELETE
app.get('/',(req,res)=>{
  // res.send('<a href="/blog">블로그 페이지 이동</a>');
  // res.sendFile(path.join(__dirname + '/index.html'));
  res.render('index',{
    title : '노드 개발하기',
    number : [ 10, 20, 30, 40 ]
  });
});

app.get('/blog',(req,res)=>{
  res.send('<a href="/">메인 페이지 이동</a>');
});

// riahnrhyme
// riahnrhyme@gmail.com
// developer@jolse.com












