var express = require('express');
var router = express.Router();

/* GET about. */
var about = require('./about');
router.get('/about', about);

var experience = require('./experience');
router.get('/experience',  experience);

var triangle = require('./triangle');
router.post('/triangle', triangle);

router.get('/userInfo',  function (req, res) {
    res.send({ userInfo: req.user });
});


module.exports = router;
