import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import BookingTrackerPage from "./pages/BookingTrackerPage";
import DoctorsPage from "./pages/DoctorsPage/DoctorsPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import DepartmentsPage from "./pages/DepartmentsPage/DepartmentsPage";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <>
      <nav>
        <NavBar />
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* Departments list */}
        <Route path="/departments" element={<DepartmentsPage />} />

        {/* Doctors list for a department */}
        <Route path="/departments/:department" element={<DoctorsPage />} />

        {/* Booking page for a doctor */}
        <Route
          path="/departments/:department/:doctorId"
          element={<BookingPage />}
        />

        <Route path="/RegistrationPage" element={<RegistrationPage />} />
        <Route path="/check-status" element={<BookingTrackerPage />} />
        <Route path="*" element={<RegistrationPage />} />
      </Routes>
    </>
  );
};

export default App;
