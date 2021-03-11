var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home' });
})

router.get('/signin', function(req, res, next) {
  res.render('signin', { title: 'Sign-in' });
})

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign-up' });
})

router.get('/hat', function(req, res, next) {
  res.render('hat', { title: 'Hat' });
})

router.get('/jacket', function(req, res, next) {
  res.render('jacket', { title: 'Jacket' });
})

router.get('/necklace', function(req, res, next) {
  res.render('necklace', { title: 'Necklace' });
})

router.get('/shoes', function(req, res, next) {
  res.render('shoes', { title: 'Shoes' });
})

router.get('/sweater', function(req, res, next) {
  res.render('sweater', { title: 'Sweater' });
})

router.get('/myaccount', function(req, res, next) {
  res.render('myaccount', {title : 'Myaccount'});
})

router.get('/cart', function(req, res, next) {
  res.render('cart', {title: 'Cart'});
})

router.get('/qna', function(req, res, next) {
  res.render('qna', {title: 'Q&A'});
})
module.exports = router;
