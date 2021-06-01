const mongoose = require('mongoose');

const fosterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, minLength: 10, required: true },
    address: String,
    dogs: Array
});

const Foster = mongoose.model('Foster', fosterSchema);

module.exports = Foster;