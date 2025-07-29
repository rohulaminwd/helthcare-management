import localforage from 'localforage';
import { toast } from 'react-toastify';

// Configure localForage
localforage.config({
  name: 'blockchain-medical',
  storeName: 'medical_data'
});

// Data structure for the medical system
const initialData = {
  users: [
    {
      id: 'DR-456123',
      name: 'Dr. Sarah Johnson',
      email: 'sarah.johnson@hospital.com',
      role: 'doctor',
      specialty: 'Cardiology',
      hospital: 'City General Hospital',
      patients: ['PT-789456', 'PT-123789']
    },
    {
      id: 'DR-789123',
      name: 'Dr. Michael Chen',
      email: 'michael.chen@hospital.com',
      role: 'doctor',
      specialty: 'Orthopedic Surgeon',
      hospital: 'Westside Medical Center',
      patients: ['PT-456123']
    },
    {
      id: 'PT-789456',
      name: 'Robert Johnson',
      email: 'robert.johnson@email.com',
      role: 'patient',
      dateOfBirth: '1985-03-15',
      bloodType: 'O+',
      emergencyContact: '555-0123'
    },
    {
      id: 'PT-123789',
      name: 'Maria Garcia',
      email: 'maria.garcia@email.com',
      role: 'patient',
      dateOfBirth: '1990-07-22',
      bloodType: 'A+',
      emergencyContact: '555-0456'
    },
    {
      id: 'PT-456123',
      name: 'John Smith',
      email: 'john.smith@email.com',
      role: 'patient',
      dateOfBirth: '1980-05-15',
      bloodType: 'B+',
      emergencyContact: '555-0789'
    }
  ],
  appointments: [
    {
      id: 'APT-001',
      patientId: 'PT-789456',
      doctorId: 'DR-456123',
      date: '2023-08-15',
      time: '10:30',
      type: 'Cardiology Consultation',
      status: 'confirmed',
      notes: 'Follow-up on hypertension management',
      hospital: 'City General Hospital',
      blockNumber: '1248765',
      txHash: '0x8a3b...f7c2',
      timestamp: '2023-07-20 14:30:22'
    },
    {
      id: 'APT-002',
      patientId: 'PT-456123',
      doctorId: 'DR-789123',
      date: '2023-09-05',
      time: '14:00',
      type: 'Annual Physical Examination',
      status: 'scheduled',
      notes: 'Comprehensive annual checkup',
      hospital: 'Westside Medical Center',
      blockNumber: '1253421',
      txHash: '0x5d2e...a9f1',
      timestamp: '2023-07-25 09:15:47'
    }
  ],
  prescriptions: [
    {
      id: 'PRESC-001',
      patientId: 'PT-789456',
      doctorId: 'DR-456123',
      medication: 'Atorvastatin',
      dosage: '20mg',
      frequency: 'once daily',
      duration: '90 days',
      refills: 2,
      purpose: 'Cholesterol management',
      status: 'active',
      prescribedDate: '2023-07-15',
      blockNumber: '1245678',
      txHash: '0x3a8f...b2d4',
      timestamp: '2023-07-15 11:22:45'
    },
    {
      id: 'PRESC-002',
      patientId: 'PT-456123',
      doctorId: 'DR-789123',
      medication: 'Lisinopril',
      dosage: '10mg',
      frequency: 'once daily',
      duration: '30 days',
      refills: 1,
      purpose: 'Blood pressure control',
      status: 'refill_available',
      prescribedDate: '2023-05-05',
      blockNumber: '1229876',
      txHash: '0x7e1a...c9f3',
      timestamp: '2023-05-05 14:15:30'
    }
  ],
  medicalRecords: [
    {
      id: 'REC-001',
      patientId: 'PT-789456',
      type: 'Blood Test',
      date: '2023-06-20',
      hospital: 'City Medical Lab',
      results: {
        cholesterol: '180 mg/dL',
        glucose: '92 mg/dL',
        hemoglobin: '14.2 g/dL',
        vitaminD: '28 ng/mL'
      },
      status: 'normal',
      blockNumber: '1234598',
      ipfsHash: 'QmXoypizjW3WknFiJnKLwHCnL72vedxjQkDDP1mXWo6uco',
      timestamp: '2023-06-20 11:45:33'
    },
    {
      id: 'REC-002',
      patientId: 'PT-456123',
      type: 'Cardiology Consultation',
      date: '2023-05-05',
      doctorId: 'DR-789123',
      hospital: 'Westside Medical Center',
      diagnosis: 'Mild hypertension',
      treatmentPlan: 'Lifestyle modifications, monitor blood pressure twice daily, follow up in 3 months',
      blockNumber: '1228765',
      txHash: '0x4c7a...d9f3',
      timestamp: '2023-05-05 16:20:18'
    }
  ],
  hospitalNodes: [
    {
      id: 'N-789123',
      name: 'City General Hospital',
      status: 'online',
      lastSync: '2023-07-25 09:15:22',
      patientCount: 1245,
      location: 'Downtown'
    },
    {
      id: 'N-456789',
      name: 'Westside Medical Center',
      status: 'online',
      lastSync: '2023-07-25 08:45:17',
      patientCount: 892,
      location: 'Westside'
    },
    {
      id: 'N-321654',
      name: 'Children\'s Hospital',
      status: 'offline',
      lastSync: '2023-07-24 14:30:05',
      patientCount: 567,
      location: 'Northside'
    }
  ],
  dataSharing: [
    {
      id: 'SHARE-001',
      patientId: 'PT-789456',
      doctorId: 'DR-456123',
      sharedData: ['prescriptions', 'test_reports'],
      accessDuration: '7 days',
      sharedDate: '2023-07-20',
      expiresDate: '2023-07-27',
      status: 'active',
      txHash: '0x8f3e...a7c1'
    }
  ]
};

