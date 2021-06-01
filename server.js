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
const MONGODBURI = process.env.MONGODBURI || 'mongodb://localhost:27017/ITAV'

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
const dogController = require('./controllers/dog_controllers.js');
const fosterController = require('./controllers/foster_controllers.js');
app.use(dogController);
app.use(fosterController);

// LISTENER
app.listen(port, () => { console.log('5 by 5 on port: ', port) });