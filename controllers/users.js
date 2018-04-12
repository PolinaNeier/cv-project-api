const model = require('../models');
let ObjectId = require('mongodb').ObjectID;

module.exports = {

    get: (req, res, client ) => {

        const users = model.Users.get(client, res, req);

      },

    add: (req, res, client) => {

        const newUser = {
            name: req.body.name, 
            surname: req.body.surname,
            role: req.body.role,
            technicalExpertise: req.body.technicalExpertise,
            toolsAndFrameworks: req.body.toolsAndFrameworks,
            communication: req.body.communication,
            leadership: req.body.leadership,
            education: req.body.education,
        };

        const addedUser = model.Users.add(newUser, client, res);

      },

    remove: (req, res, client) => {
        const id = req.params.id;
        const user = { 
            name: req.body.name, 
            surname: req.body.surname,
            role: req.body.role,
            technicalExpertise: req.body.technicalExpertise,
            toolsAndFrameworks: req.body.toolsAndFrameworks,
            communication: req.body.communication,
            leadership: req.body.leadership,
            education: req.body.education,
         }
        const details = { '_id': new ObjectId(id) };

        const removedUser = model.Users.remove(details, user, client, res);
        
    },

    update: (req, res, client) => {
        const id = req.params.id;
        const details = { '_id': new ObjectId(id) };
        const newUser = { 
            name: req.body.name, 
            surname: req.body.surname,
            role: req.body.role,
            technicalExpertise: req.body.technicalExpertise,
            toolsAndFrameworks: req.body.toolsAndFrameworks,
            communication: req.body.communication,
            leadership: req.body.leadership,
            education: req.body.education,
         };

        const editedUser = model.Users.updateName(details, newUser, client, res);

      }

};