// Initialize data if not exists
export const initializeData = async () => {
  try {
    const existingData = await localforage.getItem('medicalData');
    if (!existingData) {
      await localforage.setItem('medicalData', initialData);
      console.log('Medical data initialized');
    }
  } catch (error) {
    console.error('Error initializing data:', error);
    toast.error('Failed to initialize data');
  }
};

// Generic CRUD operations
export const getData = async (key) => {
  try {
    const data = await localforage.getItem('medicalData');
    return data?.[key] || [];
  } catch (error) {
    console.error(`Error getting ${key}:`, error);
    toast.error(`Failed to load ${key}`);
    return [];
  }
};

export const setData = async (key, newData) => {
  try {
    const data = await localforage.getItem('medicalData');
    data[key] = newData;
    await localforage.setItem('medicalData', data);
    return true;
  } catch (error) {
    console.error(`Error setting ${key}:`, error);
    toast.error(`Failed to save ${key}`);
    return false;
  }
};

export const addItem = async (key, item) => {
  try {
    const data = await localforage.getItem('medicalData');
    if (!data[key]) data[key] = [];
    data[key].push(item);
    await localforage.setItem('medicalData', data);
    return true;
  } catch (error) {
    console.error(`Error adding ${key} item:`, error);
    toast.error(`Failed to add ${key.slice(0, -1)}`);
    return false;
  }
};

