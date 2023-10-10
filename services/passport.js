const passport = require('passport');
//We only need the Strategy property so we add that one in particular
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

//pull a schema/model out of mongoose
//User object is model class
const User = mongoose.model('users');

//for loading into cookies
passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        })
});

// console.developers.google.com
passport.use(
    new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy: true
    }, 
    async (accessToken, refreshToken, profile, done) => {
        //this does not return a user directly but a promise
        console.log(profile);
        const existingUser = await User.findOne({ googleId: profile.id})
            if(existingUser){
                //we already have a record with the given profile ID
                return done(null, existingUser);
                //Hi dude
        

            }
                //we don't have a user record with this ID, make a new record
                //get access to mongoose model inside this file
                //console.log('profile', profile);
                //create a new instance of a User
                const user = await new User({ googleId: profile.id }).save();
                done(null, user);
        

        }
    )
);
