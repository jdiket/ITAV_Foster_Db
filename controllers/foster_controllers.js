const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const methodOverride = require('method-override');

// IMPORT MODELS
const Fosters = require('../models/fosters.js');

// ROUTES
// INDEX
router.get('/', (req, res) => {
    res.send('hello')
});

router.get('/foster', (req, res) => {
    Fosters.find({}, (err, allFosters) => {
        if (err) { res.send(err) }
        else {res.render('foster_index.ejs', { fosters: allFosters })}
    })
})

// NEW
router.get('/foster/new', (req, res) => {
    res.render('foster_new.ejs')
});

// CREATE
router.post('/foster', (req, res) => {

    console.log(req.body);

    Fosters.create(req.body, (err, createdFoster) => { 
        if (err) { res.send(err) }
        else { res.redirect('/foster') }
    });
});

// SHOW
router.get('/foster/:id', (req, res) => {
    Fosters.findById(req.params.id, (err, foundFoster) => {
        res.render('foster_show.ejs', { foster: foundFoster })
    });
});

// DELETE
router.delete('/foster/:id', (req, res) => {
    Fosters.findByIdAndRemove(req.params.id, (err, deletedFoster) => {
        console.log(deletedFoster);
        res.redirect('/foster');
    });
});

// EDIT
router.get('/foster/:id/edit', (req, res) => {
    Fosters.findById(req.params.id, (err, foundFoster) => {
        res.render('foster_edit.ejs', { foster: foundFoster })
    });
});

router.put('/foster/:id', (req, res) => {
    

    Fosters.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedFoster) => {
        res.redirect('/foster')
    });
});

module.exports = router;