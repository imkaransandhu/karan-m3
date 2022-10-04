import { React } from "react";

import "./../Styling/TeacherPage.css";

// Bread
import TeacherNavBar from "../Components/TeacherNavBar/TeacherNavBar";
// Sausages
import TeacherSideNavBar from "../Components/TeacherSideNavBar/TeacherSideNavBar";
// Bacon
import ProgressTracker from "../Components/TeacherBody/ProgressTracker/ProgressTracker";
// Eggs
import TeacherFooter from "../Components/TeacherFooter/TeacherFooter";
import { Route, Routes } from "react-router-dom";
import StudentProfile from "../Components/TeacherBody/StudentProfile/StudentProfile";

export default function TeacherPage() {
  return (
    <div>
      <TeacherNavBar />

      <div className="teacherBody dashboard-wrapper">
        <TeacherSideNavBar />
        <Routes>
          <Route path="/" element={<ProgressTracker />} />
          <Route path="/StudentProfile" element={<StudentProfile />} />
        </Routes>
      </div>

      <TeacherFooter />
    </div>
  );
}
