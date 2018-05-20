const mysql = require('mysql');

// Launch Database
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Lord-legolas",
    database: "watchSeries"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected! to MySql");
  });

