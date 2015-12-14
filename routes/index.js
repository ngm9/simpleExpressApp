var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var options = {
    root: __dirname + '/../views/'
  }
  res.sendFile('index.html', options);
});

module.exports = router;
