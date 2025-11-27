
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { TrackerDesignContent } from '../components/DesignSection';
import StatusDetails from '../components/StatusDetails';

const BookingTrackerPage = () => {
  const [trackingID, setTrackingID] = useState('');
  const [bookingStatus, setBookingStatus] = useState(null); // null, 'pending', 'confirmed', 'not_found'

  const handleChange = (e) => {
    setTrackingID(e.target.value);
  };

  const handleTrack = (e) => {
    e.preventDefault();
    console.log('البحث عن الحجز بالرقم:', trackingID);
    
    // محاكاة للردود:
    if (trackingID === '12345') {
      setBookingStatus('confirmed');
    } else if (trackingID === '67890') {
      setBookingStatus('pending');
    } else {
      setBookingStatus('not_found');
    }
  };

  const formContent = (
    <>
      <h2>Track Your Vaccination Appointment Status</h2>
      
      <form onSubmit={handleTrack}>
        <div className="form-group">
          <label htmlFor="trackingID">Enter Patient / Tracking ID</label>
          <input
            type="text"
            id="trackingID"
            name="trackingID"
            placeholder="Booking Reference or ID Number"
            value={trackingID}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Track Status</button>
      </form>

      <StatusDetails bookingStatus={bookingStatus} />

      <p className="check-status">
        Need to register? <a href="/">Register Now</a>
      </p>
    </>
  );

  return (
    <Layout 
      designContent={<TrackerDesignContent />}
      formContent={formContent}
    />
  );
};

export default BookingTrackerPage;