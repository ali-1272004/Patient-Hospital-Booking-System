
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { RegistrationDesignContent } from '../components/DesignSection';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    registrationFor: 'My self',
    fullName: '',
    mobileNumber: '',
    idType: '',
    idNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('بيانات التسجيل:', formData);
    alert(`Registration submitted for: ${formData.fullName}`);
  };

  const formContent = (
    <>
      <h2>Let's protect yourself and those around you by vaccinating 💉</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>I am registering for</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="registrationFor"
                value="My self"
                checked={formData.registrationFor === 'My self'}
                onChange={handleChange}
              />
              My self
            </label>
            <label>
              <input
                type="radio"
                name="registrationFor"
                value="Other people"
                checked={formData.registrationFor === 'Other people'}
                onChange={handleChange}
              />
              Other people
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="fullName">Patient's Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number</label>
          <small style={{display: 'block', marginBottom: '5px', color: '#666'}}>Notifications for appointment and reminders will be sent to this number.</small>
          <div className="input-with-button">
            <input
              type="tel"
              id="mobileNumber"
              name="mobileNumber"
              placeholder="Phone number"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
            <button type="button" className="verify-button">Verify</button>
          </div>
        </div>

        <div className="form-group">
          <label>Patient ID Number</label>
          <div className="id-group">
            <select
              name="idType"
              value={formData.idType}
              onChange={handleChange}
              required
            >
              <option value="">ID Type</option>
              <option value="NationalID">National ID</option>
              <option value="Passport">Passport</option>
              <option value="ResidencyID">Residency ID</option>
            </select>
            <input
              type="text"
              name="idNumber"
              placeholder="ID number"
              value={formData.idNumber}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>

      <p className="check-status">
        Already registered? <a href="/check-status">Check your status</a> 
      </p>
    </>
  );

  return (
    <Layout 
      designContent={<RegistrationDesignContent />}
      formContent={formContent}
    />
  );
};

export default RegistrationPage;