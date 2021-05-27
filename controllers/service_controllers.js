const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// IMPORT MODELS
const Dog = require('../models/dogs.js');

// ROUTES
// INDEX
router.get('/', (req, res) => {
    res.send('hello')
});

router.get('/dogs', (req, res) => {
    Dog.find({}, (err, allDogs) => {
        if (err) { res.send(err) }
        else {res.render('index.ejs', { dogs: allDogs })}
    })
})

// NEW
router.get('/dogs/new', (req, res) => {
    res.render('new.ejs')
});

// CREATE
router.post('/dogs/', (req, res) => {
    console.log(req.body);

    if (req.body.male === 'on') { req.body.sex = 'M' }
    else if (req.body.female === 'on') { req.body.sex = 'F' }

    if (req.body.fixed === 'on') { req.body.fixed = true }
    else { req.body.fixed = false }

    console.log(req.body);

    Dog.create(req.body, (err, createdDog) => { 
        if (err) { res.send(err) }
        else { res.redirect('/dogs') }
    });
});

// SHOW



// EDIT


// DELETE




module.exports = router;