const mongoose = require('mongoose')

const comment = new mongoose.Schema({
    body: {type: 'string', required:true},
    createdAt: {type: 'string', required:true},
    updatedAt: {type: 'string', required:true}
})