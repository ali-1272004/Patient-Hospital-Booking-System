

import React from 'react';

import doctorImage from '../assets/doctor.png'; 

const RegistrationDesignContent = () => {
  return (
    <>
      <div className="doctor-image-container">
        <img
          src={doctorImage}
          alt="Smiling doctor with a clipboard"
          className="doctor-photo"
        />
        <p className="stat">🧪 5.7 Million doses injected</p>
        <p className="stat-bottom">✅ 98% recovery rate</p>
      </div>
    </>
  );
};

const TrackerDesignContent = () => {
  return (
    <>
      <div className="doctor-image-container">
        <p style={{ marginTop: '20px', fontSize: '1.2rem' }}>📊 Check Your Status</p>
        <p className="stat-bottom">Fast & Reliable Updates</p>
      </div>
    </>
  );
};

export { RegistrationDesignContent, TrackerDesignContent };