

import React from 'react';

const StatusDetails = ({ bookingStatus }) => {
    
    const baseStyle = {
        padding: '1.5rem',
        borderRadius: '10px',
        marginTop: '2rem',
        borderLeft: '5px solid',
    };

    const confirmedStyle = {
        ...baseStyle,
        borderColor: '#28a745', 
        backgroundColor: '#e6ffe6',
    };

    const pendingStyle = {
        ...baseStyle,
        borderColor: '#ffc107', 
        backgroundColor: '#fffbe6',
    };

    const notFoundStyle = {
        ...baseStyle,
        borderColor: '#dc3545', 
        backgroundColor: '#ffe6e6',
    };

    switch (bookingStatus) {
        case 'confirmed':
            return (
                <div className="status-details" style={confirmedStyle}>
                    <h3>✅ Appointment Confirmed!</h3>
                    <p>Date: **Dec 15, 2025**</p>
                    <p>Time: **10:30 AM**</p>
                    <p>Location: **City Hospital - Main Branch**</p>
                    <button className="verify-button" style={{ marginTop: '1rem', borderRadius: '6px' }}>Download Confirmation</button>
                </div>
            );
        case 'pending':
            return (
                <div className="status-details" style={pendingStyle}>
                    <h3>⏳ Your Request is Pending Review</h3>
                    <p>We've received your application. Please check back later for your appointment details.</p>
                </div>
            );
        case 'not_found':
            return (
                <div className="status-details" style={notFoundStyle}>
                    <h3>❌ Booking Not Found</h3>
                    <p>Please double-check the ID number you entered and try again.</p>
                </div>
            );
        default:
            return null;
    }
};

export default StatusDetails;