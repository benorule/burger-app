const connection = require('../config/connection.js'); // import connection.js

// object containing all sql statement functions/methods
var orm = {
    // method to retrieve data from database
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";"; // MySQL query to select everything from table
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    // method to insert data into database
    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString(); // turning the number of columns, an integer, to a string for SQL query
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length); // one question mark in SQL query for each value
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    // method to update data in database
    updateOne: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;
    
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;
    
        console.log(queryString);
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      }
};

module.exports = orm; // export object containing methods