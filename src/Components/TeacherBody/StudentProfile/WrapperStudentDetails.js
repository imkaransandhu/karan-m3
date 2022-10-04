import React from "react";
import StudentBox from "./StudentBox";

const WrapperStudentDetails = () => {
  const studentDetails = [
    { studentName: "AIDEN ANDREWS", imagelink: "./images/Ellipse 38-1.png" },
    { studentName: "COURTNEY BRISTOL", imagelink: "./images/Ellipse 38-2.png" },
    { studentName: "NAGINI CORTES", imagelink: "./images/Ellipse 38-3.png" },
    { studentName: "RAWIRI FLETCHER ", imagelink: "./images/Ellipse 38-4.png" },
    { studentName: "James Tomlin", imagelink: "./images/Ellipse 38-5.png" },
    { studentName: "Abdrew ANDREWS", imagelink: "./images/Ellipse 38-6.png" },
    { studentName: "Karan Singh ", imagelink: "./images/Ellipse 38-7.png" },
    { studentName: "Komal Kaur", imagelink: "./images/Ellipse 38-8.png" },
    { studentName: "Cyrus", imagelink: "./images/Ellipse 38-9.png" },
    { studentName: "Alexandra ", imagelink: "./images/Ellipse 38-10.png" },
    { studentName: "Karnsuda Cream", imagelink: "./images/Ellipse 38-11.png" },
    { studentName: "Jacob", imagelink: "./images/Ellipse 38-12.png" },
    { studentName: "Henry Smith", imagelink: "./images/Ellipse 38-13.png" },
    { studentName: "mason madonx", imagelink: "./images/Ellipse 38-14.png" },
  ];
  return (
    <div className="student-detail-wrapper">
      {studentDetails.map((student, index) => (
        <StudentBox key={index} student={student} />
      ))}
    </div>
  );
};

export default WrapperStudentDetails;
