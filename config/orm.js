const connection = require('../config/connection.js'); // import connection.js

// object containing all sql statement functions/methods
var orm = {
    // method to retrieve data from database
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM" + table + ";"; // MySQL query to select everything from table
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function() {

    },
    updateOne: function() {
    }
};

module.exports = orm; // export object containing methods