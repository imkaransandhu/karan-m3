import React from "react";
import WrapperStudentDetails from "./WrapperStudentDetails";

const StudentProfile = () => {
  return (
    <div className="dashboard">
      <div className="scroll-bar-outer">
        <div className="scroll-bar">
          <WrapperStudentDetails />
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
