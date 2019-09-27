// External Dependancies

// Get Data Models
const CommentReaction = require('../../models/commentReaction/CommentReaction')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const commentReaction = new CommentReaction(req.body);

    // Save CommentReaction in the database
    commentReaction.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Post Reaction."
        });
    });
};

exports.findAll = (req, res) => {
    CommentReaction.find()
    .then(commentReaction => {
        res.send(commentReaction);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    CommentReaction.findById(req.params.commentReactionId)
    .then(commentReaction => {
        if(!commentReaction) {
            return res.status(404).send({
                message: "CommentReaction not found with id " + req.params.commentReactionId
            });            
        }
        res.send(commentReaction);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "PostReaction not found with id " + req.params.commentReactionId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.commentReactionId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.commentReactionId
    const art = req.body
    const { ...updateData } = art
    CommentReaction.findByIdAndUpdate(id,updateData,{new: true})
    .then(commentReaction => {
        if(!commentReaction) {
            return res.status(404).send({
                message: "CommentReaction not found with id " + req.params.commentReactionId
            });
        }
        res.send(commentReaction);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "CommentReaction not found with id " + req.params.commentReactionId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.commentReactionId
        });
    });
};
exports.delete = (req, res) => {
    CommentReaction.findByIdAndRemove(req.params.commentReactionId)
    .then(commentReaction => {
        if(!commentReaction) {
            return res.status(404).send({
                message: "CommentReaction not found with id " + req.params.commentReactionId
            });
        }
        res.send({message: "CommentReaction deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "CommentReaction not found with id " + req.params.commentReactionId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.commentReactionId
        });
    });
};