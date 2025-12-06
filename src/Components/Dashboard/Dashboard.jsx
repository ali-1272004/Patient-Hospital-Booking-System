// src/components/Dashboard.jsx (المُعدَّل بـ Font Awesome)
import React, { useState, useMemo } from 'react';
import "../NavBar/NavBar.css"; 
import "tailwindcss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';



const INITIAL_APPOINTMENTS = [
    { id: 1, doctor: "Dr. Khaled Alajmi", specialty: "Cardiothoracic Surgery", date: "2025-12-10", time: "10:30 AM", status: "Confirmed", location: "Building (A) - Clinic 305" },
    { id: 2, doctor: "Dr. Noura Alsharif", specialty: "Pediatrics", date: "2025-12-05", time: "02:00 PM", status: "Completed", location: "Building (B) - Clinic 101" },
    { id: 3, doctor: "Dr. Fatimah Al-Zahra", specialty: "Dermatology", date: "2025-11-28", time: "09:00 AM", status: "Canceled", location: "Building (A) - Clinic 210" },
    { id: 4, doctor: "Dr. Anas Badr", specialty: "Dentistry", date: "2025-12-15", time: "11:00 AM", status: "Confirmed", location: "Building (C) - Clinic 500" },
];


const AppointmentTable = ({ appointments, title, onCancel, onDetails, isCurrent }) => {
    const actionHeader = isCurrent ? 'Actions' : 'Details';
    const titleColor = 'text-gray-800'; 
    const titleBorderClass = isCurrent ? 'border-b-4 border-blue-400' : 'border-b-2 border-gray-300';
    
    const statusClasses = {
        'Confirmed': 'text-blue-700 bg-blue-50 border-blue-200', 
        'Completed': 'text-green-700 bg-green-50 border-green-200',
        'Canceled': 'text-red-700 bg-red-50 border-red-200', 
    };

    const customTableNameClass = isCurrent ? 'upcoming-appointments-table' : 'past-appointments-table';

    return (
        <section className={`mb-8 ${customTableNameClass}`}>
            <h2 className={`text-xl font-bold mb-4 pb-2 ${titleBorderClass} ${titleColor} flex items-center`}>
                <FontAwesomeIcon 
                    icon={isCurrent ? faClock : faHistory} 
                    className={`${isCurrent ? 'text-blue-600' : 'text-gray-500'} mr-2 text-lg`} 
                />
                {title} ({appointments.length})
            </h2>
            
            <div 
                className="bg-white shadow-lg border border-gray-300 overflow-x-auto"
                style={{ borderRadius: '20px' }} 
            >
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Doctor</th>
                            <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Specialty</th>
                            <th className="px-4 md:px-6 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Date & Time</th>
                            <th className="px-4 md:px-6 py-3 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                            <th className="px-4 md:px-6 py-3 text-center text-sm font-semibold text-gray-700 uppercase tracking-wider">{actionHeader}</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {appointments.length > 0 ? (
                            appointments.map((app) => {
                                return (
                                    <tr key={app.id} className="hover:bg-gray-50 transition duration-100">
                                        <td className="px-4 md:px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">{app.doctor}</td>
                                        <td className="px-4 md:px-6 py-3 whitespace-nowrap text-sm text-gray-600">{app.specialty}</td>
                                        <td className="px-4 md:px-6 py-3 whitespace-nowrap text-sm text-gray-600">
                                            {app.date} <span className="text-xs text-gray-400">({app.time})</span>
                                        </td>
                                        <td className="px-4 md:px-6 py-3 whitespace-nowrap text-center">
                                            <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${statusClasses[app.status]}`}>
                                                {app.status}
                                            </span>
                                        </td>
                                        <td className="px-4 md:px-6 py-3 whitespace-nowrap text-center text-sm font-medium space-x-2">
                                            
                                            <button
                                                onClick={() => onDetails(app.id)}
                                                className="btn-get-started"
                                            >
                                                Details
                                            </button>

                                            {isCurrent && (
                                                <button
                                                    onClick={() => onCancel(app.id)}
                                                    className="btn-get-started-cancel"
                                                >
                                                    Cancel
                                                </button>
                                            )}
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="5" className="px-6 py-6 text-center text-gray-500">
                                    No appointments found in this section.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

const Dashboard = () => {
    // ... (logic for state and handlers remains the same) ...
    const [allAppointments, setAllAppointments] = useState(INITIAL_APPOINTMENTS);

    const currentAppointments = useMemo(() => 
        allAppointments.filter(app => app.status === 'Confirmed'), 
        [allAppointments]
    );
    
    const pastAppointments = useMemo(() => 
        allAppointments.filter(app => app.status === 'Completed' || app.status === 'Canceled'), 
        [allAppointments]
    );

    const handleCancel = (id) => {
        const isConfirmed = window.confirm(`Are you sure you want to cancel appointment ID ${id}?`);
        
        if (isConfirmed) {
            setAllAppointments(prevAppointments => 
                prevAppointments.map(app => 
                    app.id === id ? { ...app, status: 'Canceled' } : app
                )
            );
            alert(`Appointment ${id} has been successfully canceled and moved to past appointments.`);
        }
    };

    const handleDetails = (id) => {
        alert(`Viewing details for appointment ID: ${id}`);
    };

    return (
        <div className="min-h-screen bg-gray-50"> 
            <main className="flex-1 p-4 md:p-10">
                
                <header className="mb-10 pb-4 border-b border-gray-200 max-w-7xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-blue-700">Patient Dashboard</h1>
                    <p className="text-lg text-gray-500 mt-2">Manage your current and past medical bookings.</p>
                </header>
                
                <div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto" 
                    style={{ minWidth: '64%', maxWidth: '86%' }} 
                > 
                    
                    <AppointmentTable
                        appointments={currentAppointments}
                        title="Upcoming Appointments"
                        onCancel={handleCancel}
                        onDetails={handleDetails}
                        isCurrent={true}
                    />

                    <AppointmentTable
                        appointments={pastAppointments}
                        title="Past Appointment History"
                        onCancel={handleCancel}
                        onDetails={handleDetails}
                        isCurrent={false}
                    />
                </div>
            </main>
        </div>
    );
};

export default Dashboard;