export const updateItem = async (key, id, updates) => {
  try {
    const data = await localforage.getItem('medicalData');
    const index = data[key].findIndex(item => item.id === id);
    if (index !== -1) {
      data[key][index] = { ...data[key][index], ...updates };
      await localforage.setItem('medicalData', data);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error updating ${key} item:`, error);
    toast.error(`Failed to update ${key.slice(0, -1)}`);
    return false;
  }
};

export const deleteItem = async (key, id) => {
  try {
    const data = await localforage.getItem('medicalData');
    data[key] = data[key].filter(item => item.id !== id);
    await localforage.setItem('medicalData', data);
    return true;
  } catch (error) {
    console.error(`Error deleting ${key} item:`, error);
    toast.error(`Failed to delete ${key.slice(0, -1)}`);
    return false;
  }
};

// Specific data operations
export const getUsers = () => getData('users');
export const getAppointments = () => getData('appointments');
export const getPrescriptions = () => getData('prescriptions');
export const getMedicalRecords = () => getData('medicalRecords');
export const getHospitalNodes = () => getData('hospitalNodes');
export const getDataSharing = () => getData('dataSharing');

export const getUserById = async (id) => {
  const users = await getUsers();
  return users.find(user => user.id === id);
};

export const getPatientsByDoctor = async (doctorId) => {
  const users = await getUsers();
  const doctor = users.find(user => user.id === doctorId);
  
  if (doctor && doctor.patients && doctor.patients.length > 0) {
    return users.filter(user => doctor.patients.includes(user.id));
  }
  
  // If doctor has no assigned patients, return all patients as a fallback
  // This ensures doctors can see patients even if not specifically assigned
  const allPatients = users.filter(user => user.role === 'patient');
  
  // If this is a new doctor with no patients, assign some sample patients
  if (doctor && (!doctor.patients || doctor.patients.length === 0) && allPatients.length > 0) {
    const samplePatientIds = allPatients.slice(0, 3).map(patient => patient.id);
    await updateItem('users', doctorId, { patients: samplePatientIds });
  }
  
  return allPatients;
};

export const getAppointmentsByUser = async (userId) => {
  const appointments = await getAppointments();
  const userAppointments = appointments.filter(apt => apt.patientId === userId || apt.doctorId === userId);
  
  // If no appointments found and user is a patient, create a sample appointment
  if (userAppointments.length === 0 && userId.startsWith('PT-')) {
    const sampleAppointment = {
      id: `APT-SAMPLE-${Date.now()}`,
      patientId: userId,
      doctorId: 'DR-456123',
      date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 7 days from now
      time: '10:30',
      type: 'General Consultation',
      status: 'scheduled',
      notes: 'Welcome appointment - General health checkup',
      hospital: 'City General Hospital',
      blockNumber: Math.floor(Math.random() * 1000000) + 1000000,
      txHash: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').substr(0, 19)
    };
    
    // Add the sample appointment to the database
    await addItem('appointments', sampleAppointment);
    return [sampleAppointment];
  }
  
  return userAppointments;
};

export const getPrescriptionsByPatient = async (patientId) => {
  const prescriptions = await getPrescriptions();
  const userPrescriptions = prescriptions.filter(presc => presc.patientId === patientId);
  
  // If no prescriptions found and user is a patient, create a sample prescription
  if (userPrescriptions.length === 0 && patientId.startsWith('PT-')) {
    const samplePrescription = {
      id: `PRESC-SAMPLE-${Date.now()}`,
      patientId: patientId,
      doctorId: 'DR-456123',
      medication: 'Multivitamin',
      dosage: '1 tablet',
      frequency: 'once daily',
      duration: '30 days',
      refills: 2,
      purpose: 'General health maintenance',
      status: 'active',
      prescribedDate: new Date().toISOString().split('T')[0],
      blockNumber: Math.floor(Math.random() * 1000000) + 1000000,
      txHash: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').substr(0, 19)
    };
    
    // Add the sample prescription to the database
    await addItem('prescriptions', samplePrescription);
    return [samplePrescription];
  }
  
  return userPrescriptions;
};

export const getMedicalRecordsByPatient = async (patientId) => {
  const records = await getMedicalRecords();
  const userRecords = records.filter(record => record.patientId === patientId);
  
  // If no medical records found and user is a patient, create a sample record
  if (userRecords.length === 0 && patientId.startsWith('PT-')) {
    const sampleRecord = {
      id: `REC-SAMPLE-${Date.now()}`,
      patientId: patientId,
      type: 'Initial Health Assessment',
      date: new Date().toISOString().split('T')[0],
      doctorId: 'DR-456123',
      hospital: 'City General Hospital',
      diagnosis: 'Healthy individual',
      treatmentPlan: 'Regular checkups every 6 months',
      status: 'normal',
      blockNumber: Math.floor(Math.random() * 1000000) + 1000000,
      ipfsHash: `Qm${Math.random().toString(36).substr(2, 44)}`,
      timestamp: new Date().toISOString().replace('T', ' ').substr(0, 19)
    };
    
    // Add the sample medical record to the database
    await addItem('medicalRecords', sampleRecord);
    return [sampleRecord];
  }
  
  return userRecords;
};

// Appointment operations
export const createAppointment = async (appointmentData) => {
  try {
    const appointment = {
      id: `APT-${Date.now()}`,
      ...appointmentData,
      status: 'scheduled',
      blockNumber: Math.floor(Math.random() * 1000000) + 1000000,
      txHash: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 4)}`,
      timestamp: new Date().toISOString().replace('T', ' ').substr(0, 19)
    };

    await addItem('appointments', appointment);
    
    // Assign patient to doctor if not already assigned
    await assignPatientToDoctor(appointmentData.patientId, appointmentData.doctorId);
    
    return true;
  } catch (error) {
    console.error('Error creating appointment:', error);
    return false;
  }
};

