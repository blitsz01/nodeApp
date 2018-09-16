var express = require('express');
var router = express.Router();
var passport = require('passport');

//Render Login Page
router.get('/', function (req, res) {
    if (!req.isAuthenticated())
        res.render('login', {title: "Login Page"});
    else
        res.redirect('/resume');
});

//Passport Oauth Authentication with Google
router.get('/auth/google',
    passport.authenticate('google',
        {
            scope: ['https://www.googleapis.com/auth/plus.login']
        })
);
router.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/'
    }),
    function (req, res) {
        res.redirect('/resume');
    });

module.exports = router;