// External Dependancies
const mongoose = require('mongoose')

const synonymsSchema = new mongoose.Schema({
    _id: String, //foriegn key
    wordId: String, //foriegn key
    synonymsId: String, //foriegn key
    
})

module.exports = mongoose.model('Synonyms', synonymsSchema)