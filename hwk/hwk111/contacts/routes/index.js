var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', contacts: contacts });
});
router.post('/contacts', function(req, res, next) {
  contacts.push({name:req.body.name,phoneNumber:req.body.phoneNumber});
  res.render('index', { title: 'Express', contacts: contacts });
});

module.exports = router;

var contacts = [{name:'DonaldTrump', phoneNumber: 1234567},{name:'MikePence', phoneNumber: 7654321}, {name:'IvankaTrump', phoneNumber: 111111}];
