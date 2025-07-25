import React, { useState } from 'react';
import Logout from '../utils/Logout';
import { Link } from 'react-router-dom';

const NewDoctorDashboard = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [activeNav, setActiveNav] = useState(0);
  const user = JSON.parse(localStorage.getItem('currentUser'));

  const showFeature = (featureId) => {
    setCurrentView(featureId);
    const navMapping = {
      'doctor-my-patients': 1,
      'doctor-patient-lookup': 2,
      'doctor-write-prescription': 3,
      'doctor-upload-results': 4,
      'doctor-global-view': 5,
      'doctor-node-status': 6,
      'doctor-ipfs-attach': 7,
    };
    setActiveNav(navMapping[featureId] || 0);
  };

  const showDashboard = () => {
    setCurrentView('dashboard');
    setActiveNav(0);
  };

  const dashboardStyle = {
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#f5f3ff',
    minHeight: '100vh',
  };

  const cardStyle = {
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    borderRadius: '16px',
    overflow: 'hidden',
  };

  //   const cardHoverStyle = {
  //     transform: 'translateY(-5px)',
  //     boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
  //   };

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
    background: 'rgba(139, 92, 246, 0.05)',
    border: '1px dashed rgba(139, 92, 246, 0.3)',
    borderRadius: '10px',
    padding: '12px',
    fontFamily: 'monospace',
    fontSize: '0.85rem',
  };

  const uploadAreaStyle = {
    border: '2px dashed #8b5cf6',
    borderRadius: '12px',
    padding: '40px 20px',
    textAlign: 'center',
    backgroundColor: '#f5f3ff',
    cursor: 'pointer',
    transition: 'all 0.3s',
  };

  const DashboardContent = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome, {user?.name}
          </h2>
          <p className="text-gray-600">
            Your blockchain-powered medical dashboard
          </p>
        </div>
        <div style={blockchainBadgeStyle}>
          <i className="fas fa-link"></i>
          <span>Connected to MedicalChain Network</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dashboard Cards */}
        <div
          className="bg-white p-6 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          style={cardStyle}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <i className="fas fa-procedures text-purple-600 text-xl"></i>
            </div>
            <h2 className="text-xl font-bold text-gray-800">My Patients</h2>
          </div>
          <p className="text-gray-600 mb-4">
            View and manage your current patients
          </p>
          <div className="flex items-center justify-between">
            <button
              onClick={() => showFeature('doctor-my-patients')}
              className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg font-medium"
            >
              View Patients
            </button>
            <span className="text-sm text-gray-500">12 active</span>
          </div>
        </div>

        <div
          className="bg-white p-6 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          style={cardStyle}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <i className="fas fa-search text-blue-600 text-xl"></i>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Patient Lookup</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Search for patients across the blockchain
          </p>
          <button
            onClick={() => showFeature('doctor-patient-lookup')}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium"
          >
            Search Records
          </button>
          <div className="mt-3 text-xs text-gray-500 flex items-center gap-1">
            <i className="fas fa-lock"></i>
            <span>Permission-based access</span>
          </div>
        </div>

        <div
          className="bg-white p-6 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          style={cardStyle}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <i className="fas fa-file-prescription text-green-600 text-xl"></i>
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Write Prescription
            </h2>
          </div>
          <p className="text-gray-600 mb-4">
            Create and issue digital prescriptions
          </p>
          <button
            onClick={() => showFeature('doctor-write-prescription')}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium"
          >
            Create Prescription
          </button>
        </div>

        <div
          className="bg-white p-6 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          style={cardStyle}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <i className="fas fa-file-upload text-red-600 text-xl"></i>
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Upload Test Results
            </h2>
          </div>
          <p className="text-gray-600 mb-4">
            Add lab results and diagnostic reports
          </p>
          <button
            onClick={() => showFeature('doctor-upload-results')}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg font-medium"
          >
            Upload Results
          </button>
        </div>

        <div
          className="bg-white p-6 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          style={cardStyle}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
              <i className="fas fa-globe-americas text-indigo-600 text-xl"></i>
            </div>
            <h2 className="text-xl font-bold text-gray-800">
              Global Patient View
            </h2>
          </div>
          <p className="text-gray-600 mb-4">
            Access patient records across the network
          </p>
          <button
            onClick={() => showFeature('doctor-global-view')}
            className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium"
          >
            Access Global View
          </button>
        </div>

        <div
          className="bg-white p-6 hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          style={cardStyle}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
              <i className="fas fa-hospital text-yellow-600 text-xl"></i>
            </div>
            <h2 className="text-xl font-bold text-gray-800">Node Status</h2>
          </div>
          <div className="flex items-center mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></span>
            <span className="text-green-600 font-medium">
              City General Hospital Node
            </span>
          </div>
          <p className="text-gray-600 mb-4">
            Monitor hospital node status and activity
          </p>
          <button
            onClick={() => showFeature('doctor-node-status')}
            className="bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg font-medium"
          >
            View Status
          </button>
        </div>
      </div>

      {/* Blockchain Security Section */}
      <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
            <i className="fas fa-link text-purple-600 text-2xl"></i>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">
            Blockchain Integration
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <i className="fas fa-user-shield text-green-600"></i>
              </div>
              <h3 className="font-bold text-lg">Secure Access</h3>
            </div>
            <p className="text-gray-600">
              Patient data is accessed through blockchain permissions with smart
              contract verification.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <i className="fas fa-file-contract text-blue-600"></i>
              </div>
              <h3 className="font-bold text-lg">Immutable Records</h3>
            </div>
            <p className="text-gray-600">
              All medical records are stored on blockchain with cryptographic
              hashes for verification.
            </p>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <i className="fas fa-network-wired text-purple-600"></i>
              </div>
              <h3 className="font-bold text-lg">Distributed Network</h3>
            </div>
            <p className="text-gray-600">
              Medical data is distributed across hospital nodes for redundancy
              and faster access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const MyPatientsPage = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fas fa-procedures text-purple-500"></i>
            My Patients
          </h2>
          <button
            onClick={showDashboard}
            className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg font-medium flex items-center gap-2"
          >
            <i className="fas fa-arrow-left"></i> Back to Dashboard
          </button>
        </div>
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search patients..."
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Visit
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Next Appointment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <i className="fas fa-user text-purple-600"></i>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Robert Johnson
                      </div>
                      <div className="text-sm text-gray-500">ID: PT-789456</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Jul 15, 2023</div>
                  <div className="text-sm text-gray-500">
                    Hypertension follow-up
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Aug 15, 2023</div>
                  <div className="text-sm text-gray-500">10:30 AM</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-purple-600 hover:text-purple-900 mr-3">
                    View
                  </button>
                  <button className="text-blue-600 hover:text-blue-900">
                    Message
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <i className="fas fa-user text-blue-600"></i>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        Maria Garcia
                      </div>
                      <div className="text-sm text-gray-500">ID: PT-123789</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Jun 20, 2023</div>
                  <div className="text-sm text-gray-500">Annual checkup</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Sep 10, 2023</div>
                  <div className="text-sm text-gray-500">2:00 PM</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-purple-600 hover:text-purple-900 mr-3">
                    View
                  </button>
                  <button className="text-blue-600 hover:text-blue-900">
                    Message
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const PatientLookupPage = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fas fa-search text-blue-500"></i>
            Patient Lookup
          </h2>
          <button
            onClick={showDashboard}
            className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg font-medium flex items-center gap-2"
          >
            <i className="fas fa-arrow-left"></i> Back to Dashboard
          </button>
        </div>
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Patient ID</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter patient ID"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="First and last name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Date of Birth</label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-medium">
              <i className="fas fa-search mr-2"></i> Search Records
            </button>
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Search Results
          </h3>
          <div
            className="bg-white p-5 rounded-xl shadow border-l-4 border-purple-500"
            style={{
              background: 'linear-gradient(to right, #f5f3ff, #ffffff)',
            }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg text-gray-800">John Smith</h3>
                <p className="text-gray-600">
                  Patient ID: PT-456123 | DOB: 05/15/1980
                </p>
              </div>
              <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg font-medium">
                Request Access
              </button>
            </div>
            <div className="mt-4">
              <p className="text-gray-700">
                <span className="font-semibold">Last Visit:</span> Jun 10, 2023
                at City Hospital
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Primary Doctor:</span> Dr.
                Michael Chen
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Access Level:</span> Limited
                (requires permission)
              </p>
            </div>
            <div className="mt-4" style={blockchainInfoStyle}>
              <div className="flex gap-4 flex-wrap">
                <div>
                  <span className="text-gray-500">Blockchain ID:</span>
                  <span className="font-mono ml-2">0x8a3b...f7c2</span>
                </div>
                <div>
                  <span className="text-gray-500">Node:</span>
                  <span className="font-mono ml-2">
                    Westside Medical Center
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const WritePrescriptionPage = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fas fa-file-prescription text-green-500"></i>
            Write Prescription
          </h2>
          <button
            onClick={showDashboard}
            className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg font-medium flex items-center gap-2"
          >
            <i className="fas fa-arrow-left"></i> Back to Dashboard
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div
            className="bg-white p-6 rounded-xl shadow border-l-4 border-green-500"
            style={{
              background: 'linear-gradient(to right, #f0fdf4, #ffffff)',
            }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Patient Information
            </h3>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Select Patient</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                <option>Robert Johnson (ID: PT-789456)</option>
                <option>Maria Garcia (ID: PT-123789)</option>
                <option>John Smith (ID: PT-456123)</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Diagnosis</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                rows="3"
                placeholder="Enter diagnosis details"
              ></textarea>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">
              Medication
            </h3>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Medication Name
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter medication name"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 mb-2">Dosage</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="e.g., 500mg"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Frequency</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="e.g., 3 times daily"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Duration</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="e.g., 10 days"
              />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Prescription Details
            </h3>
            <div className="bg-gray-50 p-5 rounded-lg mb-6">
              <h4 className="font-bold text-lg mb-3">Current Medications</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>Atorvastatin 20mg - Once daily (for cholesterol)</li>
                <li>Lisinopril 10mg - Once daily (for blood pressure)</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-5 rounded-lg mb-6">
              <h4 className="font-bold text-lg mb-3">Known Allergies</h4>
              <p>Penicillin, Sulfa drugs</p>
            </div>
            <div className="flex justify-end mt-6">
              <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg font-medium text-lg">
                <i className="fas fa-file-medical mr-2"></i> Issue Prescription
              </button>
            </div>
            <div className="mt-8" style={blockchainInfoStyle}>
              <div className="flex gap-4 flex-wrap">
                <div>
                  <span className="text-gray-500">Current Block:</span>
                  <span className="font-mono ml-2">1248765</span>
                </div>
                <div>
                  <span className="text-gray-500">Node:</span>
                  <span className="font-mono ml-2">City General Hospital</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const UploadResultsPage = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fas fa-file-upload text-red-500"></i>
            Upload Test Results
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
              Patient Information
            </h3>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Select Patient</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                <option>Robert Johnson (ID: PT-789456)</option>
                <option>Maria Garcia (ID: PT-123789)</option>
                <option>John Smith (ID: PT-456123)</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Test Type</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500">
                <option>Blood Test</option>
                <option>MRI Scan</option>
                <option>X-Ray</option>
                <option>CT Scan</option>
                <option>Ultrasound</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Test Date</label>
              <input
                type="date"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Notes</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                rows="3"
                placeholder="Add notes about the results"
              ></textarea>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Upload Files
            </h3>
            <div style={uploadAreaStyle} className="hover:bg-purple-100">
              <i className="fas fa-cloud-upload-alt text-4xl text-purple-500 mb-3"></i>
              <h4 className="text-xl font-semibold text-gray-800">
                Upload Test Results
              </h4>
              <p className="text-gray-600 mb-4">
                Drag & drop files here or click to browse
              </p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-lg font-medium">
                Select Files
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Files will be stored on IPFS and linked via blockchain
              </p>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                Uploaded Files
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                  <div className="flex items-center">
                    <i className="fas fa-file-pdf text-red-500 text-xl mr-3"></i>
                    <div>
                      <p className="font-medium">BloodTest_20230715.pdf</p>
                      <p className="text-sm text-gray-500">2.4 MB</p>
                    </div>
                  </div>
                  <button className="text-red-500 hover:text-red-700">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-lg font-medium text-lg w-full">
                <i className="fas fa-cloud-upload-alt mr-2"></i> Upload to
                Blockchain
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const GlobalViewPage = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fas fa-globe-americas text-indigo-500"></i>
            Global Patient View
          </h2>
          <button
            onClick={showDashboard}
            className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg font-medium flex items-center gap-2"
          >
            <i className="fas fa-arrow-left"></i> Back to Dashboard
          </button>
        </div>
        <div className="mb-6">
          <div className="bg-blue-50 rounded-lg p-6 mb-6">
            <div className="flex items-center gap-4">
              <i className="fas fa-info-circle text-blue-500 text-2xl"></i>
              <p>
                You can access patient records across the blockchain network
                with proper permissions. All access is recorded on-chain.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Patient ID</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter patient ID"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="First and last name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Hospital Node</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
                <option>All Nodes</option>
                <option>City General Hospital</option>
                <option>Westside Medical Center</option>
                <option>Northside Clinic</option>
                <option>Children's Hospital</option>
              </select>
            </div>
          </div>
          <div className="mt-4">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-6 rounded-lg font-medium">
              <i className="fas fa-search mr-2"></i> Search Global Records
            </button>
          </div>
        </div>
        <div className="bg-white p-5 rounded-xl shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-lg text-gray-800">John Smith</h3>
              <p className="text-gray-600">
                Patient ID: PT-456123 | Westside Medical Center
              </p>
            </div>
            <div>
              <span style={blockchainBadgeStyle}>
                <i className="fas fa-link"></i>
                <span>Access Granted</span>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">
                Medical History
              </h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>2023-06-10</span>
                  <span>Orthopedic Consultation</span>
                  <span className="text-blue-600 cursor-pointer">View</span>
                </li>
                <li className="flex justify-between">
                  <span>2023-04-22</span>
                  <span>Blood Test</span>
                  <span className="text-blue-600 cursor-pointer">View</span>
                </li>
                <li className="flex justify-between">
                  <span>2023-02-15</span>
                  <span>Annual Physical</span>
                  <span className="text-blue-600 cursor-pointer">View</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">
                Current Medications
              </h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Ibuprofen</span>
                  <span>400mg as needed</span>
                </li>
                <li className="flex justify-between">
                  <span>Vitamin D</span>
                  <span>2000 IU daily</span>
                </li>
              </ul>
              <h4 className="font-semibold text-gray-800 mt-4 mb-3">
                Allergies
              </h4>
              <p>Penicillin, Sulfa drugs</p>
            </div>
          </div>
          <div className="mt-6" style={blockchainInfoStyle}>
            <div className="flex gap-4 flex-wrap">
              <div>
                <span className="text-gray-500">Blockchain ID:</span>
                <span className="font-mono ml-2">0x3a8f...b2d4</span>
              </div>
              <div>
                <span className="text-gray-500">Node:</span>
                <span className="font-mono ml-2">Westside Medical Center</span>
              </div>
              <div>
                <span className="text-gray-500">Access TX:</span>
                <span className="font-mono ml-2">0x7e1a...c9f3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const NodeStatusPage = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fas fa-hospital text-yellow-500"></i>
            Hospital Node Status
          </h2>
          <button
            onClick={showDashboard}
            className="bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg font-medium flex items-center gap-2"
          >
            <i className="fas fa-arrow-left"></i> Back to Dashboard
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">City General Hospital</h3>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            </div>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span className="text-gray-600">Node ID:</span>
                <span className="font-medium">N-789123</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="text-green-600 font-medium">Online</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Last Sync:</span>
                <span>2023-07-25 09:15:22</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Patients:</span>
                <span>1,245</span>
              </p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Westside Medical Center</h3>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
            </div>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span className="text-gray-600">Node ID:</span>
                <span className="font-medium">N-456789</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="text-green-600 font-medium">Online</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Last Sync:</span>
                <span>2023-07-25 08:45:17</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Patients:</span>
                <span>892</span>
              </p>
            </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">Children's Hospital</h3>
              <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
            </div>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span className="text-gray-600">Node ID:</span>
                <span className="font-medium">N-321654</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Status:</span>
                <span className="text-red-600 font-medium">Offline</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Last Sync:</span>
                <span>2023-07-24 14:30:05</span>
              </p>
              <p className="flex justify-between">
                <span className="text-gray-600">Patients:</span>
                <span>567</span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Network Status
          </h3>
          <div className="flex items-center mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-2"></span>
            <span className="font-medium">
              MedicalChain Network Operational
            </span>
          </div>
          <div className="grid grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-green-50 rounded-lg">
              <p className="text-2xl font-bold">24</p>
              <p className="text-gray-600">Online Nodes</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-2xl font-bold">3</p>
              <p className="text-gray-600">Offline Nodes</p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <p className="text-2xl font-bold">12,458</p>
              <p className="text-gray-600">Total Patients</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg">
              <p className="text-2xl font-bold">124,876</p>
              <p className="text-gray-600">Total Records</p>
            </div>
          </div>
          <div className="mt-6" style={blockchainInfoStyle}>
            <div className="flex gap-4 flex-wrap">
              <div>
                <span className="text-gray-500">Current Block:</span>
                <span className="font-mono ml-2">1248765</span>
              </div>
              <div>
                <span className="text-gray-500">Network Hashrate:</span>
                <span className="font-mono ml-2">124.56 TH/s</span>
              </div>
              <div>
                <span className="text-gray-500">Last Block Time:</span>
                <span className="font-mono ml-2">12.4 seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const IPFSAttachPage = () => (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fas fa-link text-purple-500"></i>
            IPFS File Attach
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
              Attach to Patient Record
            </h3>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Select Patient</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                <option>Robert Johnson (ID: PT-789456)</option>
                <option>Maria Garcia (ID: PT-123789)</option>
                <option>John Smith (ID: PT-456123)</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Record Type</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                <option>Medical Report</option>
                <option>Test Result</option>
                <option>Scan Image</option>
                <option>Prescription</option>
                <option>Other</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                rows="3"
                placeholder="Describe the file you're attaching"
              ></textarea>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Upload File
            </h3>
            <div style={uploadAreaStyle} className="hover:bg-purple-100">
              <i className="fas fa-cloud-upload-alt text-4xl text-purple-500 mb-3"></i>
              <h4 className="text-xl font-semibold text-gray-800">
                Upload to IPFS
              </h4>
              <p className="text-gray-600 mb-4">
                Drag & drop files here or click to browse
              </p>
              <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-lg font-medium">
                Select Files
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Files are encrypted and distributed across the IPFS network
              </p>
            </div>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-800 mb-3">
                File Information
              </h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">File Name:</span>
                  <span className="font-medium">
                    Cardiology_Report_2023.pdf
                  </span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Size:</span>
                  <span>2.4 MB</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Type:</span>
                  <span>PDF Document</span>
                </div>
                <div className="mt-3">
                  <span className="text-gray-600">IPFS Hash:</span>
                  <p className="font-mono text-sm break-all">
                    QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-8 rounded-lg font-medium text-lg w-full">
                <i className="fas fa-link mr-2"></i> Attach to Blockchain
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8" style={blockchainInfoStyle}>
          <div className="flex gap-4 flex-wrap">
            <div>
              <span className="text-gray-500">Current Block:</span>
              <span className="font-mono ml-2">1248765</span>
            </div>
            <div>
              <span className="text-gray-500">Node:</span>
              <span className="font-mono ml-2">City General Hospital</span>
            </div>
            <div>
              <span className="text-gray-500">IPFS Gateway:</span>
              <span className="font-mono ml-2">
                https://ipfs.medicalchain.io
              </span>
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
          background: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
        }}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg">
              <i className="fas fa-user-md text-2xl"></i>
            </div>
            <Link to="/">
              <h1 className="text-2xl font-bold">Doctor Portal</h1>
              <p className="text-xs opacity-90">
                Blockchain-Powered Medical System
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
                <p className="font-semibold">Dr. {user?.name}</p>
                <p className="text-xs opacity-80">
                  Cardiologist | ID: DR-456123
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <i className="fas fa-user">{user?.name.slice(0, 1)}</i>
              </div>
            </div>
            <Logout />
            {/* <button className="">
            </button> */}
          </div>
        </div>
        <nav className="container mx-auto px-4 flex overflow-x-auto py-2 gap-1">
          {[
            { id: 'dashboard', icon: 'fas fa-home', label: 'Dashboard' },
            {
              id: 'doctor-my-patients',
              icon: 'fas fa-procedures',
              label: 'My Patients',
            },
            {
              id: 'doctor-patient-lookup',
              icon: 'fas fa-search',
              label: 'Patient Lookup',
            },
            {
              id: 'doctor-write-prescription',
              icon: 'fas fa-file-prescription',
              label: 'Write Prescription',
            },
            {
              id: 'doctor-upload-results',
              icon: 'fas fa-file-upload',
              label: 'Upload Test Results',
            },
            {
              id: 'doctor-global-view',
              icon: 'fas fa-globe-americas',
              label: 'Global Patient View',
            },
            {
              id: 'doctor-node-status',
              icon: 'fas fa-hospital',
              label: 'Hospital Node Status',
            },
            {
              id: 'doctor-ipfs-attach',
              icon: 'fas fa-link',
              label: 'IPFS File Attach',
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
      {currentView === 'doctor-my-patients' && <MyPatientsPage />}
      {currentView === 'doctor-patient-lookup' && <PatientLookupPage />}
      {currentView === 'doctor-write-prescription' && <WritePrescriptionPage />}
      {currentView === 'doctor-upload-results' && <UploadResultsPage />}
      {currentView === 'doctor-global-view' && <GlobalViewPage />}
      {currentView === 'doctor-node-status' && <NodeStatusPage />}
      {currentView === 'doctor-ipfs-attach' && <IPFSAttachPage />}
    </div>
  );
};

export default NewDoctorDashboard;
