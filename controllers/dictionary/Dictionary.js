// External Dependancies

// Get Data Models
const Dictionary = require('../../models/dictionary/Dictionary')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const dictionary = new Dictionary(req.body);

    // Save dictionary in the database
    dictionary.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Dictionary."
        });
    });
};

exports.findAll = (req, res) => {
    Dictionary.find()
    .then(dictionary => {
        res.send(dictionary);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Dictionary.findById(req.params.dictionaryId)
    .then(dictionary => {
        if(!dictionary) {
            return res.status(404).send({
                message: "Dictionary not found with id " + req.params.dictionaryId
            });            
        }
        res.send(dictionary);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Dictionary not found with id " + req.params.dictionaryId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.dictionaryId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.dictionaryId
    const art = req.body
    const { ...updateData } = art
    Dictionary.findByIdAndUpdate(id,updateData,{new: true})
    .then(dictionary => {
        if(!dictionary) {
            return res.status(404).send({
                message: "Dictionary not found with id " + req.params.dictionaryId
            });
        }
        res.send(dictionary);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Dictionary not found with id " + req.params.dictionaryId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.dictionaryId
        });
    });
};
exports.delete = (req, res) => {
    Dictionary.findByIdAndRemove(req.params.dictionaryId)
    .then(dictionary => {
        if(!dictionary) {
            return res.status(404).send({
                message: "Dictionary not found with id " + req.params.dictionaryId
            });
        }
        res.send({message: "Dictionary deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Dictionary not found with id " + req.params.dictionaryId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.dictionaryId
        });
    });
};