import { Route, Routes } from "react-router-dom";
import "./../Styling/TeacherPage.css";

import TeacherNavBar from "../Components/TeacherNavBar/TeacherNavBar";
import TeacherSideNavBar from "../Components/TeacherSideNavBar/TeacherSideNavBar";
import TeacherFooter from "../Components/TeacherFooter/TeacherFooter";
import ProgressTracker from "../Components/TeacherBody/ProgressTracker/ProgressTracker";
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
