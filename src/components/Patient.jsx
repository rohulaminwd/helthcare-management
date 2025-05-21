import React from 'react';
import Logout from '../utils/Logout';
import { Link } from 'react-router-dom';

const Patient = ({ user }) => {
  return (
    <div class="bg-gray-50">
      <nav class="bg-white shadow-sm border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0 flex items-center">
                <svg
                  class="h-8 w-8 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 14C19 15.6569 16.6569 17 14 17C11.3431 17 9 15.6569 9 
14M19 14C19 12.3431 16.6569 11 14 11C11.3431 11 9 12.3431 9 14M19 14V6C19 4.34315 
17.6569 3 16 3H12C10.3431 3 9 4.34315 9 6V14M9 14H5C3.34315 14 2 15.3431 2 17V19C2 
20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V17C22 15.3431 20.6569 14 19 
14H9Z"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    linejoin="round"
                  />
                </svg>
                <span class="ml-2 text-xl font-bold text-gray-800">
                  HealthChain
                </span>
              </div>
            </div>
            <div class="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
              <button
                class="relative bg-white p-1 rounded-full text-gray-500 hover:text-gray-700 
focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <span class="sr-only">View notifications</span>
                <svg
                  class="h-6 w-6"
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
                <span class="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
              </button>
              <div class="relative ml-3">
                <div class="flex items-center space-x-2">
                  <div class="text-right hidden md:block">
                    <p class="text-sm font-medium text-gray-700">
                      {user?.name}
                    </p>
                    <p class="text-xs text-gray-500">Patient ID: #{user?.id}</p>
                  </div>
                  <button
                    type="button"
                    class="bg-gray-100 flex text-sm rounded-full 
focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    id="user-menu"
                    aria
                    expanded="false"
                    aria-haspopup="true"
                  >
                    <span class="sr-only">Open user menu</span>
                    {/* create avatar first later */}
                    <div class="h-8 w-8 rounded-full bg-blue-100 border-2 border-blue-700 flex items-center justify-center">
                      <span className=" uppercase">
                        {user?.name?.slice(0, 1)}
                      </span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Sidebar + Main Content -->  */}
      <div class="flex">
        {/* <!-- Sidebar -->  */}
        <div class="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
          <div class="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div class="flex items-center flex-shrink-0 px-4">
                <Link to="/">
                  <span class="text-xl font-bold text-gray-800">
                    Patient Portal
                  </span>
                </Link>
              </div>
              <nav class="mt-8 flex-1 px-2 space-y-1">
                <a
                  href="#"
                  class="bg-blue-50 text-blue-700 group flex items-center px-3 py-2 
text-sm font-medium rounded-md"
                >
                  <i class="fas fa-tachometer-alt mr-3 text-blue-600 text-lg"></i>
                  Dashboard
                </a>
                <a
                  href="#"
                  class="sidebar-item text-gray-600 hover:text-gray-900 group flex 
items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <i class="fas fa-user mr-3 text-gray-500 text-lg"></i>
                  Profile
                </a>
                <a
                  href="#"
                  class="sidebar-item text-gray-600 hover:text-gray-900 group flex 
items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <i class="fas fa-file-medical mr-3 text-gray-500 text-lg"></i>
                  Medical Records
                </a>
                <a
                  href="#"
                  class="sidebar-item text-gray-600 hover:text-gray-900 group flex 
items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <i class="fas fa-prescription-bottle-alt mr-3 text-gray-500 text-lg"></i>
                  Prescriptions
                </a>
                <a
                  href="#"
                  class="sidebar-item text-gray-600 hover:text-gray-900 group flex 
items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <i class="fas fa-file-upload mr-3 text-gray-500 text-lg"></i>
                  Upload Reports
                </a>
                <a
                  href="#"
                  class="sidebar-item text-gray-600 hover:text-gray-900 group flex 
items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <i class="fas fa-shield-alt mr-3 text-gray-500 text-lg"></i>
                  Access Management
                </a>
                <a
                  href="#"
                  class="sidebar-item text-gray-600 hover:text-gray-900 group flex 
items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <i class="fas fa-history mr-3 text-gray-500 text-lg"></i>
                  Activity Log
                </a>
                <a
                  href="#"
                  class="sidebar-item text-gray-600 hover:text-gray-900 group flex 
items-center px-3 py-2 text-sm font-medium rounded-md"
                >
                  <i class="fas fa-calendar-check mr-3 text-gray-500 text-lg"></i>
                  Appointments
                </a>
              </nav>
            </div>
            <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
              <div class="flex items-center w-full">
                <div>
                  <img
                    class="inline-block h-9 w-9 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb
1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=25
 6&q=80"
                    alt=""
                  />
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-700">{user?.name}</p>
                  {/* <button
                    onClick={() => setShowLogoutModal(true)}
                    class="text-xs font-medium text-blue-600 hover:text-blue-800"
                  >
                    Sign out
                  </button> */}
                  <Logout />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Main Content -->  */}
        <div class="md:pl-64 flex flex-col flex-1">
          <main class="flex-1" />
          <div class="py-6">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div class="flex justify-between items-center">
                <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
                <div class="flex items-center space-x-2">
                  <span class="text-sm text-gray-500">
                    Last updated: Today, 10:42 AM
                  </span>
                  <button class="p-1 rounded-full hover:bg-gray-100">
                    <i class="fas fa-sync-alt text-gray-500 text-sm"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {/* <!-- Welcome Card -->  */}
              <div
                class="mt-6 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow
