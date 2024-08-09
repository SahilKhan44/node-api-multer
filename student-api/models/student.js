const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  grade: { type: String, required: true },
  image: { type: String } // Base64 image string
});

module.exports = mongoose.model('Student', studentSchema);
