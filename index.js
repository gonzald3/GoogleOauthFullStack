//common js for sever because the code is older
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
//order does matter for Users model and access of database
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

//runs the authRoutes file and returns the function 
//immediately calling it with the app var
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
