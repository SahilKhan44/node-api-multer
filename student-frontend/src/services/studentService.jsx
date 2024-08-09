import axios from 'axios';

const API_URL = 'http://localhost:5000/api/students'; // Update this URL if your API is hosted elsewhere

// Get all students
const getAllStudents = () => {
  return axios.get(API_URL);
};

// Create a new student
const createStudent = (student) => {
  return axios.post(API_URL, student, {
    headers: {
      'Content-Type': 'multipart/form-data', // Ensure this header is set when sending form data
    },
  });
};

// Update an existing student
const updateStudent = (id, student) => {
  return axios.put(`${API_URL}/${id}`, student, {
    headers: {
      'Content-Type': 'multipart/form-data', // Ensure this header is set when sending form data
    },
  });
};

// Delete a student
const deleteStudent = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};

export default {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};