md overflow-hidden"
              >
                <div class="p-6 flex flex-col md:flex-row justify-between items-center">
                  <div class="mb-4 md:mb-0">
                    <h2 class="text-2xl font-bold text-white">
                      Welcome back, John!
                    </h2>
                    <p class="mt-1 text-blue-100 max-w-lg">
                      You have 1 upcoming appointment and 2 new messages from
                      your care team.
                    </p>
                    <button
                      class="mt-4 inline-flex items-center px-4 py-2 border
transparent text-sm font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue
50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      View Messages
                    </button>
                  </div>
                  <div class="hidden md:block">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/3059/3059518.png"
                      class="h-32 opacity-90"
                      alt="Medical illustration"
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Stats Cards -->  */}
              <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <div
                  class="bg-white overflow-hidden shadow rounded-lg card-hover 
transition-all duration-200"
                >
                  <div class="px-4 py-5 sm:p-6">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 bg-blue-100 rounded-md p-3">
                        <i class="fas fa-procedures text-blue-600 text-xl"></i>
                      </div>
                      <div class="ml-5 w-0 flex-1">
                        <dl>
                          <dt class="text-sm font-medium text-gray-500 truncate">
                            Active Treatments
                          </dt>
                          <dd>
                            <div class="text-2xl font-semibold text-gray-900">
                              3
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="text-xs text-gray-500">
                        2 in progress, 1 completed
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="bg-white overflow-hidden shadow rounded-lg card-hover 
transition-all duration-200"
                >
                  <div class="px-4 py-5 sm:p-6">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 bg-green-100 rounded-md p-3">
                        <i class="fas fa-user-md text-green-600 text-xl"></i>
                      </div>
                      <div class="ml-5 w-0 flex-1">
                        <dl>
                          <dt class="text-sm font-medium text-gray-500 truncate">
                            Care Team
                          </dt>
                          <dd>
                            <div class="text-2xl font-semibold text-gray-900">
                              5
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="text-xs text-gray-500">
                        2 physicians, 3 specialists
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="bg-white overflow-hidden shadow rounded-lg card-hover 
transition-all duration-200"
                >
                  <div class="px-4 py-5 sm:p-6">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 bg-purple-100 rounded-md p-3">
                        <i class="fas fa-prescription text-purple-600 text-xl"></i>
                      </div>
                      <div class="ml-5 w-0 flex-1">
                        <dl>
                          <dt class="text-sm font-medium text-gray-500 truncate">
                            Active Prescriptions
                          </dt>
                          <dd>
                            <div class="text-2xl font-semibold text-gray-900">
                              4
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="text-xs text-gray-500">1 needs renewal</div>
                    </div>
                  </div>
                </div>

                <div
                  class="bg-white overflow-hidden shadow rounded-lg card-hover 
transition-all duration-200"
                >
                  <div class="px-4 py-5 sm:p-6">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 bg-amber-100 rounded-md p-3">
                        <i class="fas fa-calendar-alt text-amber-600 text-xl"></i>
                      </div>
                      <div class="ml-5 w-0 flex-1">
                        <dl>
                          <dt class="text-sm font-medium text-gray-500 truncate">
                            Next Appointment
                          </dt>
                          <dd>
                            <div class="text-2xl font-semibold text-gray-900">
                              May 15
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div class="mt-4">
                      <div class="text-xs text-gray-500">
                        With Dr. Smith at 10:30 AM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Quick Actions + Recent Records -->  */}
              <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                {/* <!-- Quick Actions -->  */}
                <div>
                  <h2 class="text-lg font-medium text-gray-900 mb-4">
                    Quick Actions
                  </h2>
                  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <a
                      href="#"
                      class=" bg-white p-5 rounded-lg shadow-sm border 
border-gray-100 flex flex-col items-center text-center hover:border-blue-200 card-hover 
transition-all duration-200"
                    >
                      <div class="bg-blue-50 p-3 rounded-full mb-3">
                        <i class="fas fa-file-medical text-blue-600 text-xl"></i>
                      </div>
                      <h3 class="text-sm font-medium text-gray-900">
                        View Records
                      </h3>
                      <p class="mt-1 text-xs text-gray-500">
                        Access your complete medical history
                      </p>
                    </a>
                    <a
                      href="#"
                      class=" bg-white p-5 rounded-lg shadow-sm border 
