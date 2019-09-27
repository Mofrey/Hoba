// External Dependancies
const mongoose = require('mongoose')

const wordSchema = new mongoose.Schema({
    _id: String, //primary key
    name: String,
    languageId: String, //foriegn key
    typeId: String, //foriegn key
    
})

module.exports = mongoose.model('Word', wordSchema)