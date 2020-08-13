const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js'); // import burger.js

// routes and login within them
router.get("/", function(req, res) {
    burger.select(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});