// External Dependancies

// Get Data Models
const Language = require('../../models/language/Language')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const language = new Language(req.body);

    // Save language in the database
    language.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Language."
        });
    });
};

exports.findAll = (req, res) => {
    Language.find()
    .then(language => {
        res.send(language);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Language.findById(req.params.languageId)
    .then(language => {
        if(!language) {
            return res.status(404).send({
                message: "Language not found with id " + req.params.languageId
            });            
        }
        res.send(language);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Language not found with id " + req.params.languageId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.languageId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.languageId
    const art = req.body
    const { ...updateData } = art
    Language.findByIdAndUpdate(id,updateData,{new: true})
    .then(language => {
        if(!language) {
            return res.status(404).send({
                message: "Language not found with id " + req.params.languageId
            });
        }
        res.send(language);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Language not found with id " + req.params.languageId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.languageId
        });
    });
};
exports.delete = (req, res) => {
    Language.findByIdAndRemove(req.params.languageId)
    .then(language => {
        if(!language) {
            return res.status(404).send({
                message: "Language not found with id " + req.params.languageId
            });
        }
        res.send({message: "Language deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Language not found with id " + req.params.languageId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.languageId
        });
    });
};