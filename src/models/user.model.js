const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type:String, required:true,minLength:3,maxLength:30},
    age: {type: integer, required:true, range:[1,150]},
    email:{type:String, required:true, unique:true},
    profileImages:{type:array, required:true, min:1},
    createdAt:{type:String, required},
    updatedAt:{type:String, required}
})

