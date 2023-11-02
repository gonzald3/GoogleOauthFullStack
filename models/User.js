const mongoose= require('mongoose');

//Destructuring example take Schema from object Mongoose
//assign it to new Var names Schema
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: String,
    credits: { type: Number, default: 0 },
    email: String,
    photo: String

});

//create a collection
mongoose.model('users', userSchema );



