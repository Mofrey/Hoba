// External Dependancies

// Get Data Models
const WordComment = require('../../models/wordComment/WordComment')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const wordComment = new WordComment(req.body);

    // Save word in the database
    wordComment.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Word Comment."
        });
    });
};

exports.findAll = (req, res) => {
    WordComment.find()
    .then(wordComment => {
        res.send(wordComment);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    wordComment.findById(req.params.wordCommentId)
    .then(wordComment => {
        if(!wordComment) {
            return res.status(404).send({
                message: "Word Comment not found with id " + req.params.wordCommentId
            });            
        }
        res.send(wordComment);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Word Comment not found with id " + req.params.wordCommentId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.wordCommentId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.wordCommentId
    const art = req.body
    const { ...updateData } = art
    WordComment.findByIdAndUpdate(id,updateData,{new: true})
    .then(wordComment => {
        if(!wordComment) {
            return res.status(404).send({
                message: "word Post not found with id " + req.params.wordCommentId
            });
        }
        res.send(wordComment);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "word not found with id " + req.params.wordCommentId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.wordCommentId
        });
    });
};
exports.delete = (req, res) => {
    WordComment.findByIdAndRemove(req.params.wordCommentId)
    .then(wordComment => {
        if(!wordComment) {
            return res.status(404).send({
                message: "WordComment not found with id " + req.params.wordCommentId
            });
        }
        res.send({message: "WordComment deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "WordComment not found with id " + req.params.wordCommentId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.wordCommentId
        });
    });
};