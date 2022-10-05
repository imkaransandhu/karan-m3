import React from "react";

const TableForStudentToExport = ({
  studentProjectDetails,
  studentProjectTable,
}) => {
  return (
    <table className="student-project-table" ref={studentProjectTable}>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Number of completed Projects</th>
          <th>Total Number of completed Projects</th>
          <th>completed Projects</th>
        </tr>

        {studentProjectDetails.map((student, index) => (
          <tr key={index}>
            <td>{student.studentName}</td>
            <td>{student.completedProjects.length}</td>
            <td>15</td>
            <td>{student.completedProjects.map((project) => `${project},`)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableForStudentToExport;
