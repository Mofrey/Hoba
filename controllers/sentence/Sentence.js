// External Dependancies

// Get Data Models
const Sentence = require('../../models/sentence/Sentence')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const sentence = new Sentence(req.body);

    // Save sentence in the database
    sentence.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Sentence."
        });
    });
};

exports.findAll = (req, res) => {
    Sentence.find()
    .then(type => {
        res.send(type);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Sentence.findById(req.params.sentenceId)
    .then(sentence => {
        if(!sentence) {
            return res.status(404).send({
                message: "Sentence not found with id " + req.params.sentenceId
            });            
        }
        res.send(sentence);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Sentence not found with id " + req.params.sentenceId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.sentenceId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.sentenceId
    const art = req.body
    const { ...updateData } = art
    Sentence.findByIdAndUpdate(id,updateData,{new: true})
    .then(sentence => {
        if(!sentence) {
            return res.status(404).send({
                message: "Sentence not found with id " + req.params.sentenceId
            });
        }
        res.send(sentence);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Sentence not found with id " + req.params.sentenceId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.sentenceId
        });
    });
};
exports.delete = (req, res) => {
    Sentence.findByIdAndRemove(req.params.sentenceId)
    .then(sentence => {
        if(!sentence) {
            return res.status(404).send({
                message: "Sentence not found with id " + req.params.sentenceId
            });
        }
        res.send({message: "Sentence deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Sentence not found with id " + req.params.sentenceId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.sentenceId
        });
    });
};