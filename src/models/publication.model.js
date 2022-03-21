const mongoose = require('mongoose');

const publish = new mongoose.Schema({
    name: {type: String, required: true},
    createdAt: {type: String, required: true},
    updatedAt: {type: String, required: true}
})