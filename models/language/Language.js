// External Dependancies
const mongoose = require('mongoose')

const languageSchema = new mongoose.Schema({
    _id: String, 
    name: String, 
   
    
})

module.exports = mongoose.model('Language', languageSchema)