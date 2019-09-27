// External Dependancies

// Get Data Models
const WordDev = require('../../models/wordDev/WordDev')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const wordDev = new WordDev(req.body);

    // Save word in the database
    wordDev.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the WordDev."
        });
    });
};

exports.findAll = (req, res) => {
    WordDev.find()
    .then(wordDev => {
        res.send(wordDev);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    WordDev.findById(req.params.wordDevId)
    .then(wordDev => {
        if(!wordDev) {
            return res.status(404).send({
                message: "WordDev not found with id " + req.params.wordDevId
            });            
        }
        res.send(wordDev);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "WordDev not found with id " + req.params.wordDevId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.wordDevId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.wordDevId
    const art = req.body
    const { ...updateData } = art
    WordDev.findByIdAndUpdate(id,updateData,{new: true})
    .then(wordDev => {
        if(!wordDev) {
            return res.status(404).send({
                message: "WordDev not found with id " + req.params.wordDevId
            });
        }
        res.send(wordDev);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "WordDev not found with id " + req.params.wordDevId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.wordDevId
        });
    });
};
exports.delete = (req, res) => {
    WordDev.findByIdAndRemove(req.params.wordDevId)
    .then(wordDev => {
        if(!wordDev) {
            return res.status(404).send({
                message: "Word not found with id " + req.params.wordDevId
            });
        }
        res.send({message: "WordDev deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "WordDev not found with id " + req.params.wordDevId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.wordDevId
        });
    });
};