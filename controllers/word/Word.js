// External Dependancies

// Get Data Models
const Word = require('../../models/word/Word')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const word = new Word(req.body);

    // Save word in the database
    word.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Word."
        });
    });
};

exports.findAll = (req, res) => {
    Word.find()
    .then(word => {
        res.send(word);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Word.findById(req.params.wordId)
    .then(word => {
        if(!word) {
            return res.status(404).send({
                message: "Word not found with id " + req.params.wordId
            });            
        }
        res.send(word);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Word not found with id " + req.params.wordId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.wordId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.wordId
    const art = req.body
    const { ...updateData } = art
    Word.findByIdAndUpdate(id,updateData,{new: true})
    .then(word => {
        if(!word) {
            return res.status(404).send({
                message: "Word not found with id " + req.params.wordId
            });
        }
        res.send(word);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "word not found with id " + req.params.wordId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.wordId
        });
    });
};
exports.delete = (req, res) => {
    Word.findByIdAndRemove(req.params.wordId)
    .then(word => {
        if(!word) {
            return res.status(404).send({
                message: "Word not found with id " + req.params.wordId
            });
        }
        res.send({message: "Word deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Dictionary not found with id " + req.params.wordId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.wordId
        });
    });
};