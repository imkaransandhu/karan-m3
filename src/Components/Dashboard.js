import "./../Styling/Dashboard.css";
import ProgressTrackerHeader from "./ProgressTrackerHeader";
import StudentProjectWrapper from "./StudentProjectWrapper";

const Dashboard = () => {
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

export default Dashboard;
