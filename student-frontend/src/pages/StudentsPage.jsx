import React, { useState, useEffect } from 'react';
import StudentList from '../components/StudentList';
import StudentForm from '../components/StudentForm';
import studentService from '../services/studentService';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await studentService.getAllStudents();
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleSave = async (student) => {
    const formData = new FormData();
    for (const key in student) {
      formData.append(key, student[key]);
    }

    try {
      if (currentStudent) {
        // Update existing student
        await studentService.updateStudent(currentStudent._id, formData);
      } else {
        // Create new student
        await studentService.createStudent(formData);
      }
      fetchStudents(); // Refresh the student list
      setCurrentStudent(null);
    } catch (error) {
      console.error("Error saving student:", error);
    }
  };

  const handleEdit = (student) => {
    setCurrentStudent(student);
  };

  const handleDelete = async (id) => {
    try {
      await studentService.deleteStudent(id);
      fetchStudents(); // Refresh the student list
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <div className="students-page p-8 bg-gray-100 min-h-screen">
      <StudentForm currentStudent={currentStudent} onSave={handleSave} />
      <StudentList students={students} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default StudentsPage;
