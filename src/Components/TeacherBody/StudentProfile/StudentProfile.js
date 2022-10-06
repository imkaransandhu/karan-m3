import React from "react";
import WrapperStudentDetails from "./WrapperStudentDetails";

const StudentProfile = ({ sideBarViewSmall }) => {
  return (
    <div
      style={{
        minWidth: sideBarViewSmall && "calc(100vw - 7rem)",
        width: sideBarViewSmall && "calc(100vw - 7rem)",
      }}
      className="dashboard"
    >
      <div className="scroll-bar-outer">
        <div className="scroll-bar">
          <WrapperStudentDetails />
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
