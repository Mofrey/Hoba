// External Dependancies
const mongoose = require('mongoose')

const wordPostSchema = new mongoose.Schema({
    _id: String, 
    wordId: String,
    message: String, 
    userId: String,
    datePosted: String,
})

module.exports = mongoose.model('Word Post', wordPostSchema)