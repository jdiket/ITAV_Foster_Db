const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    sex: { type: String },
    fixed: { type: Boolean, required: true },
    description: String,
    conditions: String,
    foster: String,
    male: String,
    female: String
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;