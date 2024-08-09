import React from 'react';

const StudentItem = ({ student, onEdit, onDelete }) => {
  return (
    <li className="border p-4 mb-4 rounded shadow">
      <h3 className="text-xl font-bold">{student.name}</h3>
      <p>Age: {student.age}</p>
      <p>Grade: {student.grade}</p>
      {student.image && <img src={`data:image/jpeg;base64,${student.image}`} alt={student.name} width="100" className="mt-2" />}
      <div className="mt-4">
        <button onClick={() => onEdit(student)} className="bg-yellow-500 text-white px-4 py-2 rounded mr-2">Edit</button>
        <button onClick={() => onDelete(student._id)} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
      </div>
    </li>
  );
};

export default StudentItem;
