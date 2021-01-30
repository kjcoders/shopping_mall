var express = require('express');
var router = express.Router();

// DB information include handleDisconnect
var mysql = require('mysql');
var db_config = {
  host : 'us-cdbr-east-03.cleardb.com',
  user : 'bbb39d96e5a13c',
  password : 'b63d2f30',
  database : 'heroku_8656974046e2b96'
};

var connection;

function handleDisconnect() {
  connection = mysql.createConnection(db_config);
  connection.connect(function(err) {
    if(err) {
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000);
    }
    console.log('Success to connect db!');
  });
  connection.on('error', function(err) {
    console.log('db error', err);
    if(err.code === 'PROTOCOL_CONNECTION_LOST') { 
      handleDisconnect();
    } else {
      throw err;
    }
  });
}

handleDisconnect();



router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
})

module.exports = router;