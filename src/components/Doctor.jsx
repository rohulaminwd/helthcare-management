import React from 'react';

const Doctor = () => {
  return (
    <div className="md:pl-64 flex flex-col">
      <div className="flex-1 ">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-bold text-gray-900">
              Doctor Dashboard
            </h1>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <svg
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 
0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Last updated:{' '}
              <span className="font-medium ml-1">Today, 10:42 AM</span>
            </div>
            {/* <!-- Stats Cards -->  */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* <!-- Active Patients Card -->  */}
              <div
                className="bg-white overflow-hidden shadow rounded-lg border border-gray
200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-primary/10 rounded-lg p-3">
                      <svg
                        className="h-8 w-8 text-primary-600"
                        fill="none"
                        viewBox="0 0 24 
24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke
                          width="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9
5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          Active Patients
                        </dt>
                        <dd>
                          <div className="text-2xl font-semibold text-gray-900">
                            42
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke
                          width="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                      <span className="font-medium text-green-600">+3.2%</span>
                      <span className="ml-1">from last month</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Prescriptions Today Card -->  */}
              <div
                className="bg-white overflow-hidden shadow rounded-lg border border-gray
200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-indigo-100 rounded-lg p-3">
                      <svg
                        className="h-8 w-8 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke
                          width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01
8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0
1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt
                          className="text-sm font-medium text-gray-500 
truncate"
                        >
                          Prescriptions Today
                        </dt>
                        <dd>
                          <div className="text-2xl font-semibold text-gray-900">
                            7
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-4 w-4 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke
                          width="2"
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                      <span className="font-medium text-green-600">+1</span>
                      <span className="ml-1">from yesterday</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- Appointments Today Card -->  */}
              <div
                className="bg-white overflow-hidden shadow rounded-lg border border-gray
200 hover:shadow-md transition-shadow duration-200"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-green-100 rounded-lg p-3">
                      <svg
                        className="h-8 w-8 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke
                          width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 
2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt
                          className="text-sm font-medium text-gray-500 
truncate"
                        >
                          Appointments Today
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
                    <div className="flex items-center text-sm text-gray-500">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-4 w-4 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke
                          width="2"
                          d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                        />
                      </svg>
                      <span className="font-medium text-red-600">-2</span>
                      <span className="ml-1">from yesterday</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Patient List -->  */}
            <div className="mt-8">
              <div className="sm:flex sm:items-center sm:justify-between">
                <h2 className="text-lg font-medium text-gray-900">
                  Recent Patients
                </h2>
                <div className="mt-3 sm:mt-0 sm:ml-4">
                  <div className="relative rounded-md shadow-sm max-w-xs">
                    <input
                      type="text"
                      name="search"
                      id="search"
                      className="block w-full pr-10 
sm:text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500 px-3 border py-1.5"
                      placeholder="Search patients..."
                    />
                    <div
                      className="absolute inset-y-0 right-0 pr-3 flex items-center pointer
events-none"
                    >
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg border 
border-gray-200"
              >
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text
gray-500 uppercase tracking-wider"
                        >
                          Patient
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text
gray-500 uppercase tracking-wider"
                        >
                          Last Visit
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text
gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text
gray-500 uppercase tracking-wider"
                        >
                          Medical Records
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span
                            className="sr
only"
                          >
                            Actions
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb
1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=25
 6&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                John Doe
                              </div>
                              <div className="text-sm text-gray-500">
                                ID: #PAT-789456
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            15 Jan 2023
                          </div>
                          <div className="text-sm text-gray-500">10:30 AM</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold 
rounded-full bg-green-100 text-green-800"
                          >
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <svg
                              className="h-4 w-4 text-green-500 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke
                                width="2"
                                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 
12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                              />
                            </svg>
                            12 Records
                          </div>
                        </td>
                        <td
                          className="px-6 py-4 whitespace-nowrap text-right text-sm font
medium"
                        >
                          <button
                            className="text-primary-600 hover:text-primary-900 mr
3"
                          >
                            View
                          </button>
                          <button
                            className="text-indigo-600 hover:text-indigo
900"
                          >
                            Message
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb
1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=25
 6&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                Jane Smith
                              </div>
                              <div className="text-sm text-gray-500">
                                ID: #PAT-123456
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            14 Jan 2023
                          </div>
                          <div className="text-sm text-gray-500">2:15 PM</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold 
rounded-full bg-green-100 text-green-800"
                          >
                            Active
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <svg
                              className="h-4 w-4 text-green-500 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke
                                width="2"
                                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 
12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                              />
                            </svg>
                            8 Records
                          </div>
                        </td>
                        <td
                          className="px-6 py-4 whitespace-nowrap text-right text-sm font
medium"
                        >
                          <button
                            className="text-primary-600 hover:text-primary-900 mr
3"
                          >
                            View
                          </button>
                          <button
                            className="text-indigo-600 hover:text-indigo
900"
                          >
                            Message
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-full"
                                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb
