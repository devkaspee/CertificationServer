var express = require('express');
var mysql = require('mysql');
var mysqlfunc = require('./mysqlfunc');
var bodyParser = require('body-parser');


var connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: 'root',
  password: '222222!!',
  database: "mydatabase"
});

var i = 0;
while (i < 1) {
  var name = `${(100000+i)}`.slice(1);
  connection.query(`INSERT INTO codes VALUES ("pm${name}", 0, 0);`, function(error, results, fields) {console.log(error);});


  i++
}
