import React from 'react';

const Prescriptions = () => {
  return (
    <div className="md:pl-64 flex flex-col flex-1">
      <div className="flex-1">
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  My Prescriptions
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                  All your prescriptions secured on the blockchain
                </p>
              </div>
              <button
                className="inline-flex items-center px-4 py-2 border border-transparent 
text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 
focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <i className="fas fa-plus mr-2"></i> New Prescription
              </button>
            </div>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div
                className="border-b border-gray-200 px-6 py-4 flex items-center justify
between bg-gradient-to-r from-blue-50 to-gray-50"
              >
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    Prescription Records
                  </h3>
                  blockchain
                  <p className="mt-1 text-sm text-gray-500">
                    Verified and timestamped on the{' '}
                  </p>
                </div>
                <div className="flex items-center">
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font
medium bg-green-100 text-green-800"
                  >
                    <i className="fas fa-link mr-1"></i> Blockchain Connected
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text
gray-500 uppercase tracking-wider"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text
gray-500 uppercase tracking-wider"
                      >
                        Doctor
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text
gray-500 uppercase tracking-wider"
                      >
                        Hospital
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text
gray-500 uppercase tracking-wider"
                      >
                        Medications
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text
gray-500 uppercase tracking-wider"
                      >
                        Blockchain
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          15 Jan 2023
                        </div>
                        <div className="text-sm text-gray-500">10:24 AM</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div
                            className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 
flex items-center justify-center"
                          >
                            <i className="fas fa-user-md text-blue-600"></i>
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
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          City General Hospital
                        </div>
                        <div className="text-sm text-gray-500">
                          New York, NY
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div
                            className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 
flex items-center justify-center"
                          >
                            <i className="fas fa-pills text-green-600"></i>
                          </div>
                          <div className="ml-4">
                            <div
                              className="text-sm font-medium text-gray
900"
                            >
                              Amoxicillin
                            </div>
                            <div className="text-sm text-gray-500">
                              500mg, 3 times daily for 7 days
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className="px-2 inline-flex text-xs leading-5 font-semibold 
rounded-full bg-green-100 text-green-800"
                        >
                          <i className="fas fa-check-circle mr-1"></i> Verified
                        </span>
                        <div className="text-xs text-gray-500 mt-1">
                          Tx: 0x4a3...b2f1
                        </div>
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-right text-sm font
medium"
                      >
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <i className="fas fa-file-pdf"></i>
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            <i className="fas fa-share-alt"></i>
                          </button>
                          <button
                            className="text-purple-600 hover:text-purple-900"
                            title="View on blockchain"
                          >
                            <i className="fab fa-ethereum"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          10 Dec 2022
                        </div>
                        <div className="text-sm text-gray-500">02:15 PM</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div
                            className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 
flex items-center justify-center"
                          >
                            <i className="fas fa-user-md text-blue-600"></i>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Dr. Michael Johnson
                            </div>
                            <div className="text-sm text-gray-500">
                              General Practice
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          MedLab Diagnostics
                        </div>
                        <div className="text-sm text-gray-500">Boston, MA</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div
                            className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 
flex items-center justify-center"
                          >
                            <i className="fas fa-pills text-green-600"></i>
                          </div>
                          <div className="ml-4">
                            <div
                              className="text-sm font-medium text-gray
900"
                            >
                              Ibuprofen
                            </div>
                            <div className="text-sm text-gray-500">
                              400mg, as needed for pain
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className="px-2 inline-flex text-xs leading-5 font-semibold 
rounded-full bg-green-100 text-green-800"
                        >
                          <i className="fas fa-check-circle mr-1"></i> Verified
                        </span>
                        <div className="text-xs text-gray-500 mt-1">
                          Tx: 0x8e2...c7d3
                        </div>
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-right text-sm font
medium"
                      >
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <i className="fas fa-file-pdf"></i>
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            <i className="fas fa-share-alt"></i>
                          </button>
                          <button
                            className="text-purple-600 hover:text-purple-900"
                            title="View on blockchain"
                          >
                            <i className="fab fa-ethereum"></i>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50 bg-yellow-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          5 Nov 2022
                        </div>
                        <div className="text-sm text-gray-500">09:45 AM</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div
                            className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 
flex items-center justify-center"
                          >
                            <i className="fas fa-user-md text-blue-600"></i>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              Dr. Lisa Wong
                            </div>
                            <div className="text-sm text-gray-500">
                              Dermatology
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          City General Hospital
                        </div>
                        <div className="text-sm text-gray-500">
                          New York, NY
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div
                            className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 
flex items-center justify-center"
                          >
                            <i className="fas fa-pills text-green-600"></i>
                          </div>
                          <div className="ml-4">
                            <div
                              className="text-sm font-medium text-gray
900"
                            >
                              Loratadine
                            </div>
                            <div className="text-sm text-gray-500">
                              10mg, once daily for allergies
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className="px-2 inline-flex text-xs leading-5 font-semibold 
rounded-full bg-yellow-100 text-yellow-800"
                        >
                          <i className="fas fa-clock mr-1"></i> Pending
                        </span>
                        <div className="text-xs text-gray-500 mt-1">
                          Validating...
                        </div>
                      </td>
                      <td
                        className="px-6 py-4 whitespace-nowrap text-right text-sm font
medium"
                      >
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <i className="fas fa-file-pdf"></i>
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            <i className="fas fa-share-alt"></i>
                          </button>
                          <button
                            className="text-gray-400 cursor-not-allowed"
                            title="Not yet 
on blockchain"
                            disabled
                          >
                            <i className="fab fa-ethereum"></i>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div
                className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t 
border-gray-200"
              >
                <div className="flex-1 flex justify-between sm:hidden">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border 
border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Previous{' '}
                  </a>
                  <a
                    href="#"
                    className="ml-3 relative inline-flex items-center px-4 py-2 border 
border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    Next{' '}
                  </a>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing <span className="font-medium">1</span> to{' '}
                      <span className="font-medium">3</span> of{' '}
                      <span className="font-medium">8</span> results
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
                        <i className="fas fa-chevron-left"></i>
                      </a>
                      <a
                        href="#"
                        aria-current="page"
                        className="z-10 bg-blue-50 border-blue
500 text-blue-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                      >
                        {' '}
                        1
                      </a>
                      <a
                        href="#"
                        className="bg-white border-gray-300 text-gray-500 
hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                      >
                        {' '}
                        2
                      </a>
                      <a
                        href="#"
                        className="bg-white border-gray-300 text-gray-500 
hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                      >
                        {' '}
                        3
                      </a>
                      <a
                        href="#"
                        className="relative inline-flex items-center px-2 py-2 
rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg
gray-50"
                      >
                        <span className="sr-only">Next</span>
                        <i className="fas fa-chevron-right"></i>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-white shadow rounded-lg overflow-hidden">
              <div
                className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 
to-gray-50"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  Blockchain Verification
                </h3>
                prescription
                <p className="mt-1 text-sm text-gray-500">
                  Verify the authenticity of a{' '}
                </p>
              </div>
              <div className="px-6 py-4">
                <div className="flex items-center">
                  <div
                    className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-100 flex 
items-center justify-center"
                  >
                    <i className="fab fa-ethereum text-purple-600 text-xl"></i>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-md font-medium text-gray-900">
                      Verify on Blockchain
                    </h4>
                    prescription record
                    <p className="text-sm text-gray-500">
                      Enter a transaction hash to verify a{' '}
                    </p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      for="txHash"
                      className="block text-sm font-medium text-gray
700"
                    >
                      Transaction Hash
                    </label>
                    <div className="mt-1 flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="txHash"
                        id="txHash"
                        className="focus:ring
blue-500 focus:border-blue-500 flex-1 block w-full rounded-none rounded-l-md sm:text-sm 
border-gray-300"
                        placeholder="0x4a3b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6"
                      />
                      <button
                        className="inline-flex items-center px-4 py-2 border border
transparent text-sm font-medium rounded-r-md shadow-sm text-white bg-blue-600 hover:bg
blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Verify
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
  );
};

export default Prescriptions;
