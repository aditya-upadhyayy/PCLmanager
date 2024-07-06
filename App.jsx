import React from "react";
import "./App.css";
import LoginAuth from "./auth/log/LoginAuth";
import { Routes, Route } from "react-router-dom";

import PclRegisterationForm from "./auth/constant/RegisterStudentUi";
// import RegistersPages from "./auth/constant/RegistersPages";  // Comment this line

//Students File import only
import StudentDashboard from "./Dashboard/Student/StudentDashboard";
import ViewMarksAttendance from "./Dashboard/Student/ViewMarksAttendance";
import ViewTeam from "./Dashboard/Student/ViewTeam";

//Admin File imports only
import MainAdmin from "./Dashboard/Admin/AdminDashboard";
import AdminPanel from "./Dashboard/Admin/AdminPanel";
import GuideAllocation from "./Dashboard/Admin/GuideAllocation";
import DashAd from "./Dashboard/Admin/DashAd"; // Import DashAd component

//teacher-registration
import RegisterGuidePage from "./auth/GuideConstant/RegisterGuidePage";
import GuideDashboard from "./Dashboard/Guide/GuideDashboard";
import TeacherRegistration from "./auth/log/TeacherRegistration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginAuth />} />
        <Route path="/admin" element={<MainAdmin />} />
        <Route path="/guide" element={<GuideDashboard />} />
        <Route path="/Student" element={<StudentDashboard />} />
        <Route path="/PclRegisters" element={<PclRegisterationForm />} />
        {/* <Route path="/PclRegister" element={<RegistersPages />} />  // Comment this line */}
        <Route path="/admin/panel" element={<AdminPanel />} />
        <Route path="/admin/guide-allocation" element={<GuideAllocation />} />
        <Route path="/admin/dashboard" element={<DashAd />} /> {/* Add the new route here */}
        <Route path="/Guide/registerform" element={<RegisterGuidePage />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/student/ViewTeam" element={<ViewTeam />} />
        <Route path="/student/ViewMarkAtt" element={<ViewMarksAttendance />} />
        <Route path="/teacher-registration" element={<TeacherRegistration />} />
      </Routes>
    </>
  );
}

export default App;
