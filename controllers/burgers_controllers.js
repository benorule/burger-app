const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js'); // import burger.js

// routes and login within them
// route for select method
router.get("/", function(req, res) {
    burger.select(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// route for insert method
router.post("/api/burgers", function(req, res) {
    burger.insert(["burger_name", "devoured"], [req.body.name, req.body.devoured], function(result) {
      res.json({ id: result.insertId });
    });
  });

// route for update method
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update(
      {
        devoured: req.body.devoured
      },
      condition,
      function(result) {
        if (result.changedRows === 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        }
        res.status(200).end();
      }
    );
  });

// export routes
module.exports = router;