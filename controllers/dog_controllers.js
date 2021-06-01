const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// IMPORT MODELS
const Dogs = require('../models/dogs.js');

// ROUTES
// INDEX
router.get('/', (req, res) => {
    res.send('hello')
});

router.get('/dogs', (req, res) => {
    Dogs.find({}, (err, allDogs) => {
        if (err) { res.send(err) }
        else {res.render('index.ejs', { dogs: allDogs })}
    })
})

// NEW
router.get('/dogs/new', (req, res) => {
    res.render('dog_new.ejs')
});

// CREATE
router.post('/dogs/', (req, res) => {
    console.log(req.body);

    if (req.body.male === 'on') { req.body.sex = 'M' }
    else if (req.body.female === 'on') { req.body.sex = 'F' }

    if (req.body.fixed === 'on') { req.body.fixed = true }
    else { req.body.fixed = false }

    console.log(req.body);

    Dogs.create(req.body, (err, createdDog) => { 
        if (err) { res.send(err) }
        else { res.redirect('/dogs') }
    });
});

// SHOW
router.get('/dogs/:id', (req, res) => {
    Dogs.findById(req.params.id, (err, foundDog) => {
        res.render('dog_show.ejs', { dog: foundDog })
    });
});

// DELETE
router.delete('/dogs/:id', (req, res) => {
    Dogs.findByIdAndRemove(req.params.id, (err, deletedDog) => {
        console.log(deletedDog);
        res.redirect('/dogs');
    });
});

// EDIT
router.get('/dogs/:id/edit', (req, res) => {
    Dogs.findById(req.params.id, (err, foundDog) => {
        res.render('dog_edit.ejs', { dog: foundDog })
    });
});

router.put('/dogs/:id', (req, res) => {
    if (req.body.male === 'on') { req.body.sex = 'M' }
    else if (req.body.female === 'on') { req.body.sex = 'F' }

    if (req.body.fixed === 'on') { req.body.fixed = true }
    else { req.body.fixed = false }

    Dogs.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedDog) => {
        res.redirect('/dogs')
    });
});

module.exports = router;