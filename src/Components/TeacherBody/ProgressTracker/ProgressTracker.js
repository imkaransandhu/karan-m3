import "./../../../Styling/TeacherBody.css";
import ProgressTrackerHeader from "./ProgressTrackerHeader";
import StudentProjectWrapper from "./StudentProjectWrapper";

const ProgressTracker = () => {
  return (
    <div className="dashboard">
      <div className="scroll-bar-outer">
        <div className="scroll-bar">
          <ProgressTrackerHeader />
          <StudentProjectWrapper />
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
