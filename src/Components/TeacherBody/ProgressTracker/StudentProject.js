const StudentProject = ({ student, projects }) => {
  return (
    <div className="student-projects">
      <div className="student-details">
        <h3 className="student-name">{student.studentName}</h3>
        <p className="project-completed-text">
          {`${student.completedProjects.length}/15 Projects Completed`}
        </p>
      </div>
      <div className="student-project-details">
        {projects.map((project, index) => {
          let goGreen;
          student.completedProjects.map((completedProject) => {
            completedProject === project &&
              (goGreen = "student-completed-projects");
          });
          return (
            <div className={`project-circle ${goGreen} `} key={index}>
              {project}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentProject;