// Function to assign patient to doctor
export const assignPatientToDoctor = async (patientId, doctorId) => {
  try {
    const users = await getUsers();
    const doctor = users.find(user => user.id === doctorId);
    
    if (doctor && doctor.role === 'doctor') {
      const currentPatients = doctor.patients || [];
      if (!currentPatients.includes(patientId)) {
        const updatedPatients = [...currentPatients, patientId];
        await updateItem('users', doctorId, { patients: updatedPatients });
      }
    }
  } catch (error) {
    console.error('Error assigning patient to doctor:', error);
  }
};

export const updateAppointmentStatus = async (appointmentId, status) => {
  return await updateItem('appointments', appointmentId, { status });
};

// Delete appointment (for cancellation)
export const deleteAppointment = async (appointmentId) => {
  return await deleteItem('appointments', appointmentId);
};

// Prescription operations
export const createPrescription = async (prescriptionData) => {
  const newPrescription = {
    id: `PRESC-${Date.now()}`,
    ...prescriptionData,
    status: 'active',
    blockNumber: Math.floor(Math.random() * 1000000) + 1000000,
    txHash: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 4)}`,
    timestamp: new Date().toISOString().replace('T', ' ').substr(0, 19)
  };
  const success = await addItem('prescriptions', newPrescription);
  return success ? newPrescription : null;
};

// Medical record operations
export const createMedicalRecord = async (recordData) => {
  const newRecord = {
    id: `REC-${Date.now()}`,
    ...recordData,
    blockNumber: Math.floor(Math.random() * 1000000) + 1000000,
    ipfsHash: `Qm${Math.random().toString(36).substr(2, 44)}`,
    timestamp: new Date().toISOString().replace('T', ' ').substr(0, 19)
  };
  const success = await addItem('medicalRecords', newRecord);
  return success ? newRecord : null;
};

// Data sharing operations
export const shareData = async (sharingData) => {
  const newSharing = {
    id: `SHARE-${Date.now()}`,
    ...sharingData,
    status: 'active',
    sharedDate: new Date().toISOString().split('T')[0],
    txHash: `0x${Math.random().toString(16).substr(2, 8)}...${Math.random().toString(16).substr(2, 4)}`
  };
  return await addItem('dataSharing', newSharing);
};

// Get shared data for a specific doctor
export const getSharedDataForDoctor = async (doctorId) => {
  try {
    const allSharing = await getDataSharing();
    const currentDate = new Date().toISOString().split('T')[0];
    
    // Filter active shares for this doctor that haven't expired
    const activeShares = allSharing.filter(share => 
      share.doctorId === doctorId && 
      share.status === 'active' &&
      (!share.expiresDate || share.expiresDate >= currentDate)
    );
    
    return activeShares;
  } catch (error) {
    console.error('Error getting shared data for doctor:', error);
    return [];
  }
};

// Get shared data for a specific patient
export const getSharedDataForPatient = async (patientId) => {
  try {
    const allSharing = await getDataSharing();
    return allSharing.filter(share => share.patientId === patientId);
  } catch (error) {
    console.error('Error getting shared data for patient:', error);
    return [];
  }
};

// Revoke shared data access
export const revokeDataAccess = async (shareId) => {
  return await updateItem('dataSharing', shareId, { status: 'revoked' });
};

// Search operations
export const searchPatients = async (query) => {
  const users = await getUsers();
  const patients = users.filter(user => user.role === 'patient');
  return patients.filter(patient => 
    patient.name.toLowerCase().includes(query.toLowerCase()) ||
    patient.id.toLowerCase().includes(query.toLowerCase())
  );
};

export const searchDoctors = async (query) => {
  const users = await getUsers();
  const doctors = users.filter(user => user.role === 'doctor');
  return doctors.filter(doctor => 
    doctor.name.toLowerCase().includes(query.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(query.toLowerCase()) ||
    doctor.hospital.toLowerCase().includes(query.toLowerCase())
  );
};

// Clear all data (for testing)
export const clearAllData = async () => {
  try {
    await localforage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing data:', error);
    toast.error('Failed to clear data');
    return false;
  }
}; 