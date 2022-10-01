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
        {projects.map((project, index) => (
          <div className="project-circle" key={index}>
            {project}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentProject;
