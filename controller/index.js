//use express dependency it is routinh feature
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'We are going Express' });
});

//about page
router.get('/about', (req, res, next) => {
  res.render('about', {
      title: 'About this Site',
      pageText: 'Here is some info about this project'
      })
})

//exports make the controller public
module.exports = router;
