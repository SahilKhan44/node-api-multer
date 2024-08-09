import React, { useState, useEffect } from 'react';

const StudentForm = ({ currentStudent, onSave }) => {
  const [student, setStudent] = useState({ name: '', age: '', grade: '', image: null });

  useEffect(() => {
    if (currentStudent) {
      setStudent(currentStudent);
    }
  }, [currentStudent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (e) => {
    setStudent(prevState => ({ ...prevState, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(student);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">{currentStudent ? 'Edit Student' : 'Add Student'}</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Name:</label>
        <input type="text" name="name" value={student.name} onChange={handleChange} required className="mt-1 p-2 w-full border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Age:</label>
        <input type="number" name="age" value={student.age} onChange={handleChange} required className="mt-1 p-2 w-full border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Grade:</label>
        <input type="text" name="grade" value={student.grade} onChange={handleChange} required className="mt-1 p-2 w-full border rounded" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Image:</label>
        <input type="file" onChange={handleFileChange} className="mt-1 p-2 w-full border rounded" />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">{currentStudent ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default StudentForm;
