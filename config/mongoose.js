const mongoose = require('mongoose');

//mongoose.connect('mongodb://127.0.0.1:27017/contact_list_db');
const env = require('./environment');
mongoose.connect(`mongodb://127.0.0.1:27017/${env.db}`);
const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function () {
    // Perform any operations you need after connecting to the database

    // Replace the deprecated method with createIndexes
    mongoose.set('useCreateIndex', true);

    console.log('Connected to Database :: MongoDB');
});
module.exports = db;
