// External Dependancies

// Get Data Models
const Type = require('../../models/type/Type')

exports.create = (req, res) => {
    // Validate request
    //console.log("content in json:  "+JSON.stringify(req.body));

    const type = new Type(req.body);

    // Save word in the database
    type.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Type."
        });
    });
};

exports.findAll = (req, res) => {
    Type.find()
    .then(type => {
        res.send(type);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.findOne = (req, res) => {
    Type.findById(req.params.typeId)
    .then(type => {
        if(!type) {
            return res.status(404).send({
                message: "Type not found with id " + req.params.typeId
            });            
        }
        res.send(type);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Type not found with id " + req.params.typeId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.typeId
        });
    });
};

exports.update = (req, res) => {
 
    const id = req.params.typeId
    const art = req.body
    const { ...updateData } = art
    Type.findByIdAndUpdate(id,updateData,{new: true})
    .then(type => {
        if(!type) {
            return res.status(404).send({
                message: "Type not found with id " + req.params.typeId
            });
        }
        res.send(type);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Type not found with id " + req.params.typeId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.typeId
        });
    });
};
exports.delete = (req, res) => {
    Type.findByIdAndRemove(req.params.typeId)
    .then(type => {
        if(!type) {
            return res.status(404).send({
                message: "Type not found with id " + req.params.typeId
            });
        }
        res.send({message: "Type deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Synonyms not found with id " + req.params.typeId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.typeId
        });
    });
};