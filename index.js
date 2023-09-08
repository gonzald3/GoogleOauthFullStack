//common js for sever because the code is older
const express = require('express');
require('./services/passport');


const app = express();

//runs the authRoutes file and returns the function 
//immediately calling it with the app var
require('./routes/authRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
