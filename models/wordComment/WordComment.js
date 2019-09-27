// External Dependancies
const mongoose = require('mongoose')

const wordCommentSchema = new mongoose.Schema({
    _id: String, 
    postId: String,
    comment: String, 
    user: String,
    date: String,
})

module.exports = mongoose.model('Word Comment', wordCommentSchema)