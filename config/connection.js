var mysql = require('mysql'); // import sql package

// connect to sql database
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "myRootPassword",
  database: "burgers_db"
});

// test connection
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con; // export the connection