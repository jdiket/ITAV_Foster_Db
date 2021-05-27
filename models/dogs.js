const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
    name: { type: String, require: true },
    age: { type: Number, require: true },
    sex: { type: String },
    fixed: { type: Boolean, require: true }
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;