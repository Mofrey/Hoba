// External Dependancies

// Get Data Models
const WordPost = require('../../models/wordPost/WordPost')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const wordPost = new WordPost(req.body);

    // Save word in the database
    wordPost.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Word Post."
        });
    });
};

exports.findAll = (req, res) => {
    WordPost.find()
    .then(wordPost => {
        res.send(wordPost);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    wordPost.findById(req.params.wordPostId)
    .then(wordPost => {
        if(!wordPost) {
            return res.status(404).send({
                message: "Word Post not found with id " + req.params.wordPostId
            });            
        }
        res.send(wordPost);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Word not found with id " + req.params.wordPostId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.wordPostId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.wordPostId
    const art = req.body
    const { ...updateData } = art
    WordPost.findByIdAndUpdate(id,updateData,{new: true})
    .then(wordPost => {
        if(!wordPost) {
            return res.status(404).send({
                message: "word Post not found with id " + req.params.wordPostId
            });
        }
        res.send(wordPost);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "word not found with id " + req.params.wordPostId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.wordPostId
        });
    });
};
exports.delete = (req, res) => {
    WordPost.findByIdAndRemove(req.params.wordPostId)
    .then(wordPost => {
        if(!wordPost) {
            return res.status(404).send({
                message: "word Post not found with id " + req.params.wordPostId
            });
        }
        res.send({message: "Word Post deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Word Post not found with id " + req.params.wordPostId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.wordPostId
        });
    });
};