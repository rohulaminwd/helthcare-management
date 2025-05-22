import React from 'react';

const ActivityLog = () => {
  return (
    <div className="md:pl-64 flex flex-col flex-1">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div
            className="flex flex-col md:flex-row md:justify-between md:items-center space
y-4 md:space-y-0"
          >
            <div>
              <h1 className="text-2xl font-bold text-dark-900">Audit Log</h1>
              <p className="mt-1 text-sm text-gray-500">
                Immutable record of all blockchain transactions
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border 
border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg
gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition
colors"
              >
                <svg
                  className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 
1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 
111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                Export CSV
              </button>
              <div className="relative">
                <select
                  id="filter"
                  name="filter"
                  className="block w-full pl-3 pr-10 py-2 text
base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 
sm:text-sm rounded-md bg-white"
                >
                  <option>All Actions</option>
                  <option>Access</option>
                  <option>Upload</option>
                  <option>Download</option>
                  <option>Share</option>
                  <option>Blockchain</option>
                </select>
              </div>
            </div>
          </div>
          {/* <!-- Blockchain Verification Badge -->  */}
          <div
            className="mt-4 flex items-center p-3 bg-green-50 rounded-lg border border
green-100"
          >
            <svg
              className="h-5 w-5 text-green-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 
3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042
.133-2.052-.382-3.016z"
              />
            </svg>
            <span className="text-sm font-medium text-green-800">
              All records cryptographically verified on blockchain
            </span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-6">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text
gray-500 uppercase tracking-wider"
                    >
                      Timestamp
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text
gray-500 uppercase tracking-wider"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text
gray-500 uppercase tracking-wider"
                    >
                      Performed By
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text
gray-500 uppercase tracking-wider"
                    >
                      Details
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text
gray-500 uppercase tracking-wider"
                    >
                      IP Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text
gray-500 uppercase tracking-wider"
                    >
                      Tx Hash
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        2023-01 15
                      </div>
                      <div className="text-sm text-gray-500">10:42:15 UTC</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className="px-2 inline-flex text-xs leading-5 font-semibold 
rounded-full bg-blue-100 text-blue-800"
                      >
                        Access
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div
                          className="flex-shrink-0 h-10 w-10 rounded-full bg-primary
100 flex items-center justify-center"
                        >
                          <span className="text-primary-600 font-medium">
                            SS
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Dr. Sarah Smith
                          </div>
                          <div className="text-sm text-gray-500">
                            Cardiology
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Viewed Blood Test Results
                      </div>
                      <div className="text-sm text-gray-500">
                        Patient ID: #12345
                      </div>
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray
500"
                    >
                      192.168.1.45
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className="text-sm text-gray-500 truncate max-w
xs"
                      >
                        0x4a7b...3e2f
                      </div>
                      <button
                        className="text-xs text-primary-600 hover:text-primary
800"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        2023-01 10
                      </div>
                      <div className="text-sm text-gray-500">14:15:32 UTC</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className="px-2 inline-flex text-xs leading-5 font-semibold 
rounded-full bg-purple-100 text-purple-800"
                      >
                        Download
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div
                          className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 
flex items-center justify-center"
                        >
                          <svg
                            className="h-5 w-5 text-gray-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 4a2 2 0 012-2h8a2 2 0 
012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            City General Hospital
                          </div>
                          <div className="text-sm text-gray-500">
                            Institution
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Downloaded X-Ray Images
                      </div>
                      <div className="text-sm text-gray-500">
                        DICOM files (3.2 MB)
                      </div>
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray
500"
                    >
                      203.0.113.12
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className="text-sm text-gray-500 truncate max-w
xs"
                      >
                        0x8c2d...7a1f
                      </div>
                      <button
                        className="text-xs text-primary-600 hover:text-primary
800"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        2023-01 05
                      </div>
                      <div className="text-sm text-gray-500">09:30:47 UTC</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className="px-2 inline-flex text-xs leading-5 font-semibold 
rounded-full bg-green-100 text-green-800"
                      >
                        Upload
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div
                          className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 
flex items-center justify-center"
                        >
                          <span className="text-green-600 font-medium">MJ</span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Dr. Michael Johnson
                          </div>
                          <div className="text-sm text-gray-500">Neurology</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Added New Prescription
                      </div>
                      <div className="text-sm text-gray-500">Rx #98765</div>
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray
500"
                    >
                      198.51.100.34
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className="text-sm text-gray-500 truncate max-w
xs"
                      >
                        0x5e9f...2b4c
                      </div>
                      <button
                        className="text-xs text-primary-600 hover:text-primary
800"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        2022-12 20
                      </div>
                      <div className="text-sm text-gray-500">16:22:18 UTC</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className="px-2 inline-flex text-xs leading-5 font-semibold 
rounded-full bg-yellow-100 text-yellow-800"
                      >
                        Share
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div
                          className="flex-shrink-0 h-10 w-10 rounded-full bg-primary
100 flex items-center justify-center"
                        >
                          <svg
                            className="h-5 w-5 text-primary-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 
6zm-7 9a7 7 0 1114 0H3z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            You
                          </div>
                          <div className="text-sm text-gray-500">Patient</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Shared records with Dr. Smith
                      </div>
                      <div className="text-sm text-gray-500">
                        Access granted for 30 days
                      </div>
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray
500"
                    >
                      192.168.1.100
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className="text-sm text-gray-500 truncate max-w
xs"
                      >
                        0x3d7a...9e1f
                      </div>
                      <button
                        className="text-xs text-primary-600 hover:text-primary
800"
                      >
                        View
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        2022-12 15
                      </div>
                      <div className="text-sm text-gray-500">11:05:29 UTC</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className="px-2 inline-flex text-xs leading-5 font-semibold 
rounded-full bg-red-100 text-red-800"
                      >
                        Emergency
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div
                          className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 
flex items-center justify-center"
                        >
                          <svg
                            className="h-5 w-5 text-red-600"
                            fill="none"
                            viewBox="0 0 
24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 
4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Emergency Services
                          </div>
                          <div className="text-sm text-gray-500">
                            First Responder
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Accessed in emergency
                      </div>
                      <div className="text-sm text-gray-500">
                        Break-glass access
                      </div>
                    </td>
                    <td
                      className="px-6 py-4 whitespace-nowrap text-sm text-gray
500"
                    >
                      203.0.113.42
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div
                        className="text-sm text-gray-500 truncate max-w
xs"
                      >
                        0x1f4e...7d2a
                      </div>

                      <button className="text-xs text-primary-600 hover:text-primary">
                        View{' '}
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <!-- Pagination -->  */}
            <div
              className="bg-white px-4 py-3 flex items-center justify-between border-t 
border-gray-200 sm:px-6"
            >
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to{' '}
                    <span className="font-medium">5</span> of{' '}
                    <span className="font-medium">24</span> entries
                  </p>
                </div>
                <div>
                  <nav
                    className="relative z-0 inline-flex rounded-md shadow-sm -space-x
px"
                    aria-label="Pagination"
                  >
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 
rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg
gray-50"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.707 5.293a1 1 0 010 
1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      aria-current="page"
                      className="z-10 bg-primary-50 border
primary-500 text-primary-600 relative inline-flex items-center px-4 py-2 border text-sm font
medium"
                    >
                      1
                    </a>
                    <a
                      href="#"
                      className="bg-white border-gray-300 text-gray-500 
hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    >
                      2
                    </a>
                    <a
                      href="#"
                      className="bg-white border-gray-300 text-gray-500 
hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    >
                      3
                    </a>
                    <span
                      className="relative inline-flex items-center px-4 py-2 border 
border-gray-300 bg-white text-sm font-medium text-gray-700"
                    >
                      ...
                    </span>
                    <a
                      href="#"
                      className="bg-white border-gray-300 text-gray-500 
hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                    >
                      8
                    </a>
                    <a
                      href="#"
                      className="relative inline-flex items-center px-2 py-2 
rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg
gray-50"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010
1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityLog;
