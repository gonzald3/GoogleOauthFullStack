const passport = require('passport');
//We only need the Strategy property so we add that one in particular
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');


// console.developers.google.com
passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    }, 
    (accessToken, refreshToken, profile, done) => {
        console.log('accessToken', accessToken);
        console.log('refresh token', refreshToken);
        console.log('profile', profile);
        }
    )
);
