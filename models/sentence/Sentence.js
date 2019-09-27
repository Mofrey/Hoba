// External Dependancies
const mongoose = require('mongoose')

const sentenceSchema = new mongoose.Schema({
    _id: String, 
    example: String, 
   
    
})

module.exports = mongoose.model('Sentence', sentenceSchema)