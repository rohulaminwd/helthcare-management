// src/pages/Dashboard.tsx
import React from 'react';
import Logout from '../utils/Logout';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  // find the path name
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path
      ? 'bg-blue-50 text-blue-700'
      : 'text-gray-600 hover:text-gray-900';
  };
  return (
    <>
      <div className="bg-gray-50">
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center">
                  <svg
                    className="h-8 w-8 text-blue-600"
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
                  <span className="ml-2 text-xl font-bold text-gray-800">
                    HealthChain
                  </span>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                <Link
                  to="/dashboard/notification"
                  className="relative bg-white p-1 rounded-full text-gray-500 hover:text-gray-700 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
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
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </Link>
                <div className="relative ml-3">
                  <div className="flex items-center space-x-2">
                    <div className="text-right hidden md:block">
                      <p className="text-sm font-medium text-gray-700">
                        {user?.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        Patient ID: #{user?.id}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="bg-gray-100 flex text-sm rounded-full 
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      id="user-menu"
                      aria
                      expanded="false"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open user menu</span>
                      {/* create avatar first later */}
                      <div className="h-8 w-8 rounded-full bg-blue-100 border-2 border-blue-700 flex items-center justify-center">
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
        <div className="flex">
          {/* <!-- Sidebar -->  */}
          <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
            <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
              <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                  <Link to="/">
                    <span className="text-xl font-bold text-gray-800">
                      {user?.role === 'doctor'
                        ? 'Doctor Portal'
                        : 'Patient Portal'}
                    </span>
                  </Link>
                </div>
                <nav className="mt-8 flex-1 px-2 space-y-1">
                  <Link
                    to="/dashboard"
                    className={` group flex items-center px-3 py-2 
      text-sm font-medium rounded-md ${isActive('/dashboard')}`}
                  >
                    <i className="fas fa-tachometer-alt mr-3 text-blue-600 text-lg"></i>
                    Dashboard
                  </Link>
                  <Link
                    to="/dashboard/profile"
                    className={` group flex items-center px-3 py-2 
      text-sm font-medium rounded-md ${isActive('/dashboard/profile')}`}
                  >
                    <i className="fas fa-user mr-3 text-gray-500 text-lg"></i>
                    Profile
                  </Link>
                  <Link
                    to="/dashboard/records"
                    className={` group flex items-center px-3 py-2 
      text-sm font-medium rounded-md ${isActive('/dashboard/records')}`}
                  >
                    <i className="fas fa-file-medical mr-3 text-gray-500 text-lg"></i>
                    Medical Records
                  </Link>
                  <Link
                    to="/dashboard/prescriptions"
                    className={` group flex items-center px-3 py-2 
      text-sm font-medium rounded-md ${isActive('/dashboard/prescriptions')}`}
                  >
                    <i className="fas fa-prescription-bottle-alt mr-3 text-gray-500 text-lg"></i>
                    Prescriptions
                  </Link>
                  <Link
                    to="/dashboard/upload-report"
                    className={` group flex items-center px-3 py-2 
      text-sm font-medium rounded-md ${isActive('/dashboard/upload-report')}`}
                  >
                    <i className="fas fa-file-upload mr-3 text-gray-500 text-lg"></i>
                    Upload Reports
                  </Link>
                  <Link
                    to="/dashboard/management"
                    className={` group flex items-center px-3 py-2 
      text-sm font-medium rounded-md ${isActive('/dashboard/management')}`}
                  >
                    <i className="fas fa-shield-alt mr-3 text-gray-500 text-lg"></i>
                    Access Management
                  </Link>
                  <Link
                    to="/dashboard/activity-log"
                    className={` group flex items-center px-3 py-2 
      text-sm font-medium rounded-md ${isActive('/dashboard/activity-log')}`}
                  >
                    <i className="fas fa-history mr-3 text-gray-500 text-lg"></i>
                    Activity Log
                  </Link>
                  <Link
                    to="/dashboard/notification"
                    className={` group flex items-center px-3 py-2 
      text-sm font-medium rounded-md ${isActive('/dashboard/notification')}`}
                  >
                    <i className="fas fa-calendar-check mr-3 text-gray-500 text-lg"></i>
                    Appointments
                  </Link>
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
                <div className="flex items-center w-full">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb
      1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=25
       6&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-700">
                      {user?.name}
                    </p>
                    {/* <button
                          onClick={() => setShowLogoutModal(true)}
                          className="text-xs font-medium text-blue-600 hover:text-blue-800"
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
          <Outlet />
        </div>
      </div>
    </>
  );
}
