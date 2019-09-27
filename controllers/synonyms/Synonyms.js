// External Dependancies

// Get Data Models
const Synonyms = require('../../models/synonyms/Synonyms')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const synonyms = new Synonyms(req.body);

    // Save word in the database
    synonyms.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Synonyms."
        });
    });
};

exports.findAll = (req, res) => {
    Synonyms.find()
    .then(synonyms => {
        res.send(synonyms);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Synonyms.findById(req.params.wordId)
    .then(synonyms => {
        if(!synonyms) {
            return res.status(404).send({
                message: "Synonyms not found with id " + req.params.synonymsId
            });            
        }
        res.send(word);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Synonyms not found with id " + req.params.synonymsId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.synonymsId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.synonymsId
    const art = req.body
    const { ...updateData } = art
    Synonyms.findByIdAndUpdate(id,updateData,{new: true})
    .then(synonyms => {
        if(!synonyms) {
            return res.status(404).send({
                message: "Synonyms not found with id " + req.params.synonymsId
            });
        }
        res.send(synonyms);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Synonyms not found with id " + req.params.synonymsId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.synonymsId
        });
    });
};
exports.delete = (req, res) => {
    Synonyms.findByIdAndRemove(req.params.synonymsId)
    .then(synonyms => {
        if(!synonyms) {
            return res.status(404).send({
                message: "Synonyms not found with id " + req.params.synonymsId
            });
        }
        res.send({message: "Synonyms deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Synonyms not found with id " + req.params.synonymsId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.synonymsId
        });
    });
};