border-gray-100 flex flex-col items-center text-center hover:border-blue-200 card-hover 
transition-all duration-200"
                    >
                      <div class="bg-green-50 p-3 rounded-full mb-3">
                        <i class="fas fa-share-alt text-green-600 text-xl"></i>
                      </div>
                      <h3 class="text-sm font-medium text-gray-900">
                        Share Records
                      </h3>
                      <p class="mt-1 text-xs text-gray-500">
                        Grant access to healthcare providers
                      </p>
                    </a>
                    <a
                      href="#"
                      class=" bg-white p-5 rounded-lg shadow-sm border 
border-gray-100 flex flex-col items-center text-center hover:border-blue-200 card-hover 
transition-all duration-200"
                    >
                      <div class="bg-purple-50 p-3 rounded-full mb-3">
                        <i class="fas fa-upload text-purple-600 text-xl"></i>
                      </div>
                      <h3 class="text-sm font-medium text-gray-900">
                        Upload Files
                      </h3>
                      <p class="mt-1 text-xs text-gray-500">
                        Add new reports to your records
                      </p>
                    </a>
                    <a
                      href="#"
                      class=" bg-white p-5 rounded-lg shadow-sm border 
border-gray-100 flex flex-col items-center text-center hover:border-blue-200 card-hover 
transition-all duration-200"
                    >
                      <div class="bg-amber-50 p-3 rounded-full mb-3">
                        <i class="fas fa-calendar-plus text-amber-600 text-xl"></i>
                      </div>
                      <h3 class="text-sm font-medium text-gray-900">
                        Book Appointment
                      </h3>
                      {/* </div>  */}
                      <p class="mt-1 text-xs text-gray-500">
                        Schedule with your doctor
                      </p>
                    </a>
                  </div>
                  {/* <!-- Recent Records -->  */}
                  <div>
                    <h2 class="text-lg font-medium text-gray-900 mb-4">
                      Recent Records
                    </h2>
                    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                      <ul class="divide-y divide-gray-200">
                        <li
                          class="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors 
duration-150"
                        >
                          <div class="flex items-center justify-between">
                            <div class="flex items-center">
                              <div class="bg-blue-100 p-2 rounded-lg mr-3">
                                <i class="fas fa-file-alt text-blue-600 text-lg"></i>
                              </div>
                              <div>
                                <p class="text-sm font-medium text-gray-900">
                                  Annual Physical Exam
                                </p>
                                <p class="text-xs text-gray-500 mt-1">
                                  Dr. Sarah Smith • May 5, 2023
                                </p>
                              </div>
                            </div>
                            <button
                              class="text-blue-600 hover:text-blue-800 text-sm font
medium"
                            >
                              View
                            </button>
                          </div>
                        </li>
                        <li
                          class="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors 
duration-150"
                        >
                          <div class="flex items-center justify-between">
                            <div class="flex items-center">
                              <div class="bg-green-100 p-2 rounded-lg mr-3">
                                <i class="fas fa-vial text-green-600 text-lg"></i>
                              </div>
                              <div>
                                <p class="text-sm font-medium text-gray-900">
                                  Blood Test Results
                                </p>
                                <p class="text-xs text-gray-500 mt-1">
                                  LabCorp • April 28, 2023
                                </p>
                              </div>
                            </div>
                            <button
                              class="text-blue-600 hover:text-blue-800 text-sm font
medium"
                            >
                              View
                            </button>
                          </div>
                        </li>
                        <li
                          class="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors 
duration-150"
                        >
                          <div class="flex items-center justify-between">
                            <div class="flex items-center">
                              <div class="bg-purple-100 p-2 rounded-lg mr-3">
                                <i
                                  class="fas fa-prescription-bottle-alt text-purple-600 text
lg"
                                ></i>
                              </div>
                              <div>
                                <p class="text-sm font-medium text-gray-900">
                                  New Prescription
                                </p>
                                <p class="text-xs text-gray-500 mt-1">
                                  Dr. Michael Johnson • April 15, 2023
                                </p>
                              </div>
                            </div>
                            <button
                              class="text-blue-600 hover:text-blue-800 text-sm font
medium"
                            >
                              View
                            </button>
                          </div>
                        </li>
                        <li
                          class="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors 
duration-150"
                        >
                          <div class="flex items-center justify-between">
                            <div class="flex items-center">
                              <div class="bg-amber-100 p-2 rounded-lg mr-3">
                                <i class="fas fa-x-ray text-amber-600 text-lg"></i>
                              </div>
                              <div>
                                <p class="text-sm font-medium text-gray-900">
                                  X-ray Report
                                </p>
                                <p class="text-xs text-gray-500 mt-1">
                                  Radiology Dept. • March 30, 2023
                                </p>
                              </div>
                            </div>
                            <button
                              class="text-blue-600 hover:text-blue-800 text-sm font
