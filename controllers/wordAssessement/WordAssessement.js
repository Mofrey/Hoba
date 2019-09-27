// External Dependancies

// Get Data Models
const WordAssessement = require('../../models/wordAssessement/WordAssessement')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const  wordAssessement = new  WordAssessement(req.body);

    // Save word in the database
    wordAssessement.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Word Assessement."
        });
    });
};

exports.findAll = (req, res) => {
    WordAssessement.find()
    .then(wordAssessement => {
        res.send(wordAssessement);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    WordAssessement.findById(req.params.wordAssessementId)
    .then(wordAssessement => {
        if(!wordAssessement) {
            return res.status(404).send({
                message: "Word Assessementnot found with id " + req.params.wordAssessementId
            });            
        }
        res.send(wordAssessement);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Word Assessement not found with id " + req.params.wordAssessementId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.wordAssessementId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.wordAssessementId
    const art = req.body
    const { ...updateData } = art
    WordAssessement.findByIdAndUpdate(id,updateData,{new: true})
    .then(wordAssessement => {
        if(!wordAssessement) {
            return res.status(404).send({
                message: "Word not found with id " + req.params.wordAssessementId
            });
        }
        res.send(wordAssessement);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "word not found with id " + req.params.wordAssessementId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.wordAssessementId
        });
    });
};
exports.delete = (req, res) => {
    WordAssessement.findByIdAndRemove(req.params.wordAssessementId)
    .then(wordAssessement => {
        if(!wordAssessement) {
            return res.status(404).send({
                message: "Word Assessement not found with id " + req.params.wordAssessementId
            });
        }
        res.send({message: "Word Assessement deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Word Assessement not found with id " + req.params.wordAssessementId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.wordAssessementId
        });
    });
};