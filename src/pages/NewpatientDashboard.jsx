import React, { useState, useEffect } from 'react';
import Logout from '../utils/Logout';
import { Link } from 'react-router-dom';
import { 
  getAppointmentsByUser, 
  getPrescriptionsByPatient, 
  getMedicalRecordsByPatient,
  createAppointment,
  shareData,
  getUserById,
  getUsers
} from '../utils/dataService';
import { toast } from 'react-toastify';

const NewpatientDashboard = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [activeNav, setActiveNav] = useState(0);
  const [appointments, setAppointments] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [appointmentForm, setAppointmentForm] = useState({
    doctorId: '',
    date: '',
    time: '',
    type: '',
    notes: ''
  });
  const [sharingForm, setSharingForm] = useState({
    doctorId: '',
    sharedData: [],
    accessDuration: '7 days',
    notes: ''
  });
  
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

  // Load data on component mount
  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    if (!user?.id) {
      console.log('No user ID found');
      return;
    }
    
    console.log('Loading dashboard data for user:', user.id);
    setLoading(true);
    try {
      const [appointmentsData, prescriptionsData, recordsData] = await Promise.all([
        getAppointmentsByUser(user.id),
        getPrescriptionsByPatient(user.id),
        getMedicalRecordsByPatient(user.id)
      ]);
      
      console.log('Loaded data:', { appointmentsData, prescriptionsData, recordsData });
      
      setAppointments(appointmentsData);
      setPrescriptions(prescriptionsData);
      setMedicalRecords(recordsData);
    } catch (error) {
      console.error('Error loading dashboard data:', error);
      toast.error('Failed to load dashboard data');
    } finally {
      setLoading(false);
    }
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
            <span className="text-sm text-gray-500">{appointments.length} upcoming</span>
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

  const AppointmentsPage = () => {
    return (
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
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading appointments...</p>
            </div>
          ) : appointments.length > 0 ? (
            <div className="space-y-4">
              {appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="bg-white p-5 rounded-xl shadow"
                  style={appointmentCardStyle}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        {appointment.type}
                      </h3>
                      <p className="text-gray-600">
                        {appointment.doctorId} | {appointment.date} at {appointment.time}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      appointment.status === 'confirmed' 
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="text-gray-700">
                      <i className="fas fa-hospital text-gray-500 mr-2"></i>
                      {appointment.hospital}
                    </p>
                    <p className="text-gray-700 mt-2">
                      <i className="fas fa-stethoscope text-gray-500 mr-2"></i>
                      {appointment.notes}
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
                        <span className="font-mono ml-2">{appointment.blockNumber}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">TX Hash:</span>
                        <span className="font-mono ml-2">{appointment.txHash}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Timestamp:</span>
                        <span className="font-mono ml-2">{appointment.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <i className="fas fa-calendar-times text-4xl text-gray-400 mb-4"></i>
              <p className="text-gray-600">No appointments found</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const MedicalHistoryPage = () => {
    return (
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
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading medical records...</p>
            </div>
          ) : medicalRecords.length > 0 ? (
            <div className="space-y-4">
              {medicalRecords.map((record) => (
                <div
                  key={record.id}
                  className="bg-white p-5 rounded-xl shadow"
                  style={medicalRecordStyle}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        {record.type}
                      </h3>
                      <p className="text-gray-600">{record.hospital} | {record.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      record.type === 'Blood Test' 
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {record.type === 'Blood Test' ? 'Test Report' : 'Diagnosis'}
                    </span>
                  </div>
                  {record.results && (
                    <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(record.results).map(([key, value]) => (
                        <div key={key}>
                          <p className="text-sm text-gray-600">{key}</p>
                          <p className="font-bold">{value}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {record.diagnosis && (
                    <div className="mt-3">
                      <p className="text-gray-700">
                        <span className="font-semibold">Diagnosis:</span> {record.diagnosis}
                      </p>
                      {record.treatmentPlan && (
                        <p className="text-gray-700">
                          <span className="font-semibold">Treatment Plan:</span> {record.treatmentPlan}
                        </p>
                      )}
                    </div>
                  )}
                  <div className="mt-4 flex gap-2">
                    <button className="text-blue-600 hover:text-blue-800 flex items-center">
                      <i className="fas fa-file-pdf mr-1"></i> Download Report
                    </button>
                  </div>
                  <div className="mt-4" style={blockchainInfoStyle}>
                    <div className="flex gap-4 flex-wrap">
                      <div>
                        <span className="text-gray-500">Block #:</span>
                        <span className="font-mono ml-2">{record.blockNumber}</span>
                      </div>
                      {record.ipfsHash && (
                        <div>
                          <span className="text-gray-500">IPFS Hash:</span>
                          <span className="font-mono ml-2">{record.ipfsHash}</span>
                        </div>
                      )}
                      {record.txHash && (
                        <div>
                          <span className="text-gray-500">TX Hash:</span>
                          <span className="font-mono ml-2">{record.txHash}</span>
                        </div>
                      )}
                      <div>
                        <span className="text-gray-500">Timestamp:</span>
                        <span className="font-mono ml-2">{record.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <i className="fas fa-file-medical text-4xl text-gray-400 mb-4"></i>
              <p className="text-gray-600">No medical records found</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const DoctorsListPage = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedSpecialty, setSelectedSpecialty] = useState('All Specialties');

    // Load all doctors when component mounts
    useEffect(() => {
      const loadDoctors = async () => {
        try {
          const allUsers = await getUsers();
          const doctorsList = allUsers.filter(user => user.role === 'doctor');
          setDoctors(doctorsList);
          console.log(doctorsList, allUsers, "doctorsList");
          setLoading(false);
        } catch (error) {
          console.error('Error loading doctors:', error);
          setLoading(false);
        }
      };
      loadDoctors();
    }, []);

    // Filter doctors based on search and specialty
    const filteredDoctors = doctors.filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           (doctor.specialty && doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())) ||
                           (doctor.hospital && doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesSpecialty = selectedSpecialty === 'All Specialties' || 
                              (doctor.specialty && doctor.specialty === selectedSpecialty);
      
      return matchesSearch && matchesSpecialty;
    });

    // Get unique specialties for filter dropdown
    const specialties = ['All Specialties', ...new Set(doctors.map(d => d.specialty).filter(Boolean))];

    return (
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
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  />
                  <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>
              <div className="w-full md:w-48">
                <select 
                  value={selectedSpecialty}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  {specialties.map(specialty => (
                    <option key={specialty} value={specialty}>{specialty}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
              <span className="ml-2 text-gray-600">Loading doctors...</span>
            </div>
          ) : filteredDoctors.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <i className="fas fa-user-md text-4xl mb-2"></i>
              <p>No doctors found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor) => (
                <div key={doctor.id} className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden hover:transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="p-5">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center">
                        <i className="fas fa-user-md text-purple-600 text-2xl"></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Dr. {doctor.name}</h3>
                        <p className="text-gray-600">{doctor.specialty || 'General Medicine'}</p>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="flex items-center gap-2 text-gray-700">
                        <i className="fas fa-hospital text-blue-500"></i>
                        {doctor.hospital || 'Medical Center'}
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
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const RequestAppointmentPage = () => {
    const [selectedDoctor, setSelectedDoctor] = useState('');
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [appointmentForm, setAppointmentForm] = useState({
      date: '',
      time: '',
      reason: '',
      type: 'General Consultation'
    });

    // Load all doctors when component mounts
    useEffect(() => {
      const loadDoctors = async () => {
        try {
          const allUsers = await getUsers();
          const doctorsList = allUsers.filter(user => user.role === 'doctor');
          setDoctors(doctorsList);
          setLoading(false);
        } catch (error) {
          console.error('Error loading doctors:', error);
          setLoading(false);
        }
      };
      loadDoctors();
    }, []);

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setAppointmentForm(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleDoctorSelect = (doctorId) => {
      setSelectedDoctor(doctorId);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      console.log('Form submitted:', { selectedDoctor, appointmentForm, user });
      // validation for date and time
      const today = new Date();
      const selectedDate = new Date(appointmentForm.date);
      if (selectedDate < today) {
        toast.error('Please select a date in the future');
        return;
      }
      
      if (!selectedDoctor) {
        toast.error('Please select a doctor');
        return;
      }

      if (!appointmentForm.date || !appointmentForm.time || !appointmentForm.reason) {
        toast.error('Please fill in all required fields');
        return;
      }

      try {
        const newAppointment = {
          patientId: user.id,
          doctorId: selectedDoctor,
          date: appointmentForm.date,
          time: appointmentForm.time,
          type: appointmentForm.type,
          status: 'pending',
          notes: appointmentForm.reason,
          hospital: 'City General Hospital'
        };

        console.log('Creating appointment:', newAppointment);
        const result = await createAppointment(newAppointment);
        console.log('Appointment creation result:', result);
        
        toast.success('Appointment request submitted successfully!');
        
        // Reset form
        setAppointmentForm({
          date: '',
          time: '',
          reason: '',
          type: 'General Consultation'
        });
        setSelectedDoctor('');
        
        // Reload appointments data
        await loadDashboardData();
        
        // Go back to dashboard
        showDashboard();
      } catch (error) {
        console.error('Error creating appointment:', error);
        toast.error('Failed to submit appointment request');
      }
    };

    const handleCancel = () => {
      setAppointmentForm({
        date: '',
        time: '',
        reason: '',
        type: 'General Consultation'
      });
      setSelectedDoctor('');
      showDashboard();
    };

    return (
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
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    <span className="ml-2 text-gray-600">Loading doctors...</span>
                  </div>
                ) : doctors.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <i className="fas fa-user-md text-4xl mb-2"></i>
                    <p>No doctors available at the moment.</p>
                  </div>
                ) : (
                  doctors.map((doctor) => (
                    <div 
                      key={doctor.id}
                      className={`flex items-center gap-4 p-4 border rounded-xl cursor-pointer transition-all ${
                        selectedDoctor === doctor.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-blue-300'
                      }`}
                      onClick={() => handleDoctorSelect(doctor.id)}
                    >
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        <i className="fas fa-user-md text-purple-600"></i>
                      </div>
                      <div>
                        <h4 className="font-bold">Dr. {doctor.name}</h4>
                        <p className="text-gray-600">
                          {doctor.specialty || 'General Medicine'} | {doctor.hospital || 'Medical Center'}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Appointment Details
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Date *</label>
                  <input
                    type="date"
                    name="date"
                    value={appointmentForm.date}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select 
                    name="time"
                    value={appointmentForm.time}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  >
                    <option value="">Select a time slot</option>
                    <option value="8:00 AM">Morning (8:00 AM - 11:00 AM)</option>
                    <option value="1:00 PM">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="5:00 PM">Evening (5:00 PM - 7:00 PM)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Reason for Visit *
                  </label>
                  <textarea
                    name="reason"
                    value={appointmentForm.reason}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    rows="3"
                    placeholder="Describe your symptoms or reason for appointment"
                  ></textarea>
                </div>
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-6 rounded-lg font-medium flex-1"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg font-medium flex-1"
                  >
                    <i className="fas fa-calendar-plus mr-2"></i>
                    Request Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const PrescriptionsPage = () => {
    return (
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
          {loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading prescriptions...</p>
            </div>
          ) : prescriptions.length > 0 ? (
            <div className="space-y-4">
              {prescriptions.map((prescription) => (
                <div
                  key={prescription.id}
                  className="bg-white p-5 rounded-xl shadow"
                  style={prescriptionItemStyle}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-gray-800">
                        {prescription.medication} {prescription.dosage}
                      </h3>
                      <p className="text-gray-600">
                        Prescribed by {prescription.doctorId} | {prescription.prescribedDate}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      prescription.status === 'active' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {prescription.status === 'active' ? 'Active' : 'Refill Available'}
                    </span>
                  </div>
                  <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">Dosage</p>
                      <p className="font-bold">{prescription.dosage} {prescription.frequency}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-bold">{prescription.duration} (Refills: {prescription.refills})</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Purpose</p>
                      <p className="font-bold">{prescription.purpose}</p>
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
                        <span className="font-mono ml-2">{prescription.blockNumber}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">TX Hash:</span>
                        <span className="font-mono ml-2">{prescription.txHash}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Timestamp:</span>
                        <span className="font-mono ml-2">{prescription.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <i className="fas fa-prescription text-4xl text-gray-400 mb-4"></i>
              <p className="text-gray-600">No prescriptions found</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  const ShareDataPage = () => {
    const [sharingForm, setSharingForm] = useState({
      doctorId: '',
      accessDuration: '7 days',
      sharedData: ['prescriptions', 'test_reports'],
      notes: ''
    });
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(false);

    // Load doctors when component mounts
    useEffect(() => {
      loadDoctors();
    }, []);

    const loadDoctors = async () => {
      try {
        const allUsers = await getUsers();
        const doctorsList = allUsers.filter(user => user.role === 'doctor');
        setDoctors(doctorsList);
      } catch (error) {
        console.error('Error loading doctors:', error);
        toast.error('Failed to load doctors');
      }
    };

    const handleInputChange = (e) => {
      const { name, value, type, checked } = e.target;
      if (type === 'checkbox') {
        const updatedData = checked 
          ? [...sharingForm.sharedData, value]
          : sharingForm.sharedData.filter(item => item !== value);
        setSharingForm(prev => ({
          ...prev,
          sharedData: updatedData
        }));
      } else {
        setSharingForm(prev => ({
          ...prev,
          [name]: value
        }));
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      
      if (!sharingForm.doctorId) {
        toast.error('Please select a doctor');
        return;
      }

      if (sharingForm.sharedData.length === 0) {
        toast.error('Please select at least one data type to share');
        return;
      }

      setLoading(true);
      try {
        // Calculate expiration date based on access duration
        const expirationDate = new Date();
        switch (sharingForm.accessDuration) {
          case 'One-time access':
            expirationDate.setHours(expirationDate.getHours() + 1);
            break;
          case '24 hours':
            expirationDate.setDate(expirationDate.getDate() + 1);
            break;
          case '7 days':
            expirationDate.setDate(expirationDate.getDate() + 7);
            break;
          case '30 days':
            expirationDate.setDate(expirationDate.getDate() + 30);
            break;
          default:
            expirationDate.setDate(expirationDate.getDate() + 7);
        }

        const sharingData = {
          patientId: user.id,
          doctorId: sharingForm.doctorId,
          sharedData: sharingForm.sharedData,
          accessDuration: sharingForm.accessDuration,
          notes: sharingForm.notes,
          expiresDate: expirationDate.toISOString().split('T')[0]
        };

        const success = await shareData(sharingData);

        if (success) {
          toast.success('Data shared successfully!');
          setSharingForm({
            doctorId: '',
            accessDuration: '7 days',
            sharedData: ['prescriptions', 'test_reports'],
            notes: ''
          });
          showDashboard();
        } else {
          toast.error('Failed to share data');
        }
      } catch (error) {
        console.error('Error sharing data:', error);
        toast.error('Failed to share data');
      } finally {
        setLoading(false);
      }
    };

    return (
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Select Doctor
                  </label>
                  <select 
                    name="doctorId"
                    value={sharingForm.doctorId}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select a doctor...</option>
                    {doctors.map(doctor => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.name} ({doctor.specialty}) - {doctor.hospital}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Access Duration
                  </label>
                  <select 
                    name="accessDuration"
                    value={sharingForm.accessDuration}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="One-time access">One-time access</option>
                    <option value="24 hours">24 hours</option>
                    <option value="7 days">7 days</option>
                    <option value="30 days">30 days</option>
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
                        value="full_history"
                        checked={sharingForm.sharedData.includes('full_history')}
                        onChange={handleInputChange}
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
                        value="prescriptions"
                        checked={sharingForm.sharedData.includes('prescriptions')}
                        onChange={handleInputChange}
                        className="mr-2 h-5 w-5 text-indigo-600"
                      />
                      <label htmlFor="prescriptions" className="text-gray-700">
                        Prescription History
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="test-reports"
                        value="test_reports"
                        checked={sharingForm.sharedData.includes('test_reports')}
                        onChange={handleInputChange}
                        className="mr-2 h-5 w-5 text-indigo-600"
                      />
                      <label htmlFor="test-reports" className="text-gray-700">
                        Test Reports
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="appointments"
                        value="appointments"
                        checked={sharingForm.sharedData.includes('appointments')}
                        onChange={handleInputChange}
                        className="mr-2 h-5 w-5 text-indigo-600"
                      />
                      <label htmlFor="appointments" className="text-gray-700">
                        Appointment History
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Notes (Optional)
                  </label>
                  <textarea
                    name="notes"
                    value={sharingForm.notes}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    rows="2"
                    placeholder="Add a note for the doctor"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300 text-white py-3 px-6 rounded-lg font-medium w-full flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sharing Data...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-share-alt"></i>
                      Share Data
                    </>
                  )}
                </button>
              </form>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Data Sharing Information
              </h3>
              <div className="bg-indigo-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <i className="fas fa-shield-alt text-indigo-500 text-xl mt-1"></i>
                  <h4 className="font-semibold text-indigo-800">Secure Data Sharing</h4>
                </div>
                <ul className="space-y-2 text-sm text-indigo-700">
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-indigo-500 mt-1"></i>
                    All data is encrypted and stored on blockchain
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-indigo-500 mt-1"></i>
                    Access is time-limited and can be revoked
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-indigo-500 mt-1"></i>
                    You maintain full control over your data
                  </li>
                  <li className="flex items-start gap-2">
                    <i className="fas fa-check text-indigo-500 mt-1"></i>
                    Audit trail of all data access attempts
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
                <i className=" uppercase">
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
