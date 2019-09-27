// External Dependancies

// Get Data Models
const PostReaction = require('../../models/postReaction/postReaction')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const postReaction = new PostReaction(req.body);

    // Save language in the database
    postReaction.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Post Reaction."
        });
    });
};

exports.findAll = (req, res) => {
    PostReaction.find()
    .then(postReaction => {
        res.send(postReaction);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    PostReaction.findById(req.params.postReactionId)
    .then(postReaction => {
        if(!postReaction) {
            return res.status(404).send({
                message: "PostReaction not found with id " + req.params.postReactionId
            });            
        }
        res.send(postReaction);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "PostReaction not found with id " + req.params.postReactionId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.postReactionId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.postReactionId
    const art = req.body
    const { ...updateData } = art
    PostReaction.findByIdAndUpdate(id,updateData,{new: true})
    .then(postReaction => {
        if(!postReaction) {
            return res.status(404).send({
                message: "PostReaction not found with id " + req.params.postReactionId
            });
        }
        res.send(postReaction);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "PostReaction not found with id " + req.params.postReactionId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.postReactionId
        });
    });
};
exports.delete = (req, res) => {
    PostReaction.findByIdAndRemove(req.params.postReactionId)
    .then(postReaction => {
        if(!postReaction) {
            return res.status(404).send({
                message: "PostReaction not found with id " + req.params.postReactionId
            });
        }
        res.send({message: "PostReaction deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "PostReaction not found with id " + req.params.postReactionId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.postReactionId
        });
    });
};