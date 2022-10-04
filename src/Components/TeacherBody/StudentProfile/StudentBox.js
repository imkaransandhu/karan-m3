import React from "react";

const StudentBox = ({ student }) => {
  return (
    <div className="student-detail">
      <img src={student.imagelink} alt="Name" />
      <h3>{student.studentName}</h3>
    </div>
  );
};

export default StudentBox;
