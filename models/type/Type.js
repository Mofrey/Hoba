// External Dependancies
const mongoose = require('mongoose')

const typeSchema = new mongoose.Schema({
    _id: String, 
    name: String, //part of speech
   
    
})

module.exports = mongoose.model('Type', typeSchema)