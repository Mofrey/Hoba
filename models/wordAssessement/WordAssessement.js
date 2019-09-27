// External Dependancies
const mongoose = require('mongoose')

const wordAssessementSchema = new mongoose.Schema({
    _id: String, 
    assesor: String,
    lastDateAssessed: String, 
    assessorsRemark: String, 
    wordStatus: String, 
    wordRating: String,
    dateRegistered: String,
    inventor: String,
})

module.exports = mongoose.model(' Word Assessement',  wordAssessementSchema)