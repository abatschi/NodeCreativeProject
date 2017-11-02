var express = require('express');
var router = express.Router();

var homework = [];

router.get('/', function(req, res, next) {
	res.sendFile('index.html', { root: 'public' });
});

router.get('/homework', function (req, res, next) {
        res.send(homework);
});

router.post('/addHomework', function (req, res) {
	homework.push(req.body);
	res.redirect('/');
});


module.exports = router;

