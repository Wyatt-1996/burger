var connection = require('./connection');
var express = require('express');
var router = express.Router();

// gets all data from burger table
router.get("/all", function(req, res) {   
    connection.query("SELECT * FROM burger", function(err, results) {
        res.send(results);        
    });
});

// adds one burger to table
router.post("/add", function(req, res) {
    var name = req.body.burger_name;
    connection.query("INSERT INTO burger (burger_name) VALUES (?)", name, 
    function(err, results) {
        res.send(name);
    });
});

// change devoured to true
router.put("/eat/:id", function(req, res) {
    var id = req.params.id;
    connection.query("UPDATE burger SET devoured = 1 WHERE ?", [{id: id}], 
    function(err, results) {
        res.send(id);
    });
});

module.exports = router;