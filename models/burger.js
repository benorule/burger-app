const orm = require('../config/orm.js'); // import orm.js

// object containing ORM function calls
var burger = {
    // calls selectAll method that retrieves data from database
    select: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
      },
    insert: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      }
};

module.exports = burger; // export object calls