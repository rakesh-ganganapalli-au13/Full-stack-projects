const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    email:{type:String,require},
    password:{type:String,require}
})

module.exports = mongoose.model('Users',UserSchema)