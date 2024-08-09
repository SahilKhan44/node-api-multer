import React from 'react';
import StudentItem from './StudentItem';

const StudentList = ({ students, onEdit, onDelete }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Student List</h2>
      <ul>
        {students.map(student => (
          <StudentItem
            key={student._id}
            student={student}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
