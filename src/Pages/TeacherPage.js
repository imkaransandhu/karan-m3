import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./../Styling/TeacherPage.css";

import TeacherNavBar from "../Components/TeacherNavBar/TeacherNavBar";
import TeacherSideNavBar from "../Components/TeacherSideNavBar/TeacherSideNavBar";
import TeacherFooter from "../Components/TeacherFooter/TeacherFooter";
import ProgressTracker from "../Components/TeacherBody/ProgressTracker/ProgressTracker";
import StudentProfile from "../Components/TeacherBody/StudentProfile/StudentProfile";

export default function TeacherPage() {
  const [sideBarViewSmall, setSideBarViewSmall] = useState(false);

  const changeSideBarView = () => {
    setSideBarViewSmall(!sideBarViewSmall);
  };

  return (
    <div>
      <TeacherNavBar />

      <div className="teacherBody dashboard-wrapper">
        <TeacherSideNavBar
          changeSideBarView={changeSideBarView}
          sideBarViewSmall={sideBarViewSmall}
        />
        <Routes>
          <Route
            path="/"
            element={<ProgressTracker sideBarViewSmall={sideBarViewSmall} />}
          />
          <Route
            path="/StudentProfile"
            sideBarViewSmall={sideBarViewSmall}
            element={<StudentProfile />}
          />
        </Routes>
      </div>

      <TeacherFooter />
    </div>
  );
}
