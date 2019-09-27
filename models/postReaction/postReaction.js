// External Dependancies
const mongoose = require('mongoose')

const postReactionSchema = new mongoose.Schema({
    _id: String, 
    postId: String,
    vote: String, 
    user: String,
})

module.exports = mongoose.model('Post Reaction', postReactionSchema)