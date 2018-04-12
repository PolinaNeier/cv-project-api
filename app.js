const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
app.use(bodyParser.urlencoded({ extended: true }));
const configs = require('./configs')['dev']; 
const db             = require('./configs/db');
const models = require('./models');
const ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');
mongoose.connect('mongodb://P.Neier:astRon23@ds241489.mlab.com:41489/cv-database');


MongoClient.connect(db.url, (err, client) => {
  if (err) {
    return console.log(err);
  }

  const myDatabase = client.db('cv-database');
  require('./router')(app, myDatabase);
  app.listen(configs.port, () => {
    console.log('We are live on ' + configs.port);
  });               
})

let dbmo = mongoose.connection;
dbmo.on('error', console.error.bind(console, 'connection error:'));
dbmo.once('open', function() {
  console.log('connected');
});


