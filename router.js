const controllers = require('./controllers');
let ObjectId = require('mongodb').ObjectID;
const model = require('./models');
const express        = require('express');
const app = express();
const router = express.Router();

module.exports = function(app, client) {

    app.get('/users', (req, res) => {
        
        controllers.basicUsers.get(req, res, client);
        
    });

    app.post('/users', (req, res) => {
        
        controllers.basicUsers.add(req, res, client);    

    });
    

    app.delete('/users/:id', (req, res) => {
        
        controllers.basicUsers.remove(req, res, client);

    });

    app.put('/users/:id', (req, res) => {
       
        controllers.basicUsers.update(req, res, client);

    });

};