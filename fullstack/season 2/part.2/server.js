const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '123qwe',
  database : 'modu'
});

connection.connect((err)=>{
  if(err) {
    console.log(err);
    return;
  }

  console.log('연결됨');
});

app.listen(9091);

app.set('views');
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended : true }));

app.get('/',(req,res)=>{
  // res.send('Hello World');

  connection.query('SELECT * FROM test',(err,rows)=>{
    if(err){
      console.log(err);
    }
    console.log(rows);
    /*
    [
      { id: 1, title: 'MySQL' },
      { id: 2, title: 'MariaDB' },
      { id: 3, title: 'Oracle' }
    ]
    */
    res.render('index',{ database : rows });
  });

  // let data = {
  //   database : 'MySQL' // 데이터 베이스에서 가져오자
  // }

});

app.post('/add',(req,res)=>{

  // let title = ??;
  // console.log(req.body);
  // res.send(`post 방식으로 /add 에 왔음 ${req.body.title} 가지고 왔음`);

  let title = req.body.title;

  connection.query(`INSERT INTO test (title)
    VALUES ("${title}")`,(err,rows)=>{
      if(err){
        console.log(err);
      }
      res.redirect('/');
  });
});

/*

  INSERT INTO table () VALUES ();
  SELECT * FROM table;

  UPDATE table SET title="변경할 데이터" WHERE id="3";
  DELETE FROM table WHERE id="4";

*/











