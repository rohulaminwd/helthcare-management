import React from 'react';
import Logout from '../utils/Logout';
import { Link } from 'react-router-dom';

const Patient = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  return (
    <div className="md:pl-64 flex flex-col flex-1">
      <main className="flex-1" />
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">
                Last updated: Today, 10:42 AM
              </span>
              <button className="p-1 rounded-full hover:bg-gray-100">
                <i className="fas fa-sync-alt text-gray-500 text-sm"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* <!-- Welcome Card -->  */}
          <div
            className="mt-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow
md overflow-hidden"
          >
            <div className="p-6 flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold text-white">
                  Welcome back, {user?.name}!
                </h2>
                <p className="mt-1 text-blue-100 max-w-lg">
                  You have 1 upcoming appointment and 2 new messages from your
                  care team.
                </p>
                <button
                  className="mt-4 inline-flex items-center px-4 py-2 border
transparent text-sm font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue
50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  View Messages
                </button>
              </div>
              <div className="hidden md:block">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3059/3059518.png"
                  className="h-32 opacity-90"
                  alt="Medical illustration"
                />
              </div>
            </div>
          </div>
          {/* <!-- Stats Cards -->  */}
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div
              className="bg-white overflow-hidden shadow rounded-lg card-hover 
transition-all duration-200"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                    <i className="fas fa-procedures text-blue-600 text-xl"></i>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Active Treatments
                      </dt>
                      <dd>
                        <div className="text-2xl font-semibold text-gray-900">
                          3
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-xs text-gray-500">
                    2 in progress, 1 completed
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-white overflow-hidden shadow rounded-lg card-hover 
transition-all duration-200"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                    <i className="fas fa-user-md text-green-600 text-xl"></i>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Care Team
                      </dt>
                      <dd>
                        <div className="text-2xl font-semibold text-gray-900">
                          5
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-xs text-gray-500">
                    2 physicians, 3 specialists
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-white overflow-hidden shadow rounded-lg card-hover 
transition-all duration-200"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                    <i className="fas fa-prescription text-purple-600 text-xl"></i>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Active Prescriptions
                      </dt>
                      <dd>
                        <div className="text-2xl font-semibold text-gray-900">
                          4
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-xs text-gray-500">1 needs renewal</div>
                </div>
              </div>
            </div>

            <div
              className="bg-white overflow-hidden shadow rounded-lg card-hover 
transition-all duration-200"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-amber-100 rounded-md p-3">
                    <i className="fas fa-calendar-alt text-amber-600 text-xl"></i>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Next Appointment
                      </dt>
                      <dd>
                        <div className="text-2xl font-semibold text-gray-900">
                          May 15
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-xs text-gray-500">
                    With Dr. Smith at 10:30 AM
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Quick Actions + Recent Records -->  */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* <!-- Quick Actions -->  */}
            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <a
                  href="#"
                  className=" bg-white p-5 rounded-lg shadow-sm border 
border-gray-100 flex flex-col items-center text-center hover:border-blue-200 card-hover 
transition-all duration-200"
                >
                  <div className="bg-blue-50 p-3 rounded-full mb-3">
                    <i className="fas fa-file-medical text-blue-600 text-xl"></i>
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">
                    View Records
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    Access your complete medical history
                  </p>
                </a>
                <a
                  href="#"
                  className=" bg-white p-5 rounded-lg shadow-sm border 
border-gray-100 flex flex-col items-center text-center hover:border-blue-200 card-hover 
transition-all duration-200"
                >
                  <div className="bg-green-50 p-3 rounded-full mb-3">
                    <i className="fas fa-share-alt text-green-600 text-xl"></i>
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Share Records
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    Grant access to healthcare providers
                  </p>
                </a>
                <a
                  href="#"
                  className=" bg-white p-5 rounded-lg shadow-sm border 
border-gray-100 flex flex-col items-center text-center hover:border-blue-200 card-hover 
transition-all duration-200"
                >
                  <div className="bg-purple-50 p-3 rounded-full mb-3">
                    <i className="fas fa-upload text-purple-600 text-xl"></i>
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Upload Files
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    Add new reports to your records
                  </p>
                </a>
                <a
                  href="#"
                  className=" bg-white p-5 rounded-lg shadow-sm border 
border-gray-100 flex flex-col items-center text-center hover:border-blue-200 card-hover 
transition-all duration-200"
                >
                  <div className="bg-amber-50 p-3 rounded-full mb-3">
                    <i className="fas fa-calendar-plus text-amber-600 text-xl"></i>
                  </div>
                  <h3 className="text-sm font-medium text-gray-900">
                    Book Appointment
                  </h3>
                  {/* </div>  */}
                  <p className="mt-1 text-xs text-gray-500">
                    Schedule with your doctor
                  </p>
                </a>
              </div>
              {/* <!-- Recent Records -->  */}
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Recent Records
                </h2>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <ul className="divide-y divide-gray-200">
                    <li
                      className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors 
