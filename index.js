//common js for sever because the code is older
const express = require('express');
const passport = require('passport');
//We only need the Strategy property so we add that one in particular
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys.js');

const app = express();


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


app.get('/auth/google', 
        passport.authenticate('google', {
            scope: ['profile', 'email']
    })

);


app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
