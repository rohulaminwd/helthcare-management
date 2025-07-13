import React, { useState } from 'react';
import Logout from '../utils/Logout';
import { Link } from 'react-router-dom';

const NewpatientDashboard = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [activeNav, setActiveNav] = useState(0);
  const user = JSON.parse(localStorage.getItem('currentUser'));

  const showFeature = (featureId) => {
    setCurrentView(featureId);
    const navMapping = {
      'patient-appointments': 1,
      'patient-medical-history': 2,
      'patient-doctors-list': 3,
      'patient-request-appointment': 4,
      'patient-prescriptions': 5,
      'patient-share-data': 6,
    };
    setActiveNav(navMapping[featureId] || 0);
  };

  const showDashboard = () => {
    setCurrentView('dashboard');
    setActiveNav(0);
  };

  const dashboardStyle = {
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#f0f9ff',
    minHeight: '100vh',
  };

  const cardStyle = {
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    borderRadius: '16px',
    overflow: 'hidden',
  };

  const blockchainBadgeStyle = {
    background: 'rgba(45, 55, 72, 0.9)',
    color: 'white',
    borderRadius: '20px',
    padding: '4px 12px',
    fontSize: '0.75rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
  };

  const blockchainInfoStyle = {
    background: 'rgba(16, 185, 129, 0.05)',
    border: '1px dashed rgba(16, 185, 129, 0.3)',
    borderRadius: '10px',
    padding: '12px',
    fontFamily: 'monospace',
    fontSize: '0.85rem',
  };

  const medicalRecordStyle = {
    borderLeft: '4px solid #10b981',
    background: 'linear-gradient(to right, #f0fdf4, #ffffff)',
  };

  const prescriptionItemStyle = {
    borderLeft: '4px solid #8b5cf6',
    background: 'linear-gradient(to right, #f5f3ff, #ffffff)',
  };

  const appointmentCardStyle = {
    background: 'linear-gradient(to right, #fffbeb, #ffffff)',
    borderLeft: '4px solid #f59e0b',
  };

  const DashboardContent = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome back, {user?.name}
          </h2>
          <p className="text-gray-600">
            Here's your medical dashboard with blockchain security
          </p>
        </div>
        <div className="flex items-center gap-2" style={blockchainBadgeStyle}>
          <i className="fas fa-link"></i>
          <span>Connected to Blockchain Network</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dashboard Cards */}
        <div
          className="bg-white p-6 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          style={cardStyle}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <i className="fas fa-calendar-check text-blue-600 text-xl"></i>
            </div>
            <h2 className="text-xl font-bold text-gray-800">My Appointments</h2>
          </div>
          <p className="text-gray-600 mb-4">
            View and manage your upcoming medical appointments
          </p>
          <div className="flex items-center justify-between">
            <button
              onClick={() => showFeature('patient-appointments')}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium"
            >
              View Appointments
            </button>
            <span className="text-sm text-gray-500">2 upcoming</span>
          </div>
        </div>

        <div
          className="bg-white p-6 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          style={cardStyle}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <i className="fas fa-file-medical text-green-600 text-xl"></i>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Medical History</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Access your complete encrypted medical records
          </p>
          <button
            onClick={() => showFeature('patient-medical-history')}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium"
          >
            View History
          </button>
          <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
            <i className="fas fa-lock"></i>
            <span>Secured by blockchain encryption</span>
          </div>
        </div>

        <div
          className="bg-white p-6 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          style={cardStyle}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <i className="fas fa-user-md text-purple-600 text-xl"></i>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Doctors List</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Find specialists at different hospital nodes
          </p>
          <button
            onClick={() => showFeature('patient-doctors-list')}
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg font-medium"
          >
            Browse Doctors
          </button>
        </div>

        <div
          className="bg-white p-6 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          style={cardStyle}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <i className="fas fa-calendar-plus text-yellow-600 text-xl"></i>
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Request Appointment
            </h2>
          </div>
          <p className="text-gray-600 mb-4">
            Schedule a new appointment with your doctor
          </p>
          <button
            onClick={() => showFeature('patient-request-appointment')}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-medium"
          >
            Request Now
          </button>
        </div>

        <div
          className="bg-white p-6 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          style={cardStyle}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <i className="fas fa-prescription text-red-600 text-xl"></i>
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              My Prescriptions
            </h2>
          </div>
          <p className="text-gray-600 mb-4">
            Access your current and past medications
          </p>
          <button
            onClick={() => showFeature('patient-prescriptions')}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-medium"
          >
            View Prescriptions
          </button>
          <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
            <i className="fas fa-lock"></i>
            <span>Immutable blockchain records</span>
          </div>
        </div>

        <div
          className="bg-white p-6 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          style={cardStyle}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
              <i className="fas fa-share-alt text-indigo-600 text-xl"></i>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Share Data</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Securely share records with healthcare providers
          </p>
          <button
            onClick={() => showFeature('patient-share-data')}
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium"
          >
            Share Data
          </button>
          <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
            <i className="fab fa-ethereum"></i>
            <span>Blockchain permission system</span>
          </div>
        </div>
      </div>

      {/* Blockchain Security Section */}
      <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center animate-pulse">
            <i className="fas fa-link text-blue-600 text-2xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Blockchain Security
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <i className="fas fa-lock text-green-600"></i>
              </div>
              <h3 className="font-bold text-lg">Data Encryption</h3>
            </div>
            <p className="text-gray-600">
              All your medical records are encrypted and stored securely on the
              blockchain, accessible only with your permission.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <i className="fas fa-shield-alt text-purple-600"></i>
              </div>
              <h3 className="font-bold text-lg">Immutable Records</h3>
            </div>
            <p className="text-gray-600">
              Once added to the blockchain, your health data cannot be altered
              or deleted, ensuring a permanent audit trail.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <i className="fas fa-user-shield text-blue-600"></i>
              </div>
              <h3 className="font-bold text-lg">Permission Control</h3>
            </div>
            <p className="text-gray-600">
              You have complete control over who can access your medical data
              and for how long, with all access recorded on-chain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const AppointmentsPage = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fas fa-calendar-check text-blue-500"></i>
            My Appointments
          </h2>
          <button
            onClick={showDashboard}
            className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg font-medium flex items-center gap-2"
          >
            <i className="fas fa-arrow-left"></i> Back to Dashboard
          </button>
        </div>
        <div className="mb-6 flex flex-wrap gap-3">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
            Upcoming
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">
            Past Appointments
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">
            Cancelled
          </button>
        </div>
        <div className="space-y-4">
          <div
            className="bg-white p-5 rounded-xl shadow"
            style={appointmentCardStyle}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  Cardiology Consultation
                </h3>
                <p className="text-gray-600">
                  Dr. Sarah Johnson | Aug 15, 2023 at 10:30 AM
                </p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Confirmed
              </span>
            </div>
            <div className="mt-3">
              <p className="text-gray-700">
                <i className="fas fa-hospital text-gray-500 mr-2"></i>
                City General Hospital, Cardiology Wing
              </p>
              <p className="text-gray-700 mt-2">
                <i className="fas fa-stethoscope text-gray-500 mr-2"></i>
                Follow-up on hypertension management
              </p>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <i className="fas fa-calendar-edit mr-1"></i> Reschedule
              </button>
              <button className="text-red-600 hover:text-red-800 flex items-center ml-4">
                <i className="fas fa-times-circle mr-1"></i> Cancel
              </button>
            </div>
            <div className="mt-4" style={blockchainInfoStyle}>
              <div className="flex gap-4 flex-wrap">
                <div>
                  <span className="text-gray-500">Block #:</span>
                  <span className="font-mono ml-2">1248765</span>
                </div>
                <div>
                  <span className="text-gray-500">TX Hash:</span>
                  <span className="font-mono ml-2">0x8a3b...f7c2</span>
                </div>
                <div>
                  <span className="text-gray-500">Timestamp:</span>
                  <span className="font-mono ml-2">2023-07-20 14:30:22</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-white p-5 rounded-xl shadow"
            style={appointmentCardStyle}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  Annual Physical Examination
                </h3>
                <p className="text-gray-600">
                  Dr. Michael Chen | Sep 5, 2023 at 2:00 PM
                </p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Scheduled
              </span>
            </div>
            <div className="mt-3">
              <p className="text-gray-700">
                <i className="fas fa-hospital text-gray-500 mr-2"></i>
                Westside Medical Center
              </p>
              <p className="text-gray-700 mt-2">
                <i className="fas fa-stethoscope text-gray-500 mr-2"></i>
                Comprehensive annual checkup
              </p>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <i className="fas fa-calendar-edit mr-1"></i> Reschedule
              </button>
              <button className="text-red-600 hover:text-red-800 flex items-center ml-4">
                <i className="fas fa-times-circle mr-1"></i> Cancel
              </button>
            </div>
            <div className="mt-4" style={blockchainInfoStyle}>
              <div className="flex gap-4 flex-wrap">
                <div>
                  <span className="text-gray-500">Block #:</span>
                  <span className="font-mono ml-2">1253421</span>
                </div>
                <div>
                  <span className="text-gray-500">TX Hash:</span>
                  <span className="font-mono ml-2">0x5d2e...a9f1</span>
                </div>
                <div>
                  <span className="text-gray-500">Timestamp:</span>
                  <span className="font-mono ml-2">2023-07-25 09:15:47</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const MedicalHistoryPage = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fas fa-file-medical text-green-500"></i>
            Medical History
          </h2>
          <button
            onClick={showDashboard}
            className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg font-medium flex items-center gap-2"
          >
            <i className="fas fa-arrow-left"></i> Back to Dashboard
          </button>
        </div>
        <div className="mb-6 flex flex-wrap gap-3">
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
            All Records
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">
            Prescriptions
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">
            Test Reports
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">
            Diagnoses
          </button>
        </div>
        <div className="space-y-4">
          <div
            className="bg-white p-5 rounded-xl shadow"
            style={medicalRecordStyle}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  Blood Test Results
                </h3>
                <p className="text-gray-600">City Medical Lab | Jun 20, 2023</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                Test Report
              </span>
            </div>
            <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm text-gray-600">Cholesterol</p>
                <p className="font-bold">
                  180 mg/dL <span className="text-green-600">(Normal)</span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Glucose</p>
                <p className="font-bold">
                  92 mg/dL <span className="text-green-600">(Normal)</span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Hemoglobin</p>
                <p className="font-bold">
                  14.2 g/dL <span className="text-green-600">(Normal)</span>
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Vitamin D</p>
                <p className="font-bold">
                  28 ng/mL <span className="text-yellow-600">(Low)</span>
                </p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <i className="fas fa-file-pdf mr-1"></i> Download Report
              </button>
            </div>
            <div className="mt-4" style={blockchainInfoStyle}>
              <div className="flex gap-4 flex-wrap">
                <div>
                  <span className="text-gray-500">Block #:</span>
                  <span className="font-mono ml-2">1234598</span>
                </div>
                <div>
                  <span className="text-gray-500">IPFS Hash:</span>
                  <span className="font-mono ml-2">
                    QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco
                  </span>
                </div>
                <div>
                  <span className="text-gray-500">Timestamp:</span>
                  <span className="font-mono ml-2">2023-06-20 11:45:33</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-white p-5 rounded-xl shadow"
            style={medicalRecordStyle}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  Cardiology Consultation
                </h3>
                <p className="text-gray-600">Dr. Michael Chen | May 5, 2023</p>
              </div>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                Diagnosis
              </span>
            </div>
            <div className="mt-3">
              <p className="text-gray-700">
                <span className="font-semibold">Diagnosis:</span> Mild
                hypertension
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Treatment Plan:</span> Lifestyle
                modifications, monitor blood pressure twice daily, follow up in
                3 months.
              </p>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <i className="fas fa-file-pdf mr-1"></i> Download Report
              </button>
            </div>
            <div className="mt-4" style={blockchainInfoStyle}>
              <div className="flex gap-4 flex-wrap">
                <div>
                  <span className="text-gray-500">Block #:</span>
                  <span className="font-mono ml-2">1228765</span>
                </div>
                <div>
                  <span className="text-gray-500">TX Hash:</span>
                  <span className="font-mono ml-2">0x4c7a...d9f3</span>
                </div>
                <div>
                  <span className="text-gray-500">Timestamp:</span>
                  <span className="font-mono ml-2">2023-05-05 16:20:18</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DoctorsListPage = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fas fa-user-md text-purple-500"></i>
            Doctors List
          </h2>
          <button
            onClick={showDashboard}
            className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg font-medium flex items-center gap-2"
          >
            <i className="fas fa-arrow-left"></i> Back to Dashboard
          </button>
        </div>
        <div className="mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search by name, specialty or hospital..."
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                />
                <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>
            <div className="w-full md:w-48">
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                <option>All Specialties</option>
                <option>Cardiology</option>
                <option>Orthopedics</option>
                <option>Neurology</option>
                <option>Dermatology</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="p-5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                  <i className="fas fa-user-md text-purple-600 text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Dr. Sarah Johnson</h3>
                  <p className="text-gray-600">Cardiologist</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-gray-700">
                  <i className="fas fa-hospital text-blue-500"></i>
                  City General Hospital
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <i className="fas fa-star text-yellow-400"></i>
                  4.8 (124 reviews)
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <i className="fas fa-calendar-alt text-green-500"></i>
                  Available: Mon, Wed, Fri
                </p>
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => showFeature('patient-request-appointment')}
                  className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg font-medium"
                >
                  Request Appointment
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="p-5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <i className="fas fa-user-md text-blue-600 text-2xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Dr. Michael Chen</h3>
                  <p className="text-gray-600">Orthopedic Surgeon</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="flex items-center gap-2 text-gray-700">
                  <i className="fas fa-hospital text-blue-500"></i>
                  Westside Medical Center
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <i className="fas fa-star text-yellow-400"></i>
                  4.9 (98 reviews)
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <i className="fas fa-calendar-alt text-green-500"></i>
                  Available: Tue, Thu
                </p>
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => showFeature('patient-request-appointment')}
                  className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg font-medium"
                >
                  Request Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const RequestAppointmentPage = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fas fa-calendar-plus text-yellow-500"></i>
            Request Appointment
          </h2>
          <button
            onClick={showDashboard}
            className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg font-medium flex items-center gap-2"
          >
            <i className="fas fa-arrow-left"></i> Back to Dashboard
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Select Doctor
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-blue-300 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <i className="fas fa-user-md text-purple-600"></i>
                </div>
                <div>
                  <h4 className="font-bold">Dr. Sarah Johnson</h4>
                  <p className="text-gray-600">
                    Cardiologist | City General Hospital
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-blue-300 cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <i className="fas fa-user-md text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-bold">Dr. Michael Chen</h4>
                  <p className="text-gray-600">
                    Orthopedic Surgeon | Westside Medical Center
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Appointment Details
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Date</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Preferred Time
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500">
                  <option>Morning (8:00 AM - 11:00 AM)</option>
                  <option>Afternoon (1:00 PM - 4:00 PM)</option>
                  <option>Evening (5:00 PM - 7:00 PM)</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">
                  Reason for Visit
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  rows="3"
                  placeholder="Describe your symptoms or reason for appointment"
                ></textarea>
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-lg font-medium flex-1"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg font-medium flex-1"
                >
                  Request Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  const PrescriptionsPage = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fas fa-prescription text-red-500"></i>
            My Prescriptions
          </h2>
          <button
            onClick={showDashboard}
            className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg font-medium flex items-center gap-2"
          >
            <i className="fas fa-arrow-left"></i> Back to Dashboard
          </button>
        </div>
        <div className="mb-6 flex flex-wrap gap-3">
          <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
            Active
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">
            All
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg">
            Completed
          </button>
        </div>
        <div className="space-y-4">
          <div
            className="bg-white p-5 rounded-xl shadow"
            style={prescriptionItemStyle}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  Atorvastatin 20mg
                </h3>
                <p className="text-gray-600">
                  Prescribed by Dr. Sarah Johnson | Jul 15, 2023
                </p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Active
              </span>
            </div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Dosage</p>
                <p className="font-bold">20mg once daily</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-bold">90 days (Refills: 2)</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Purpose</p>
                <p className="font-bold">Cholesterol management</p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <i className="fas fa-file-pdf mr-1"></i> Download
              </button>
              <button className="text-red-600 hover:text-red-800 flex items-center ml-4">
                <i className="fas fa-shopping-cart mr-1"></i> Order Refill
              </button>
            </div>
            <div className="mt-4" style={blockchainInfoStyle}>
              <div className="flex gap-4 flex-wrap">
                <div>
                  <span className="text-gray-500">Block #:</span>
                  <span className="font-mono ml-2">1245678</span>
                </div>
                <div>
                  <span className="text-gray-500">TX Hash:</span>
                  <span className="font-mono ml-2">0x3a8f...b2d4</span>
                </div>
                <div>
                  <span className="text-gray-500">Timestamp:</span>
                  <span className="font-mono ml-2">2023-07-15 11:22:45</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="bg-white p-5 rounded-xl shadow"
            style={prescriptionItemStyle}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-gray-800">
                  Lisinopril 10mg
                </h3>
                <p className="text-gray-600">
                  Prescribed by Dr. Michael Chen | May 5, 2023
                </p>
              </div>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                Refill Available
              </span>
            </div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Dosage</p>
                <p className="font-bold">10mg once daily</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-bold">30 days (Refills: 1)</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Purpose</p>
                <p className="font-bold">Blood pressure control</p>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="text-blue-600 hover:text-blue-800 flex items-center">
                <i className="fas fa-file-pdf mr-1"></i> Download
              </button>
              <button className="text-red-600 hover:text-red-800 flex items-center ml-4">
                <i className="fas fa-shopping-cart mr-1"></i> Order Refill
              </button>
            </div>
            <div className="mt-4" style={blockchainInfoStyle}>
              <div className="flex gap-4 flex-wrap">
                <div>
                  <span className="text-gray-500">Block #:</span>
                  <span className="font-mono ml-2">1229876</span>
                </div>
                <div>
                  <span className="text-gray-500">TX Hash:</span>
                  <span className="font-mono ml-2">0x7e1a...c9f3</span>
                </div>
                <div>
                  <span className="text-gray-500">Timestamp:</span>
                  <span className="font-mono ml-2">2023-05-05 14:15:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ShareDataPage = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fas fa-share-alt text-indigo-500"></i>
            Share Medical Data
          </h2>
          <button
            onClick={showDashboard}
            className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg font-medium flex items-center gap-2"
          >
            <i className="fas fa-arrow-left"></i> Back to Dashboard
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Share with Doctor
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">
                  Select Doctor
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>Select a doctor...</option>
                  <option>Dr. Sarah Johnson (Cardiologist)</option>
                  <option>Dr. Michael Chen (Orthopedic Surgeon)</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Access Duration
                </label>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                  <option>One-time access</option>
                  <option>24 hours</option>
                  <option>7 days</option>
                  <option>30 days</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Data to Share
                </label>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="full-access"
                      className="mr-2 h-5 w-5 text-indigo-600"
                    />
                    <label htmlFor="full-access" className="text-gray-700">
                      Full Medical History
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="prescriptions"
                      className="mr-2 h-5 w-5 text-indigo-600"
                      defaultChecked
                    />
                    <label htmlFor="prescriptions" className="text-gray-700">
                      Prescription History
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="test-reports"
                      className="mr-2 h-5 w-5 text-indigo-600"
                      defaultChecked
                    />
                    <label htmlFor="test-reports" className="text-gray-700">
                      Test Reports
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">
                  Notes (Optional)
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  rows="2"
                  placeholder="Add a note for the doctor"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium w-full"
              >
                Share Data
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Sharing History
            </h3>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex justify-between">
                  <span className="font-semibold">Dr. Sarah Johnson</span>
                  <span className="text-sm text-gray-600">Jul 20, 2023</span>
                </div>
                <p className="text-gray-700 mt-1">
                  Prescriptions & Test Reports
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Access expires: Jul 27, 2023
                </p>
                <div className="mt-2 text-xs">
                  <span className="text-gray-500">TX Hash:</span>
                  <span className="font-mono ml-2">0x8f3e...a7c1</span>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex justify-between">
                  <span className="font-semibold">Westside Medical Center</span>
                  <span className="text-sm text-gray-600">May 10, 2023</span>
                </div>
                <p className="text-gray-700 mt-1">Full Medical History</p>
                <p className="text-sm text-gray-600 mt-2">One-time access</p>
                <div className="mt-2 text-xs">
                  <span className="text-gray-500">TX Hash:</span>
                  <span className="font-mono ml-2">0x5b2d...e9a4</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Blockchain Permissions
              </h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <i className="fas fa-shield-alt text-indigo-500 text-xl mt-1"></i>
                  <div>
                    <p className="font-medium">
                      Your data sharing is secured by smart contracts
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      All data sharing transactions are recorded on the
                      blockchain with expiration dates. You can revoke access at
                      any time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div style={dashboardStyle}>
      {/* Header */}
      <header
        className="text-white shadow-lg sticky top-0 z-10"
        style={{
          background: 'linear-gradient(135deg, #10b981 0%, #0d9488 100%)',
        }}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <i className="fas fa-user-injured text-2xl"></i>
            </div>
            <Link to="/">
              <h1 className="text-2xl font-bold">Patient Portal</h1>
              <p className="text-xs opacity-90">
                Blockchain-Powered Medical Records
              </p>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 
      10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 
      11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-end">
                <p className="font-semibold">{user?.name}</p>
                <p className="text-xs opacity-80">Patient ID: PT-789456</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <i className="fas fa-user uppercase">
                  {user?.name.slice(0, 1)}
                </i>
              </div>
            </div>
            <Logout />
            {/* <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg">
            </button> */}
          </div>
        </div>
        <nav className="container mx-auto px-4 flex overflow-x-auto py-2 gap-1">
          {[
            { id: 'dashboard', icon: 'fas fa-home', label: 'Dashboard' },
            {
              id: 'patient-appointments',
              icon: 'fas fa-calendar-check',
              label: 'My Appointments',
            },
            {
              id: 'patient-medical-history',
              icon: 'fas fa-file-medical',
              label: 'Medical History',
            },
            {
              id: 'patient-doctors-list',
              icon: 'fas fa-user-md',
              label: 'Doctors List',
            },
            {
              id: 'patient-request-appointment',
              icon: 'fas fa-calendar-plus',
              label: 'Request Appointment',
            },
            {
              id: 'patient-prescriptions',
              icon: 'fas fa-prescription',
              label: 'My Prescriptions',
            },
            {
              id: 'patient-share-data',
              icon: 'fas fa-share-alt',
              label: 'Share Data',
            },
          ].map((item, index) => (
            <button
              key={item.id}
              onClick={
                item.id === 'dashboard'
                  ? showDashboard
                  : () => showFeature(item.id)
              }
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeNav === index ? 'bg-white/20' : 'hover:bg-white/15'
              }`}
            >
              <i className={`${item.icon} mr-2`}></i>
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Content */}
      {currentView === 'dashboard' && <DashboardContent />}
      {currentView === 'patient-appointments' && <AppointmentsPage />}
      {currentView === 'patient-medical-history' && <MedicalHistoryPage />}
      {currentView === 'patient-doctors-list' && <DoctorsListPage />}
      {currentView === 'patient-request-appointment' && (
        <RequestAppointmentPage />
      )}
      {currentView === 'patient-prescriptions' && <PrescriptionsPage />}
      {currentView === 'patient-share-data' && <ShareDataPage />}
    </div>
  );
};

export default NewpatientDashboard;
