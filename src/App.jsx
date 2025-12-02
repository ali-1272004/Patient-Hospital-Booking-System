import React from "react";
import { Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import BookingTrackerPage from "./pages/BookingTrackerPage";
import DoctorsPage from "./Pages/DoctorsPage/DoctorsPage";
import BookingPage from "./pages/BookingPage/BookingPage";
import DepartmentsPage from "./Pages/DepartmentsPage/DepartmentsPage";
import HomePage from "./Pages/HomePage/HomePage";
import NavBar from "./Components/NavBar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/departments" element={<DepartmentsPage />} />
        <Route path="/departments/:department" element={<DoctorsPage />} />
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
