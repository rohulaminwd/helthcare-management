import React from 'react';

const UploadReport = () => {
  return (
    <div className="md:pl-64 flex flex-col flex-1">
      <main className="flex-1">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">
                Upload Medical Report
              </h1>
              <div className="flex items-center space-x-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font medium bg-primary-100 text-primary-800">
                  <svg
                    className="-ml-1 mr-1.5 h-2 w-2 text-primary-400"
                    fill="currentColor"
                    viewBox="0 0 8 8"
                  >
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  Ethereum Network
                </span>
                <button
                  type="button"
                  className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <svg
                    className="-ml-1 mr-1.5 h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Help
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 mt-6">
            {/* <!-- Upload Card --> */}
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 
24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke
                        width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l
3 3m3-3v12"
                      />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Secure Medical Report Upload
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Your documents will be encrypted and stored on the
                      blockchain for maximum security.
                    </p>
                  </div>
                </div>

                <form className="mt-8 space-y-6">
                  <div className="space-y-6">
                    {/* <!-- Report Information Section --> */}
                    <div>
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Report Information
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Provide details about your medical report for better
                        organization.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label
                          for="report-type"
                          className="block text-sm font-medium text gray-700"
                        >
                          Report Type
                        </label>
                        <select
                          id="report-type"
                          name="report-type"
                          className="mt-1 block w full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md"
                        >
                          <option>Select report type</option>
                          <option>Blood Test</option>
                          <option>X-Ray</option>
                          <option>MRI Scan</option>
                          <option>CT Scan</option>
                          <option>Ultrasound</option>
                          <option>Doctor's Note</option>
                          <option>Prescription</option>
                          <option>Vaccination Record</option>
                          <option>Other</option>
                        </select>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          for="date"
                          className="block text-sm font-medium text-gray 700"
                        >
                          Report Date
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <input
                            type="date"
                            name="date"
                            id="date"
                            className="focus:ring primary-500 focus:border-primary-500 block w-full pl-3 pr-10 py-2 sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-6">
                        <label
                          for="hospital"
                          className="block text-sm font-medium text-gray 700"
                        >
                          Hospital/Clinic Name
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <input
                            type="text"
                            name="hospital"
                            id="hospital"
                            className="focus:ring-primary-500 focus:border-primary-500 block w-full pl-3 pr-10 py-2 sm:text sm border-gray-300 rounded-md"
                            placeholder="e.g. City General Hospital"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-6">
                        <label
                          for="description"
                          className="block text-sm font-medium text gray-700"
                        >
                          Description
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="description"
                            name="description"
                            rows="3"
                            className="shadow-sm focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            placeholder="Brief description of the report 
contents"
                          ></textarea>
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          This helps you and healthcare providers understand the
                          context of the report.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- File Upload Section --> */}
                  <div className="pt-8">
                    <div>
                      <h3 className="text-lg font-medium leading-6 text-gray-900">
                        Upload File
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Supported formats: PDF, JPG, PNG, DOCX (Max 25MB)
                      </p>
                    </div>
                    <div className="mt-6">
                      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border gray-300 border-dashed rounded-md transition duration-150 ease-in-out hover:border-primary 500 hover:bg-primary-50">
                        <div className="space-y-1 text-center">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 
01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 
0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              stroke-width="2"
                              stroke
                              linecap="round"
                              stroke-linejoin="round"
                            />
                          </svg>
                          <div className="flex text-sm text-gray-600 justify-center">
                            <label
                              for="file-upload"
                              className="relative cursor-pointer bg white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                            >
                              <span>Upload a file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                className="sr-only"
                                accept=".pdf,.jpg,.jpeg,.png,.docx"
                              />
                            </label>
                            <p className="pl-1">or drag and drop</p>
                          </div>
                          <p className="text-xs text-gray-500">
                            PDF, JPG, PNG, DOCX up to 25MB
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Blockchain Verification Section --> */}
                  <div className="pt-8">
                    <div>
                      <h3 className="text-lg font-medium leading-6 text-gray 900">
                        Blockchain Verification
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        Your file will be hashed and the fingerprint stored
                        immutably on the blockchain.
                      </p>
                    </div>
                    <div className="mt-6">
                      <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <svg
                              className="h-5 w-5 text-primary-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M11.3 1.046A1 1 0 0112 
2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                clip-rule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="ml-3">
                            <h3 className="text-sm font-medium text-gray-800">
                              How Blockchain Verification Works
                            </h3>
                            <div className="mt-2 text-sm text-gray-700 space-y-2">
                              <p>
                                1. Your file is encrypted locally before upload
                              </p>
                              <p>
                                2. A SHA-256 hash (digital fingerprint) is
                                generated
                              </p>
                              <p>
                                3. The hash is stored on the Ethereum blockchain
                              </p>
                              <p>
                                4. You can always verify the document's
                                authenticity
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="flex justify-end space-x-3">
                      <button
                        type="button"
                        className="bg-white py-2 px-4 border border gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary 600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring primary-500"
                      >
                        <svg
                          className="-ml-1 mr-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke
                            width="2"
                            d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 
4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002
2v-2"
                          />
                        </svg>
                        Upload & Store Securely
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* <!-- Previous Uploads Section --> */}
            <div className="mt-8 bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Previously Uploaded Reports
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Your medical reports stored on HealthChain.
                </p>
              </div>
              <div className="bg-white px-6 py-4">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Type
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Hospital
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Blockchain
                        </th>
                        <th scope="col" className="relative px-6 py-3">
                          <span className="sr-only">View</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">
                            15 Jan 2023
                          </div>
                          <div className="text-sm text-gray-500">10:30 AM</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 flex items-center justify center rounded-md bg-blue-100 text-blue-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                Blood Test
                              </div>
                              <div className="text-sm text-gray-500">
                                Complete Blood Count
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            City General Hospital
                          </div>
                          <div className="text-sm text-gray-500">Dr. Smith</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Verified
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            href="#"
                            className="text-primary-600 hover:text-primary-900 flex items-center"
                          >
                            <svg
                              className="h-4 w-4 mr-1"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 
01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 
0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>
                            View Tx
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font medium">
                          <a
                            href="#"
                            className="text-primary-600 hover:text-primary 900"
                          >
                            View
                          </a>
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
                            <div className="flex-shrink-0 h-10 w-10 flex items-center justify center rounded-md bg-purple-100 text-purple-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 
13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 
011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                                />
                              </svg>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                X Ray
                              </div>
                              <div className="text-sm text-gray-500">
                                Chest X-Ray
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            MedLab Diagnostics
                          </div>
                          <div className="text-sm text-gray-500">
                            Dr. Johnson
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Verified
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a
                            href="#"
                            className="text-primary-600 hover:text-primary-900 flex items-center"
                          >
                            <svg
                              className="h-4 w-4 mr-1"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 
01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 
0-1.042-.133-2.052-.382-3.016z"
                              />
                            </svg>
                            View Tx
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font medium">
                          <a
                            href="#"
                            className="text-primary-600 hover:text-primary 900"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Showing <span className="font-medium">1</span> to
                    <span className="font medium">2</span> of
                    <span className="font-medium">2</span> results
                  </div>
                  <div className="flex space-x-2">
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray 50 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray 50"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* <!-- Footer --> */}
      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:order-2 space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0
.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 
8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 
4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 
0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 
1.84"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 
2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369
1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 
1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555
1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 
1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747
1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 
4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 
10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; 2023 HealthChain. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UploadReport;
