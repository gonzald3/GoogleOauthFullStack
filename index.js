//common js for sever because the code is older
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
//order does matter for Users model and access of database
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

//runs the authRoutes file and returns the function 
//immediately calling it with the app var
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