duration-150"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <i className="fas fa-file-alt text-blue-600 text-lg"></i>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              Annual Physical Exam
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Dr. Sarah Smith • May 5, 2023
                            </p>
                          </div>
                        </div>
                        <button
                          className="text-blue-600 hover:text-blue-800 text-sm font
medium"
                        >
                          View
                        </button>
                      </div>
                    </li>
                    <li
                      className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors 
duration-150"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-green-100 p-2 rounded-lg mr-3">
                            <i className="fas fa-vial text-green-600 text-lg"></i>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              Blood Test Results
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              LabCorp • April 28, 2023
                            </p>
                          </div>
                        </div>
                        <button
                          className="text-blue-600 hover:text-blue-800 text-sm font
medium"
                        >
                          View
                        </button>
                      </div>
                    </li>
                    <li
                      className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors 
duration-150"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-purple-100 p-2 rounded-lg mr-3">
                            <i
                              className="fas fa-prescription-bottle-alt text-purple-600 text
lg"
                            ></i>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              New Prescription
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Dr. Michael Johnson • April 15, 2023
                            </p>
                          </div>
                        </div>
                        <button
                          className="text-blue-600 hover:text-blue-800 text-sm font
medium"
                        >
                          View
                        </button>
                      </div>
                    </li>
                    <li
                      className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors 
duration-150"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="bg-amber-100 p-2 rounded-lg mr-3">
                            <i className="fas fa-x-ray text-amber-600 text-lg"></i>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              X-ray Report
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                              Radiology Dept. • March 30, 2023
                            </p>
                          </div>
                        </div>
                        <button
                          className="text-blue-600 hover:text-blue-800 text-sm font
medium"
                        >
                          View
                        </button>
                      </div>
                    </li>
                  </ul>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      className="text-sm font-medium text-blue-600 hover:text-blue
800"
                    >
                      View all records →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Notifications + Health Summary -->  */}
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* <!-- Notifications -->  */}
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Recent Activity
                </h2>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <ul className="divide-y divide-gray-200">
                    <li className="notification-unread px-4 py-4 sm:px-6">
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-2 rounded-full mr-3">
                          <i className="fas fa-user-md text-blue-600 text-sm"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            Dr. Rahim accessed your lab report
                          </p>
                          <div className="flex justify-between mt-1">
                            <p className="text-xs text-gray-500">2 hours ago</p>
                            <span
                              className="inline-flex items-center px-2 py-0.5 rounded 
text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              New
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                      <div className="flex items-center">
                        <div className="bg-green-100 p-2 rounded-full mr-3">
                          <i className="fas fa-pills text-green-600 text-sm"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            New prescription from Dr. Smith
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            1 day ago
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                      <div className="flex items-center">
                        <div className="bg-purple-100 p-2 rounded-full mr-3">
                          <i className="fas fa-file-upload text-purple-600 text-sm"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            Lab report uploaded
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            3 days ago
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                      <div className="flex items-center">
                        <div className="bg-amber-100 p-2 rounded-full mr-3">
                          <i className="fas fa-calendar-check text-amber-600 text-sm"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            Appointment confirmed
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            May 15 with Dr. Smith
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                      className="text-sm font-medium text-blue-600 hover:text-blue
800"
                    >
                      View all activity →
                    </button>
                  </div>
                </div>
              </div>

              {/* <!-- Health Summary -->  */}
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Health Summary
                </h2>
                <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 bg-blue-100 p-3 rounded-lg mr-4">
                        <i className="fas fa-heartbeat text-blue-600 text-xl"></i>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          Vital Statistics
                        </h3>
                        <div className="mt-4 grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">
                              Blood Pressure
                            </p>
                            <p className="text-lg font-semibold text-gray-900">
                              120/80{' '}
                              <span className="text-sm font-normal text-green-600">
                                Normal
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Heart Rate</p>
                            <p className="text-lg font-semibold text-gray-900">
                              72 bpm
                              <span className="text-sm font-normal text-green-600">
                                Normal
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Cholesterol</p>
                            <p className="text-lg font-semibold text-gray-900">
                              180 mg/dL
                              <span className="text-sm font-normal text-amber-600">
                                Borderline
                              </span>
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">BMI</p>
                            <p className="text-lg font-semibold text-gray-900">
                              24.3{' '}
                              <span className="text-sm font-normal text-green-600">
                                Healthy
                              </span>
                            </p>
                          </div>
                        </div>
                        <button
                          className="mt-4 text-sm font-medium text-blue-600 
hover:text-blue-800"
                        >
                          View detailed report →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patient;
