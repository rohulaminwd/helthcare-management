import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  // Mock user role - replace with actual auth
  const userRole = 'patient'; // or 'doctor'

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-xl font-bold text-blue-600">
            Blockchain Medical
          </h2>
        </div>
        <nav className="mt-8">
          <a
            href="#"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50"
          >
            <span className="mx-3">Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50"
          >
            <span className="mx-3">Medical Records</span>
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50"
          >
            <span className="mx-3">Prescriptions</span>
          </a>
          <a
            href="#"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-blue-50"
          >
            <span className="mx-3">Access Management</span>
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            {/* Notification Bell */}
            <button className="p-2 text-gray-600 hover:text-blue-600">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            {/* Profile Menu */}
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
              <span>John Doe</span>
              <img
                className="w-8 h-8 rounded-full"
                src="https://via.placeholder.com/32"
                alt="Profile"
              />
            </button>
          </div>
        </header>

        {/* Content based on role */}
        {userRole === 'patient' ? <PatientDashboard /> : <DoctorDashboard />}
      </main>
    </div>
  );
}

// Patient Dashboard Component
function PatientDashboard() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">
            Total Treatments
          </h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">24</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Last Doctor</h3>
          <p className="text-xl font-medium text-gray-900 mt-2">
            Dr. Sarah Smith
          </p>
          <p className="text-sm text-gray-500">Cardiologist</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Last Report</h3>
          <p className="text-xl font-medium text-gray-900 mt-2">Blood Test</p>
          <p className="text-sm text-gray-500">March 15, 2024</p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          View Records
        </button>
        <button className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Grant Access
        </button>
        <button className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Upload File
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Recent Notifications
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-800">Dr. Rahim accessed your report</p>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-800">
              New prescription added to your records
            </p>
            <p className="text-sm text-gray-500">1 day ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Doctor Dashboard Component
function DoctorDashboard() {
  return (
    <div className="space-y-6">
      {/* Search and Add Patient */}
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <input
            type="search"
            placeholder="Search patients..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Add New Diagnosis
        </button>
      </div>

      {/* Patient List */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Visit
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
            {/* Sample patient row */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      John Doe
                    </div>
                    <div className="text-sm text-gray-500">ID: #12345</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">March 15, 2024</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-blue-600 hover:text-blue-900">
                  View Details
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Recent Activity
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-800">
              Updated prescription for Patient #12345
            </p>
            <p className="text-sm text-gray-500">1 hour ago</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-800">
              New access request from Patient #67890
            </p>
            <p className="text-sm text-gray-500">3 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