1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=25
 6&q=80"
                                alt=""
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                Michael Johnson
                              </div>
                              <div className="text-sm text-gray-500">
                                ID: #PAT-654321
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            10 Jan 2023
                          </div>
                          <div className="text-sm text-gray-500">9:00 AM</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold 
rounded-full bg-yellow-100 text-yellow-800"
                          >
                            Follow-up
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <svg
                              className="h-4 w-4 text-green-500 mr-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke
                                width="2"
                                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 
12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                              />
                            </svg>
                            5 Records
                          </div>
                        </td>
                        <td
                          className="px-6 py-4 whitespace-nowrap text-right text-sm font
medium"
                        >
                          <button
                            className="text-primary-600 hover:text-primary-900 mr
3"
                          >
                            View
                          </button>
                          <button
                            className="text-indigo-600 hover:text-indigo
900"
                          >
                            Message
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <!-- Quick Actions & Upcoming Appointments -->  */}
            <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* <!-- Quick Actions -->  */}
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  Quick Actions
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <a
                    href="#"
                    className="relative rounded-lg border border-gray-200 bg-white px-4 py-5 shadow-sm flex items-center space-x-3 hover:border-primary-300 hover:shadow-md 
focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500 transition-all 
duration-150"
                  >
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-lg">
                      <svg
                        className="h-8 w-8 text-primary-600"
                        fill="none"
                        viewBox="0 0 24 
24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke
                          width="2"
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01
8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0
1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      <p className="text-sm font-medium text-gray-900">
                        Add Diagnosis
                      </p>
                      <p className="text-sm text-gray-500">
                        Create new medical record
                      </p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="relative rounded-lg border border-gray-200 bg-white px-4 py-5 shadow-sm flex items-center space-x-3 hover:border-primary-300 hover:shadow-md 
focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500 transition-all 
duration-150"
                  >
                    <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-lg">
                      <svg
                        className="h-8 w-8 text-indigo-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke
                          width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      <p className="text-sm font-medium text-gray-900">
                        Patient Lookup
                      </p>
                      <p className="text-sm text-gray-500">Find new patients</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="relative rounded-lg border border-gray-200 bg-white px-4 py-5 shadow-sm flex items-center space-x-3 hover:border-primary-300 hover:shadow-md 
focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500 transition-all 
duration-150"
                  >
                    <div className="flex-shrink-0 bg-green-100 p-3 rounded-lg">
                      <svg
                        className="h-8 w-8 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke
                          width="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 
2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      <p className="text-sm font-medium text-gray-900">
                        Appointments
                      </p>
                      <p className="text-sm text-gray-500">
                        View your schedule
                      </p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="relative rounded-lg border border-gray-200 bg-white px-4 py-5 shadow-sm flex items-center space-x-3 hover:border-primary-300 hover:shadow-md 
focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500 transition-all 
duration-150"
                  >
                    <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg ">
                      <svg
                        className="h-8 w-8 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke
                          width="2"
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 
0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <span
                        className="absolute inset-0"
                        aria-hidden="true"
                      ></span>
                      <p className="text-sm font-medium text-gray-900">
                        Medical Records
                      </p>
                      <p className="text-sm text-gray-500">
                        Access patient history
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* <!-- Upcoming Appointments -->  */}
              <div>
                <h2 className="text-lg font-medium text-gray-900">
                  Upcoming Appointments
                </h2>
                <div
                  className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg border 
border-gray-200"
                >
                  <ul className="divide-y divide-gray-200">
                    <li className="px-6 py-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb
1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=25
 6&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              John Doe
                            </div>
                            <div className="text-sm text-gray-500">
                              Regular checkup
                            </div>
                          </div>
                        </div>
                        <div className="ml-2 flex flex-col items-end">
                          <div className="text-sm font-medium text-gray-900">
                            10:30 AM
                          </div>
                          <div className="text-xs text-gray-500">Today</div>
                        </div>
                      </div>
                    </li>
                    <li className="px-6 py-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb
1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=25
 6&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Jane Smith
                            </div>
                            <div className="text-sm text-gray-500">
                              Follow-up visit
                            </div>
                          </div>
                        </div>
                        <div className="ml-2 flex flex-col items-end">
                          <div className="text-sm font-medium text-gray-900">
                            2:15 PM
                          </div>
                          <div className="text-xs text-gray-500">Today</div>
                        </div>
                      </div>
                    </li>
                    <li className="px-6 py-4 hover:bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb
1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=25
 6&q=80"
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Michael Johnson
                            </div>
                            <div className="text-sm text-gray-500">
                              Annual physical
                            </div>
                          </div>
                        </div>
                        <div className="ml-2 flex flex-col items-end">
                          <div className="text-sm font-medium text-gray-900">
                            9:00 AM
                          </div>
                          <div className="text-xs text-gray-500">Tomorrow</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="px-6 py-4 bg-gray-50 text-right">
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:text
primary-900"
                    >
                      View all appointments
                    </a>
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

export default Doctor;
