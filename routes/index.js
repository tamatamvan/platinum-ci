var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/hello', function(req, res, next) {
  res.render('index', { title: 'Hello Platinum Foxes 2017!' });
});

module.exports = router;
