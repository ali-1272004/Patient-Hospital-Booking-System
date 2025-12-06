
import React from 'react';
import "../NavBar/NavBar.css";
import "tailwindcss";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCalendarAlt, faClock } from '@fortawesome/free-regular-svg-icons';


const AppointmentCard = ({ appointment, onCancel, onDetails, isCurrent }) => {
  const { id, doctor, specialty, date, time, status } = appointment;

 
  const borderColor = {
      'Confirmed': 'border-blue-500', 
      'Completed': 'border-green-500',
      'Canceled': 'border-red-500', 
  };
  const statusColors = {
      'Confirmed': 'bg-blue-600 text-white', 
      'Completed': 'bg-green-600 text-white',
      'Canceled': 'bg-red-600 text-white', 
  };


  return (
    <div className={`bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 border-t-4 ${borderColor[status]}`}>
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900 flex items-center">
        
          <FontAwesomeIcon icon={faUserMd} className="text-blue-700 mr-3" />
          {doctor} 
          <span className="text-sm font-medium text-gray-500 ml-3">({specialty})</span>
        </h3>
        
        {/* Status Badge */}
        <span className={`px-4 py-1 text-sm font-semibold rounded-full ${statusColors[status]} shadow-md`}>
          {status}
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 my-6 py-3 border-y border-gray-100 text-gray-700">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-xl text-blue-500 mr-3" />
          <span className="font-semibold">Date: </span>
          <span className="ml-1">{date}</span>
        </div>
        <div className="flex items-center">
          <FontAwesomeIcon icon={faClock} className="text-xl text-blue-500 mr-3" />
          <span className="font-semibold">Time: </span>
          <span className="ml-1">{time}</span>
        </div>
        <div className="flex items-center md:col-span-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl text-blue-500 mr-3" />
          <span className="font-semibold">Location: </span>
          <span className="ml-1">{appointment.location}</span>
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        {/* "View Details" Button */}
        <button
          onClick={() => onDetails(id)}
          className="btn-get-started"
        >
          View Details
        </button>

        {/* "Cancel Booking" Button */}
        {isCurrent && (
          <button
            onClick={() => onCancel(id)}
            className="btn-get-started-cancel"
          >
            Cancel Booking
          </button>
        )}
      </div>
    </div>
  );
};

export default AppointmentCard;