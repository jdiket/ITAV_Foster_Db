const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// IMPORT MODELS
const Dog = require('../models/dogs.js');

// ROUTES
// INDEX
router.get('/', (req, res) => {
    res.render('index.ejs')
});

// NEW
router.get('/new', (req, res) => {
    res.render('new.ejs')
});

// EDIT


// DELETE

// SHOW


module.exports = Router;