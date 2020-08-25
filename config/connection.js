var mysql = require('mysql'); // import sql package

// connect to sql database
// var con = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "myRootPassword",
//   database: "burgers_db",
// });

var con = mysql.createConnection(process.env.JAWSDB_URL);

// test connection
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = con; // export the connection