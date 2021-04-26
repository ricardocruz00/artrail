var express = require('express');
var router = express.Router();
var artModel = require("../models/artesModel");

/* GET all artes */
router.get('/', async function(req, res, next) {
  let artes = req.query;  
  let result = await artModel.getAll(artes);
    res.status(result.status).
       send(result.data);
});


module.exports = router