var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
  fs.readFile('./data/about.json', (err, data) => {
    if (err) throw err;
    res.render('about', {
      layout: 'layoutPrivate',
      title: "Dev Profile",
      user: req.user,
      myInfo: JSON.parse(data)
    });
  });
});

/* GET experience page. */
router.get('/experience', function (req, res, next) {
  fs.readFile('./data/experience.json', (err, data) => {
    if (err) throw err;
    res.render('experience', {
      layout: 'layoutPrivate',
      title: "Experience",
      user: req.user,
      myexp: JSON.parse(data)
    });
  });
});

/* GET triangle page. */
router.get('/triangle', function (req, res, next) {
  res.render('triangle', {
    layout: 'layoutPrivate',
    title: "Triangle",
    user: req.user
  });
});

/* GET User Info Page. */
router.get('/userPage', function (req, res, next) {
  res.render('userPage', {
    layout: 'layoutPrivate',
    title: "User",
    user: req.user,
    userInfo: JSON.stringify(req.user, null, 2)
  });
});

/* GET code design explain page. */
router.get('/architecture', function (req, res, next) {
  fs.readFile('./data/cleanCode.json', (err, data) => {
    if (err) throw err;
    res.render('codearchitecture', {
      layout: 'layoutPrivate',
      title: "Code Architecture",
      user: req.user,
      code: JSON.parse(data)
    });
  });
});

/* GET contact page. */
router.get('/contact', function (req, res, next) {
  fs.readFile('./data/about.json', (err, data) => {
    if (err) throw err;
    res.render('contactinfo', {
      layout: 'layoutPrivate',
      title: "Contact Info",
      user: req.user,
      myInfo: JSON.parse(data)
    });
  });
});

/* GET triangle page. */
router.get('/logout', function (req, res, next) {
  req.logout();
  res.clearCookie();
  res.redirect("/");
});

module.exports = router;
