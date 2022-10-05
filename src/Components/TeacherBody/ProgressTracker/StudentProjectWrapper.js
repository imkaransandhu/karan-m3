import StudentProject from "./StudentProject";

const StudentProjectWrapper = ({ studentProjectDetails }) => {
  const projects = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return (
    <div className="student-project-wrapper">
      {studentProjectDetails.map((student, index) => {
        return (
          <StudentProject student={student} key={index} projects={projects} />
        );
      })}
      ;
    </div>
  );
};

export default StudentProjectWrapper;
