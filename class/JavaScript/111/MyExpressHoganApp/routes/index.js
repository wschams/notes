var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/sayHello', function (req, res, next) {
  res.render('hello', { title: 'Express', name: req.query.name || 'unknown' });
});

router.get('/sayHello2/:name', function (req, res, next) {
  res.render('hello', { title: 'Express', name: req.params.name });
});

router.param('id', (req, res, next) => {
  res.locals.user = {
    name: 'Donald',
    id: req.params.id
  };
  next();
});

router.get('/seeUser/:id', function (req, res, next) {
  res.render('user', { title: 'Express' });
});

router.get('/dontSeeUser/', function (req, res, next) {
  res.render('user', { title: 'Express' });
});



module.exports = router;
