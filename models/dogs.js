const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: { type: String, require: true },
    age: { type: Number, require: true },
    sex: { type: String },
    fixed: { type: Boolean, require: true },
    description: String,
    conditions: String,
    male: String,
    female: String
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;