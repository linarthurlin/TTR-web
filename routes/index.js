var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('home.html', { root: 'public/static/pages' });
});
router.get('/home', function(req, res, next) {
  res.sendFile('home.html', { root: 'public/static/pages' });
});
router.get('/members', function(req, res, next) {
  res.sendFile('members.html', { root: 'public/static/pages' });
});
router.get('/sponsors', function(req, res, next) {
  res.sendFile('sponsors.html', { root: 'public/static/pages' });
});

module.exports = router;