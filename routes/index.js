var express = require('express');
var router = express.Router();
const sql = require("../models/dboperation");

/* GET home page. */
router.get('/', function(req, res, next) {
  sql.getdata();
  res.render('index', { title: 'Express' });
});

module.exports = router;
