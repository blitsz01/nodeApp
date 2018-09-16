# nodeApp

## APP SUMMARY
The purpose of this resume style web app is to show off the developers talent in creating node applications using express. 
This also includes authentication via google passport login. The code that the developer use follows clean and modular 
coding standard to make sure that every piece of code is organize and independent freach other.

## How to run
Clone or download the repository and add your own Google ClientId and Client secret on app.js

`passport.use(new GoogleStrategy({
  clientID: 'yourClientId',
  clientSecret: 'yourClientSecret',
  callbackURL: 'http://localhost:3000/auth/google/callback'
}`

## Get your clien secret here :
https://console.developers.google.com
