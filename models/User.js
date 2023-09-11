const mongoose= require('mongoose');

//Destructuring example take Schema from object Mongoose
//assign it to new Var names Schema
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String 

});

//create a collection
mongoose.model('users', userSchema );



