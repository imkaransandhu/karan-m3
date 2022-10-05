import "./../../../Styling/TeacherBody.css";
import ProgressTrackerHeader from "./ProgressTrackerHeader";
import StudentProjectWrapper from "./StudentProjectWrapper";

const ProgressTracker = () => {
  const studentProjectDetails = [
    { studentName: "AIDEN ANDREWS", completedProjects: [1, 2, 3, 4] },
    { studentName: "COURTNEY BRISTOL", completedProjects: [1, 2, 3, 4] },
    { studentName: "NAGINI CORTES", completedProjects: [1, 2, 3, 4] },
    { studentName: "RAWIRI FLETCHER ", completedProjects: [1, 7, 9, 10] },
    { studentName: "James Tomlin", completedProjects: [4, 7, 12, 6, 7, 11] },
    { studentName: "Abdrew ANDREWS", completedProjects: [3, 6, 23, 15, 2, 4] },
    { studentName: "Karan Singh ", completedProjects: [1, 7, 9, 10] },
    { studentName: "Komal Kaur", completedProjects: [4, 7, 12, 6, 7, 11] },
    { studentName: "Cyrus", completedProjects: [3, 6, 23, 15, 2, 4] },
    { studentName: "Alexandra ", completedProjects: [1, 7, 9, 10] },
    { studentName: "Karnsuda Cream", completedProjects: [4, 7, 12, 6, 7, 11] },
    { studentName: "Jacob", completedProjects: [3, 6, 15, 2, 4] },
  ];

  return (
    <div className="dashboard">
      <div className="scroll-bar-outer">
        <ProgressTrackerHeader studentProjectDetails={studentProjectDetails} />
        <div className="scroll-bar">
          <StudentProjectWrapper
            studentProjectDetails={studentProjectDetails}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
