import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./BookingPage.css";

const BookingPage = () => {
  const { department, doctorId } = useParams();
  const navigate = useNavigate();

  // Detect entry path: Path 1 (doctor card) or Path 2 (home page)
  const isPath1 = !!department && !!doctorId;

  // State management
  const [currentStep, setCurrentStep] = useState(isPath1 ? 2 : 1);
  const [selectedDepartment, setSelectedDepartment] = useState(
    department || ""
  );
  const [speciality, setSpeciality] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(doctorId || "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [bookingSummary, setBookingSummary] = useState(null);

  // DOCTORS DATA WITH DETAILED INFO & AVAILABILITY
  const doctorProfiles = {
    101: {
      id: 101,
      name: "Dr. Ahmed",
      title: "Consultant Orthopedic Surgeon",
      speciality: "Orthopedics",
      experience: "15+ years",
      bio: "Specialist in advanced orthopedic surgery with expertise in joint reconstruction and sports medicine. Board-certified and published researcher in spine surgery.",
      credentials: [
        "MD, Faculty of Medicine, Cairo University",
        "Orthopedic Surgery Specialization, Mayo Clinic USA",
        "Fellowship in Sports Medicine",
      ],
      badges: ["Verified Doctor", "Board Certified", "Award Winner 2023"],
      availability: {
        Monday: {
          slots: [
            "09:00",
            "09:30",
            "10:00",
            "10:30",
            "11:00",
            "14:00",
            "14:30",
            "15:00",
          ],
          booked: ["10:00", "14:30"],
        },
        Tuesday: {
          slots: [
            "09:00",
            "09:30",
            "10:00",
            "11:00",
            "11:30",
            "15:00",
            "15:30",
            "16:00",
          ],
          booked: ["09:30", "11:00"],
        },
        Wednesday: {
          slots: [
            "10:00",
            "10:30",
            "11:00",
            "11:30",
            "13:00",
            "14:00",
            "15:00",
          ],
          booked: ["11:00"],
        },
        Thursday: {
          slots: [
            "09:00",
            "09:30",
            "10:00",
            "10:30",
            "11:00",
            "14:00",
            "14:30",
            "15:00",
            "15:30",
          ],
          booked: ["10:30", "15:00"],
        },
        Friday: { slots: [], booked: [] },
        Saturday: {
          slots: [
            "10:00",
            "10:30",
            "11:00",
            "14:00",
            "14:30",
            "15:00",
            "15:30",
          ],
          booked: ["10:30", "15:30"],
        },
        Sunday: { slots: [], booked: [] },
      },
    },
    102: {
      id: 102,
      name: "Dr. Sara",
      title: "Orthopedic Joint Specialist",
      speciality: "Orthopedics",
      experience: "12+ years",
      bio: "Expert in joint replacement and arthroscopy with international training. Dedicated to minimally invasive surgical techniques.",
      credentials: [
        "MD, Ain Shams University",
        "Orthopedic Specialization, Germany",
        "Arthroscopy Certification",
      ],
      badges: ["Verified Doctor", "Board Certified"],
      availability: {
        Monday: {
          slots: [
            "09:00",
            "09:30",
            "10:00",
            "14:00",
            "14:30",
            "15:00",
            "15:30",
          ],
          booked: ["14:00"],
        },
        Tuesday: {
          slots: [
            "09:00",
            "10:00",
            "10:30",
            "11:00",
            "15:00",
            "15:30",
            "16:00",
          ],
          booked: [],
        },
        Wednesday: {
          slots: [
            "09:30",
            "10:00",
            "10:30",
            "11:00",
            "11:30",
            "14:00",
            "14:30",
            "15:00",
          ],
          booked: ["10:30", "14:00"],
        },
        Thursday: {
          slots: ["09:00", "09:30", "11:00", "14:00", "15:00"],
          booked: ["09:00"],
        },
        Friday: {
          slots: ["09:00", "10:00", "11:00", "14:00", "15:00"],
          booked: ["11:00"],
        },
        Saturday: { slots: [], booked: [] },
        Sunday: { slots: [], booked: [] },
      },
    },
    103: {
      id: 103,
      name: "Dr. Khaled",
      title: "Spine Surgery Consultant",
      speciality: "Orthopedics",
      experience: "18+ years",
      bio: "Leading spine surgeon with expertise in complex spinal disorders and minimally invasive techniques.",
      credentials: [
        "MD, Alexandria University",
        "Spine Surgery Fellowship, Johns Hopkins",
        "Neuromonitoring Certification",
      ],
      badges: ["Verified Doctor", "Board Certified", "Research Published"],
      availability: {
        Monday: {
          slots: ["10:00", "10:30", "11:00", "14:00", "14:30"],
          booked: [],
        },
        Tuesday: { slots: [], booked: [] },
        Wednesday: {
          slots: [
            "09:00",
            "09:30",
            "10:00",
            "10:30",
            "14:00",
            "14:30",
            "15:00",
          ],
          booked: ["09:30", "14:00"],
        },
        Thursday: {
          slots: ["09:00", "10:00", "10:30", "14:00", "15:00"],
          booked: [],
        },
        Friday: { slots: [], booked: [] },
        Saturday: {
          slots: ["10:00", "11:00", "14:00", "14:30"],
          booked: ["14:30"],
        },
        Sunday: { slots: [], booked: [] },
      },
    },
    201: {
      id: 201,
      name: "Dr. Mona",
      title: "Senior Pediatrician",
      speciality: "Pediatrics",
      experience: "14+ years",
      bio: "Compassionate pediatrician specializing in child development and preventive care. Mother-friendly approach to healthcare.",
      credentials: [
        "MD, Faculty of Medicine, Cairo University",
        "Pediatrics Specialization, UK",
        "Child Psychology Certificate",
      ],
      badges: ["Verified Doctor", "Board Certified"],
      availability: {
        Monday: {
          slots: [
            "08:00",
            "08:30",
            "09:00",
            "09:30",
            "10:00",
            "15:00",
            "15:30",
          ],
          booked: ["09:00"],
        },
        Tuesday: {
          slots: [
            "08:00",
            "08:30",
            "09:00",
            "10:00",
            "10:30",
            "15:00",
            "15:30",
            "16:00",
          ],
          booked: [],
        },
        Wednesday: {
          slots: ["08:30", "09:00", "09:30", "10:00", "15:00", "15:30"],
          booked: ["09:30"],
        },
        Thursday: {
          slots: ["08:00", "09:00", "10:00", "15:00", "15:30", "16:00"],
          booked: ["09:00", "15:30"],
        },
        Friday: { slots: [], booked: [] },
        Saturday: {
          slots: ["09:00", "09:30", "10:00", "14:00", "14:30"],
          booked: [],
        },
        Sunday: { slots: [], booked: [] },
      },
    },
    601: {
      id: 601,
      name: "Dr. Sameh",
      title: "Consultant Cardiologist",
      speciality: "Cardiology",
      experience: "16+ years",
      bio: "Expert in interventional cardiology with advanced diagnostic imaging skills. Committed to preventive heart care.",
      credentials: [
        "MD, Ain Shams University",
        "Cardiology Fellowship, Stanford",
        "Interventional Cardiology Certification",
      ],
      badges: ["Verified Doctor", "Board Certified", "Award Winner 2022"],
      availability: {
        Monday: {
          slots: ["09:00", "09:30", "10:00", "10:30", "11:00", "14:00"],
          booked: ["10:30"],
        },
        Tuesday: {
          slots: ["09:00", "09:30", "10:00", "11:00", "14:00", "14:30"],
          booked: ["09:00", "14:30"],
        },
        Wednesday: {
          slots: ["09:30", "10:00", "11:00", "14:00", "15:00"],
          booked: [],
        },
        Thursday: { slots: [], booked: [] },
        Friday: {
          slots: ["10:00", "11:00", "14:00", "14:30", "15:00"],
          booked: ["14:00"],
        },
        Saturday: { slots: ["10:00", "10:30", "11:00"], booked: [] },
        Sunday: { slots: [], booked: [] },
      },
    },
  };

  // Master departments data
  const departmentsData = {
    Orthopedics: {
      specialties: [
        "Orthopedic Surgeon",
        "Joint Specialist",
        "Spine Consultant",
        "Sports Injury Specialist",
        "Trauma & Fracture Expert",
      ],
      doctors: {
        "Orthopedic Surgeon": [
          { id: 101, name: "Dr. Ahmed" },
          { id: 105, name: "Dr. Hany" },
        ],
        "Joint Specialist": [
          { id: 102, name: "Dr. Sara" },
          { id: 105, name: "Dr. Hany" },
        ],
        "Spine Consultant": [
          { id: 103, name: "Dr. Khaled" },
          { id: 101, name: "Dr. Ahmed" },
        ],
        "Sports Injury Specialist": [{ id: 104, name: "Dr. Noor" }],
        "Trauma & Fracture Expert": [{ id: 105, name: "Dr. Hany" }],
      },
    },
    Pediatrics: {
      specialties: [
        "Pediatrician",
        "Neonatology Specialist",
        "Child Nutrition Consultant",
        "Pediatric Cardiologist",
      ],
      doctors: {
        Pediatrician: [{ id: 201, name: "Dr. Mona" }],
        "Neonatology Specialist": [{ id: 202, name: "Dr. Rania" }],
        "Child Nutrition Consultant": [{ id: 203, name: "Dr. Omar" }],
        "Pediatric Cardiologist": [{ id: 204, name: "Dr. Salma" }],
      },
    },
    Dermatology: {
      specialties: [
        "Dermatologist",
        "Cosmetic Dermatology Specialist",
        "Skin Allergy Consultant",
        "Laser Treatment Expert",
      ],
      doctors: {
        Dermatologist: [{ id: 301, name: "Dr. Karim" }],
        "Cosmetic Dermatology Specialist": [{ id: 302, name: "Dr. Heba" }],
        "Skin Allergy Consultant": [{ id: 303, name: "Dr. Tarek" }],
        "Laser Treatment Expert": [{ id: 304, name: "Dr. Dina" }],
      },
    },
    Ophthalmology: {
      specialties: [
        "Ophthalmologist",
        "Retina Specialist",
        "Glaucoma Consultant",
        "Pediatric Ophthalmologist",
      ],
      doctors: {
        Ophthalmologist: [{ id: 401, name: "Dr. Youssef" }],
        "Retina Specialist": [{ id: 402, name: "Dr. Mariam" }],
        "Glaucoma Consultant": [{ id: 403, name: "Dr. Samir" }],
        "Pediatric Ophthalmologist": [{ id: 404, name: "Dr. Layla" }],
      },
    },
    Dentistry: {
      specialties: [
        "Dentist",
        "Orthodontist",
        "Endodontics Specialist",
        "Oral Surgeon",
        "Pediatric Dentist",
      ],
      doctors: {
        Dentist: [{ id: 501, name: "Dr. Laila" }],
        Orthodontist: [{ id: 502, name: "Dr. Amr" }],
        "Endodontics Specialist": [{ id: 503, name: "Dr. Nada" }],
        "Oral Surgeon": [{ id: 504, name: "Dr. Hassan" }],
        "Pediatric Dentist": [{ id: 505, name: "Dr. Reem" }],
      },
    },
    Cardiology: {
      specialties: [
        "Cardiologist",
        "Interventional Cardiologist",
        "Electrophysiology Specialist",
        "Heart Failure Consultant",
        "Preventive Cardiology Specialist",
      ],
      doctors: {
        Cardiologist: [{ id: 601, name: "Dr. Sameh" }],
        "Interventional Cardiologist": [{ id: 602, name: "Dr. Hoda" }],
        "Electrophysiology Specialist": [{ id: 603, name: "Dr. Fady" }],
        "Heart Failure Consultant": [{ id: 604, name: "Dr. Nour" }],
        "Preventive Cardiology Specialist": [{ id: 605, name: "Dr. Yara" }],
      },
    },
  };

  const getDoctorProfile = (id) => {
    return (
      doctorProfiles[id] || {
        id,
        name: "Doctor",
        title: "Medical Professional",
        speciality: "Medical",
        experience: "Experienced",
        bio: "Dedicated healthcare professional.",
        credentials: [],
        badges: ["Verified Doctor"],
        availability: {},
      }
    );
  };

  const getAvailableSlotsForDate = (doctorId, selectedDate) => {
    if (!selectedDate) return [];
    const date = new Date(selectedDate);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    const profile = getDoctorProfile(doctorId);
    const daySlots = profile.availability[dayName];
    if (!daySlots) return [];
    return daySlots.slots.filter((slot) => !daySlots.booked.includes(slot));
  };

  const handleSubmit = () => {
    const doctor = getDoctorProfile(selectedDoctor);
    const summary = {
      department: selectedDepartment,
      speciality,
      doctor: doctor.name,
      date,
      time,
    };
    setBookingSummary(summary);
    setCurrentStep(isPath1 ? 3 : 5);
  };

  const handleConfirm = () => {
    console.log("Booking Confirmed:", bookingSummary);
    alert(
      `Booking Confirmed!\nDepartment: ${bookingSummary.department}\nSpeciality: ${bookingSummary.speciality}\nDoctor: ${bookingSummary.doctor}\nDate: ${bookingSummary.date}\nTime: ${bookingSummary.time}`
    );
    navigate("/check-status");
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        {/* Progress Bar */}
        <div className="progress-bar">
          <div className="progress-steps">
            {isPath1 ? (
              <>
                <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
                  <span>1</span> Date & Time
                </div>
                <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
                  <span>2</span> Confirmation
                </div>
              </>
            ) : (
              <>
                <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
                  <span>1</span> Department
                </div>
                <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
                  <span>2</span> Speciality
                </div>
                <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
                  <span>3</span> Doctor
                </div>
                <div className={`step ${currentStep >= 4 ? "active" : ""}`}>
                  <span>4</span> Date & Time
                </div>
                <div className={`step ${currentStep >= 5 ? "active" : ""}`}>
                  <span>5</span> Confirmation
                </div>
              </>
            )}
          </div>
        </div>

        {/* PATH 1: Doctor Card → Date/Time + Confirmation */}
        {isPath1 && (
          <>
            {currentStep === 2 && (
              <div className="booking-section ">
                {/* Doctor Info Section */}
                {selectedDoctor && (
                  <div className="doctor-info-section d-flex ">
                    <div className="doctor-header">
                      <div className="doctor-avatar">
                        <div className="avatar-placeholder">👨‍⚕️</div>
                      </div>
                      <div className="doctor-header-content">
                        <h3 className="doctor-name">
                          {getDoctorProfile(selectedDoctor).name}
                        </h3>
                        <p className="doctor-title">
                          {getDoctorProfile(selectedDoctor).title}
                        </p>
                        <div className="doctor-badges">
                          {getDoctorProfile(selectedDoctor).badges.map(
                            (badge, idx) => (
                              <span key={idx} className="badge">
                                ✓ {badge}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="doctor-details">
                      <div className="detail-row">
                        <span className="label">Speciality:</span>
                        <span className="value">
                          {getDoctorProfile(selectedDoctor).speciality}
                        </span>
                      </div>
                      <div className="detail-row">
                        <span className="label">Experience:</span>
                        <span className="value">
                          {getDoctorProfile(selectedDoctor).experience}
                        </span>
                      </div>
                      <div className="detail-row full-width">
                        <span className="label">Bio:</span>
                        <p className="bio-text">
                          {getDoctorProfile(selectedDoctor).bio}
                        </p>
                      </div>
                      <div className="detail-row full-width">
                        <span className="label">Credentials:</span>
                        <ul className="credentials-list">
                          {getDoctorProfile(selectedDoctor).credentials.map(
                            (cred, idx) => (
                              <li key={idx}>• {cred}</li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                <h2 className="form-title">Select Date & Time</h2>

                <form className="booking-form">
                  {/* Date Picker */}
                  <div className="form-group">
                    <label>Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                        setTime("");
                      }}
                      required
                    />
                  </div>

                  {/* Time Slots */}
                  {date && (
                    <div className="form-group">
                      <label>Available Time Slots</label>
                      <div className="time-slots-grid">
                        {getAvailableSlotsForDate(selectedDoctor, date).length >
                        0 ? (
                          getAvailableSlotsForDate(selectedDoctor, date).map(
                            (slot) => (
                              <button
                                key={slot}
                                type="button"
                                className={`time-slot ${
                                  time === slot ? "selected" : ""
                                }`}
                                onClick={() => setTime(slot)}
                              >
                                {slot}
                              </button>
                            )
                          )
                        ) : (
                          <p className="no-slots">
                            No available slots for this date. Please select
                            another date.
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="form-actions">
                    <button
                      type="button"
                      className="btn-back"
                      onClick={() => navigate(-1)}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      className="btn-next"
                      onClick={handleSubmit}
                      disabled={!date || !time}
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            )}

            {currentStep === 3 && bookingSummary && (
              <div className="booking-section">
                <h2>Booking Summary</h2>
                <div className="summary-card">
                  <div className="summary-row">
                    <span>Department:</span>
                    <strong>{bookingSummary.department}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Speciality:</span>
                    <strong>{bookingSummary.speciality}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Doctor:</span>
                    <strong>{bookingSummary.doctor}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Date:</span>
                    <strong>{bookingSummary.date}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Time:</span>
                    <strong>{bookingSummary.time}</strong>
                  </div>
                </div>
                <div className="form-actions">
                  <button
                    type="button"
                    className="btn-back"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="btn-confirm"
                    onClick={handleConfirm}
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            )}
          </>
        )}

        {/* PATH 2: Home Page → Full Flow */}
        {!isPath1 && (
          <>
            {/* Step 1: Department Filter */}
            {currentStep === 1 && (
              <div className="booking-section">
                <h2>Select Department</h2>
                <p className="section-subtitle">
                  Choose a department to get started
                </p>
                <form className="booking-form">
                  <div className="form-group">
                    <label>Department</label>
                    <select
                      value={selectedDepartment}
                      onChange={(e) => {
                        setSelectedDepartment(e.target.value);
                        setSpeciality("");
                        setCurrentStep(2);
                      }}
                      required
                    >
                      <option value="">Select Department</option>
                      {Object.keys(departmentsData).map((dept) => (
                        <option key={dept} value={dept}>
                          {dept}
                        </option>
                      ))}
                    </select>
                  </div>
                </form>
              </div>
            )}

            {/* Step 2: Speciality Filter */}
            {currentStep === 2 && selectedDepartment && (
              <div className="booking-section">
                <h2>Select Speciality</h2>
                <p className="section-subtitle">
                  Choose a speciality in {selectedDepartment}
                </p>
                <form className="booking-form">
                  <div className="form-group">
                    <label>Speciality</label>
                    <select
                      value={speciality}
                      onChange={(e) => {
                        setSpeciality(e.target.value);
                        setCurrentStep(3);
                      }}
                      required
                    >
                      <option value="">Select Speciality</option>
                      {departmentsData[selectedDepartment]?.specialties.map(
                        (spec) => (
                          <option key={spec} value={spec}>
                            {spec}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                  <div className="form-actions">
                    <button
                      type="button"
                      className="btn-back"
                      onClick={handleBack}
                    >
                      Back
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 3: Doctor Selection */}
            {currentStep === 3 && speciality && (
              <div className="booking-section">
                <h2>Select Doctor</h2>
                <p className="section-subtitle">Choose a {speciality}</p>
                <form className="booking-form">
                  <div className="form-group">
                    <label>Doctor</label>
                    <select
                      value={selectedDoctor}
                      onChange={(e) => {
                        setSelectedDoctor(e.target.value);
                        setCurrentStep(4);
                      }}
                      required
                    >
                      <option value="">Select Doctor</option>
                      {departmentsData[selectedDepartment]?.doctors[
                        speciality
                      ]?.map((doc) => (
                        <option key={doc.id} value={doc.id}>
                          {doc.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-actions">
                    <button
                      type="button"
                      className="btn-back"
                      onClick={handleBack}
                    >
                      Back
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 4: Date & Time Picker */}
            {currentStep === 4 && selectedDoctor && (
              <div className="booking-section">
                {/* Doctor Info Section */}
                <div className="doctor-info-section">
                  <div className="doctor-header">
                    <div className="doctor-avatar">
                      <div className="avatar-placeholder">👨‍⚕️</div>
                    </div>
                    <div className="doctor-header-content">
                      <h3 className="doctor-name">
                        {getDoctorProfile(selectedDoctor).name}
                      </h3>
                      <p className="doctor-title">
                        {getDoctorProfile(selectedDoctor).title}
                      </p>
                      <div className="doctor-badges">
                        {getDoctorProfile(selectedDoctor).badges.map(
                          (badge, idx) => (
                            <span key={idx} className="badge">
                              ✓ {badge}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="doctor-details">
                    <div className="detail-row">
                      <span className="label">Speciality:</span>
                      <span className="value">
                        {getDoctorProfile(selectedDoctor).speciality}
                      </span>
                    </div>
                    <div className="detail-row">
                      <span className="label">Experience:</span>
                      <span className="value">
                        {getDoctorProfile(selectedDoctor).experience}
                      </span>
                    </div>
                    <div className="detail-row full-width">
                      <span className="label">Bio:</span>
                      <p className="bio-text">
                        {getDoctorProfile(selectedDoctor).bio}
                      </p>
                    </div>
                    <div className="detail-row full-width">
                      <span className="label">Credentials:</span>
                      <ul className="credentials-list">
                        {getDoctorProfile(selectedDoctor).credentials.map(
                          (cred, idx) => (
                            <li key={idx}>• {cred}</li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <h2 className="form-title">Select Date & Time</h2>

                <form className="booking-form">
                  {/* Date Picker */}
                  <div className="form-group">
                    <label>Date</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => {
                        setDate(e.target.value);
                        setTime("");
                      }}
                      required
                    />
                  </div>

                  {/* Time Slots */}
                  {date && (
                    <div className="form-group">
                      <label>Available Time Slots</label>
                      <div className="time-slots-grid">
                        {getAvailableSlotsForDate(selectedDoctor, date).length >
                        0 ? (
                          getAvailableSlotsForDate(selectedDoctor, date).map(
                            (slot) => (
                              <button
                                key={slot}
                                type="button"
                                className={`time-slot ${
                                  time === slot ? "selected" : ""
                                }`}
                                onClick={() => setTime(slot)}
                              >
                                {slot}
                              </button>
                            )
                          )
                        ) : (
                          <p className="no-slots">
                            No available slots for this date. Please select
                            another date.
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="form-actions">
                    <button
                      type="button"
                      className="btn-back"
                      onClick={handleBack}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      className="btn-next"
                      onClick={handleSubmit}
                      disabled={!date || !time}
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 5: Confirmation */}
            {currentStep === 5 && bookingSummary && (
              <div className="booking-section">
                <h2>Booking Summary</h2>
                <div className="summary-card">
                  <div className="summary-row">
                    <span>Department:</span>
                    <strong>{bookingSummary.department}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Speciality:</span>
                    <strong>{bookingSummary.speciality}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Doctor:</span>
                    <strong>{bookingSummary.doctor}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Date:</span>
                    <strong>{bookingSummary.date}</strong>
                  </div>
                  <div className="summary-row">
                    <span>Time:</span>
                    <strong>{bookingSummary.time}</strong>
                  </div>
                </div>
                <div className="form-actions">
                  <button
                    type="button"
                    className="btn-back"
                    onClick={handleBack}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="btn-confirm"
                    onClick={handleConfirm}
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
