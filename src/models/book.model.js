const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    like: {type:integer,default:0},
    coverImg:{string:true, min:1},
    content:{string:true, required:true},
    createdAt:{type:string, required:true},
    updatedAt:{type:string, required:true}, 
})