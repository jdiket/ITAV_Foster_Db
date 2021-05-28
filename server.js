// REQUIREMENTS
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const session = require('express-session');
const bcrypt = require('bcryptjs');

require('dotenv').config();

// CONFIG
const app = express();
const port = process.env.PORT || 3000;
const MONGODBURI = process.env.MONGODOURI || 'mongodb://localhost:27017/ITAV'

// EXPRESS MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// EXTERNAL MIDDLEWARE
app.use(methodOverride('_method'));

mongoose.connect(`${MONGODBURI}`, {
    useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false
});
mongoose.connection.once('open', () => { console.log('candygram for mongo') });

// CONTROLLERS
const serviceController = require('./controllers/service_controllers.js')
app.use(serviceController);

// LISTENER
app.listen(port, () => { console.log('5 by 5 on port: ', port) });