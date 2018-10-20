const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// mysql 연결하기
const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost', // 127.0.0.1
  user : 'root',
  password : '123qwe',
  database : 'session1'
});

connection.connect((err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log('연결됨');
});

app.listen(9090);

app.set('views',__dirname + '/template');
app.set('view engine','ejs');
// 미들웨어
app.use(bodyParser.urlencoded({extended : true}));

app.get('/',(req,res)=>{

  // let title = ['node project','react'];
  // let title2 = 'react';

  connection.query('SELECT * FROM test',(err,rows)=>{
    if(err){
      console.log(err);
      return;
    }
    /*
    [  { id: 1, title: 'node project' },
     { id: 2, title: 'react' } ]
    */
    console.log(rows);
    res.render('main',{
      result : rows,
      // title2 : title[1]
    });
  });
});

app.post('/add',(req,res)=>{
  console.log(req.body)
  // res.send('/ 로 부터 받은 데이터는 '+req.body.title);
  connection.query(
    // 'INSERT INTO test (title) values ("'+ req.body.title +'")',
    `INSERT INTO test (title) values ("${req.body.title}")`,
    (err,rows)=>{
    if(err) console.log(err);

    res.redirect('/');
  });
});

// mysql
/*
  SELECT (조회)
  INSERT (입력)
  UPDATE (수정)
  DELETE (삭제)

  NoSQL
*/