medium"
                            >
                              View
                            </button>
                          </div>
                        </li>
                      </ul>
                      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          class="text-sm font-medium text-blue-600 hover:text-blue
800"
                        >
                          View all records →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Notifications + Health Summary -->  */}
                <div class="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
                  {/* <!-- Notifications -->  */}
                  <div>
                    <h2 class="text-lg font-medium text-gray-900 mb-4">
                      Recent Activity
                    </h2>
                    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                      <ul class="divide-y divide-gray-200">
                        <li class="notification-unread px-4 py-4 sm:px-6">
                          <div class="flex items-center">
                            <div class="bg-blue-100 p-2 rounded-full mr-3">
                              <i class="fas fa-user-md text-blue-600 text-sm"></i>
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900">
                                Dr. Rahim accessed your lab report
                              </p>
                              <div class="flex justify-between mt-1">
                                <p class="text-xs text-gray-500">2 hours ago</p>
                                <span
                                  class="inline-flex items-center px-2 py-0.5 rounded 
text-xs font-medium bg-blue-100 text-blue-800"
                                >
                                  New
                                </span>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li class="px-4 py-4 sm:px-6 hover:bg-gray-50">
                          <div class="flex items-center">
                            <div class="bg-green-100 p-2 rounded-full mr-3">
                              <i class="fas fa-pills text-green-600 text-sm"></i>
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900">
                                New prescription from Dr. Smith
                              </p>
                              <p class="text-xs text-gray-500 mt-1">
                                1 day ago
                              </p>
                            </div>
                          </div>
                        </li>
                        <li class="px-4 py-4 sm:px-6 hover:bg-gray-50">
                          <div class="flex items-center">
                            <div class="bg-purple-100 p-2 rounded-full mr-3">
                              <i class="fas fa-file-upload text-purple-600 text-sm"></i>
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900">
                                Lab report uploaded
                              </p>
                              <p class="text-xs text-gray-500 mt-1">
                                3 days ago
                              </p>
                            </div>
                          </div>
                        </li>
                        <li class="px-4 py-4 sm:px-6 hover:bg-gray-50">
                          <div class="flex items-center">
                            <div class="bg-amber-100 p-2 rounded-full mr-3">
                              <i class="fas fa-calendar-check text-amber-600 text-sm"></i>
                            </div>
                            <div class="flex-1 min-w-0">
                              <p class="text-sm font-medium text-gray-900">
                                Appointment confirmed
                              </p>
                              <p class="text-xs text-gray-500 mt-1">
                                May 15 with Dr. Smith
                              </p>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          class="text-sm font-medium text-blue-600 hover:text-blue
800"
                        >
                          View all activity →
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Health Summary -->  */}
                  <div>
                    <h2 class="text-lg font-medium text-gray-900 mb-4">
                      Health Summary
                    </h2>
                    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                      <div class="px-4 py-5 sm:p-6">
                        <div class="flex items-start">
                          <div class="flex-shrink-0 bg-blue-100 p-3 rounded-lg mr-4">
                            <i class="fas fa-heartbeat text-blue-600 text-xl"></i>
                          </div>
                          <div>
                            <h3 class="text-lg font-medium text-gray-900">
                              Vital Statistics
                            </h3>
                            <div class="mt-4 grid grid-cols-2 gap-4">
                              <div>
                                <p class="text-sm text-gray-500">
                                  Blood Pressure
                                </p>
                                <p class="text-lg font-semibold text-gray-900">
                                  120/80{' '}
                                  <span class="text-sm font-normal text-green-600">
                                    Normal
                                  </span>
                                </p>
                              </div>
                              <div>
                                <p class="text-sm text-gray-500">Heart Rate</p>
                                <p class="text-lg font-semibold text-gray-900">
                                  72 bpm
                                  <span class="text-sm font-normal text-green-600">
                                    Normal
                                  </span>
                                </p>
                              </div>
                              <div>
                                <p class="text-sm text-gray-500">Cholesterol</p>
                                <p class="text-lg font-semibold text-gray-900">
                                  180 mg/dL
                                  <span class="text-sm font-normal text-amber-600">
                                    Borderline
                                  </span>
                                </p>
                              </div>
                              <div>
                                <p class="text-sm text-gray-500">BMI</p>
                                <p class="text-lg font-semibold text-gray-900">
                                  24.3{' '}
                                  <span class="text-sm font-normal text-green-600">
                                    Healthy
                                  </span>
                                </p>
                              </div>
                            </div>
                            <button
                              class="mt-4 text-sm font-medium text-blue-600 
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
      </div>
    </div>
  );
};

export default Patient;
