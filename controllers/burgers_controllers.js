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
    burgers.insert(["name", "devoured"], [req.body.name, req.body.devoured], function(result) {
      res.json({ id: result.insertId });
    });
  });

// export routes
module.exports = router;