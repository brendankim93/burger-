var mysql = require("mysql");

//mysql://b3c3f8962912c9:7c39ddb1@us-cdbr-iron-east-04.cleardb.net/heroku_597f109a91bac38?reconnect=true

var connection = mysql.createConnection({
  host: "us-cdbr-iron-east-04.cleardb.net",
  user: "b3c3f8962912c9",
  password: "7c39ddb1",
  database: "heroku_597f109a91bac38",
  port: 3306
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
