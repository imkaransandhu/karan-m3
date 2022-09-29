import "./../Styling/teacher.css";
import Dashboard from "./Dashboard";
import SideBar from "./SideBar";

const DashboardWrapper = () => {
  return (
    <div className="dashboard-wrapper">
      <SideBar />
      <Dashboard />
    </div>
  );
};

export default DashboardWrapper;
