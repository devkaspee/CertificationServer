var express = require('express');
var mysql = require('mysql');
var mysqlfunc = require('./mysqlfunc');
var bodyParser = require('body-parser');


app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: 'root',
  password: '222222!!',
  database: "codedata"
});

connection.connect();

app.get('/', function(req, res) {
  res.send('Hello world\n');
});

app.get('/users', function(req, res) {
  return res.json(users);
});

app.post('/code', function(req, res) {

  var Isvalid = true;
  var IsExist = true;
  connection.query(`select * from codes where codenum = '${req.body.codenum}';`, function(error, results, fields) {

    if(results[0] == undefined){
      IsExist = false;
      Isvalid = false;


    }
    else if(results[0].valid != 0){
      Isvalid = false;


    }
    else{
      connection.query(`UPDATE codes SET counter = counter +1 WHERE codenum = "${req.body.codenum}";`)
    }


    if(IsExist && Isvalid){
      console.log(req.body.codenum);
      res.status(303)
      res.json({status:"true", valid:"true"})
    }
    else if(IsExist){
      res.json({status:"true", valid:"false"})
    }
    else{
      res.json({status:"false", valid:"false"})
    }
  });


});
app.listen(80, function() {
  console.log('Example app listening on port 3000');
});
