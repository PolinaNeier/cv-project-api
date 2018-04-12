const mongoDbClient = require('../app');
const db = require('../configs/db');

module.exports = {
    get: (client, res, req) => {
        let page = parseInt(req.query.page) || 1;
        let limit = parseInt(req.query.limit) || 2;
          client.collection('users').find({}).limit(limit).skip(limit*(page-1)).toArray((err, result) => {
            if (err) {
                res.send({'error':'An error has occurred'});
              } else {
                res.send(result);
              }
        })
    },
    
    add: ( newUser, client, res ) => {
        client.collection('users').insert(newUser, (err, result) => {
            if (err) { 
                res.send({ 'error': 'An error has occurred' }); 
              } else {
                res.send(result.ops[0]);
              }
        });   
    },

    remove: ( details, user, client, res ) => {
        client.collection('users').remove(details, (err, result) => {
            if(err) {
                res.send({ 'error': 'An error has occurred' })
            } else {
                res.send({ ...details, ...user });
            }
        })
    },

    updateName: ( details, newUser, client, res ) => {
        client.collection('users').update(details, newUser, (err, result) => {
            if(err) {
                res.send({ 'error': 'An error has occurred' })
            } else {
                res.send({ ...details, ...newUser });
            }
        })
    }, 
};
