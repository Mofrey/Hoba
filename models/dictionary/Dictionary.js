// External Dependancies
const mongoose = require('mongoose')

const dictionarySchema = new mongoose.Schema({
    _id: String,
    wordId: String,
    translationId: String,
    sentenceId: String,
    
})

module.exports = mongoose.model('Dictionary', dictionarySchema)