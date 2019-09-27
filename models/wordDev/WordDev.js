// External Dependancies
const mongoose = require('mongoose')

const wordDevSchema = new mongoose.Schema({
    _id: String, 
    word: String,
    inventor: String, 
    wordType: String, 
    mophology: [Object], 
    dateRegistered: String,
    dataApproved: String,
})

module.exports = mongoose.model('Word Dev', wordDevSchema)