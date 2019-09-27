// External Dependancies
const mongoose = require('mongoose')

const commentReactionSchema = new mongoose.Schema({
    _id: String, 
    commentId: String,
    postId: String, 
    vote: String,
    user: String,
})

module.exports = mongoose.model('Comment Reaction', commentReactionSchema)