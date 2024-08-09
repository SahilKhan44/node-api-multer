const express = require('express');
const router = express.Router();
const multer = require('multer');
const Student = require('../models/student');

// Configure multer for file upload, storing files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Create a new student with optional image upload
router.post('/students', upload.single('image'), async (req, res) => {
  try {
    let imageBase64 = null;
    // Convert the uploaded image to a Base64 string
    if (req.file) {
      imageBase64 = req.file.buffer.toString('base64');
    }
    // Create a new student object with the provided data and image
    const student = new Student({
      ...req.body,
      image: imageBase64
    });
    // Save the student to the database
    await student.save();
    res.status(201).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all students
router.get('/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).send(students);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a single student by ID
router.get('/students/:id', async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a student by ID with optional image upload
router.put('/students/:id', upload.single('image'), async (req, res) => {
  try {
    let imageBase64 = null;
    // Convert the uploaded image to a Base64 string
    if (req.file) {
      imageBase64 = req.file.buffer.toString('base64');
    }
    // Prepare the updates, including the image if provided
    const updates = {
      ...req.body,
      image: imageBase64 || req.body.image // Update image only if a new one is provided
    };
    // Find the student by ID and update with the new data
    const student = await Student.findByIdAndUpdate(req.params.id, updates, { new: true, runValidators: true });
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a student by ID
router.delete('/students/:id', async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.status(200).send(student);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
