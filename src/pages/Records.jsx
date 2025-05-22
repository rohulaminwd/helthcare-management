import React from 'react';

const Records = () => {
  return (
    <div className="md:pl-64 flex flex-col flex-1">
      <main className="flex-1">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-semibold text-gray-900">
                Medical Records
              </h1>
              <div className="flex space-x-3">
                <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                  <svg
                    className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 
24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  Add Record
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                  <svg
                    className="-ml-1 mr-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Export All
                </button>
              </div>
            </div>
            <p className="mt-2 text-sm text-gray-700">
              All your medical records stored securely on the blockchain. Each
              record is cryptographically signed and immutable.
            </p>
          </div>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
            {/* <!-- Blockchain Verification Badge --> */}
            <div className="mb-6 p-4 bg-green-50 rounded-lg flex items-start">
              <svg
                className="h-5 w-5 text-green-500 mt-0.5"
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
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">
                  Blockchain Verified
                </h3>
                <div className="mt-2 text-sm text-green-700">
                  <p>
                    All records below are stored on the Ethereum blockchain.
                    Transaction hashes are available for each record to verify
                    authenticity.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Timeline --> */}
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <ul className="divide-y divide-gray-200">
                {/* <!-- Record Item --> */}
                <li>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">
                          <svg
                            className="h-6 w-6 text-blockchain-blue"
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
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Annual Physical Examination
                          </div>
                          <div className="text-sm text-gray-500">
                            City General Hospital • Dr. Sarah Smith
                          </div>
                        </div>
                      </div>
                      <div className="ml-2 flex-shrink-0 flex">
                        <div className="mr-4">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Verified
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">15 Jan 2023</p>
                          <button className="text-sm font-medium text-primary-600 hover:text-primary-500">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-between">
                      <div className="flex">
                        <div className="mr-4 flex items-center text-sm text-gray-500">
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke
                              width="2"
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758
4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                          0x4a7b...2f1c
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
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
                          Block #15432876
                        </div>
                      </div>
                      <button className="text-sm font-medium text-gray-500 hover:text-gray 700">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke
                            width="2"
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 
110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>

                {/* <!-- Record Item --> */}
                <li>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-green-100 p-2 rounded-lg">
                          <svg
                            className="h-6 w-6 text-blockchain-green"
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
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Blood Test Results
                          </div>
                          <div className="text-sm text-gray-500">
                            MedLab Diagnostics • Dr. Michael Johnson
                          </div>
                        </div>
                      </div>
                      <div className="ml-2 flex-shrink-0 flex">
                        <div className="mr-4">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Verified
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">10 Dec 2022</p>
                          <button className="text-sm font-medium text-primary-600 hover:text-primary-500">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-between">
                      <div className="flex">
                        <div className="mr-4 flex items-center text-sm text-gray-500">
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke
                              width="2"
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758
4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                          0x3f9c...7e2d
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
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
                          Block #15219843
                        </div>
                      </div>
                      <button className="text-sm font-medium text-gray-500 hover:text-gray 700">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke
                            width="2"
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 
110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>

                {/* <!-- Record Item --> */}
                <li>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-yellow-100 p-2 rounded-lg">
                          <svg
                            className="h-6 w-6 text-yellow-500"
                            fill="none"
                            viewBox="0 
0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke
                              width="2"
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77
1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Emergency Visit
                          </div>
                          <div className="text-sm text-gray-500">
                            City General Hospital • Dr. Lisa Wong
                          </div>
                        </div>
                      </div>
                      <div className="ml-2 flex-shrink-0 flex">
                        <div className="mr-4">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Verified
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">5 Nov 2022</p>
                          <button className="text-sm font-medium text-primary-600 hover:text-primary-500">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-between">
                      <div className="flex">
                        <div className="mr-4 flex items-center text-sm text-gray-500">
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke
                              width="2"
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758
4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                          0x5d2e...9f0a
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
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
                          Block #15087654
                        </div>
                      </div>
                      <button className="text-sm font-medium text-gray-500 hover:text-gray 700">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke
                            width="2"
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 
110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>

                {/* <!-- Record Item --> */}
                <li>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 bg-purple-100 p-2 rounded-lg">
                          <svg
                            className="h-6 w-6 text-blockchain-purple"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke
                              width="2"
                              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 
2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                            />
                          </svg>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Routine Checkup
                          </div>
                          <div className="text-sm text-gray-500">
                            Dental Care Center • Dr. Robert Chen
                          </div>
                        </div>
                      </div>
                      <div className="ml-2 flex-shrink-0 flex">
                        <div className="mr-4">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            Verified
                          </span>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-500">15 Aug 2022</p>
                          <button className="text-sm font-medium text-primary-600 hover:text-primary-500">
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex justify-between">
                      <div className="flex">
                        <div className="mr-4 flex items-center text-sm text-gray-500">
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke
                              width="2"
                              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758
4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                            />
                          </svg>
                          0x8e1f...4c3d
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <svg
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
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
                          Block #14876532
                        </div>
                      </div>
                      <button className="text-sm font-medium text-gray-500 hover:text-gray 700">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke
                            width="2"
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 
110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- Empty State (for when no records exist) --> */}
            {/* <!-- <div className="text-center bg-white shadow overflow-hidden sm:rounded-lg py
16"> 
<svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 
24" stroke="currentColor"> 
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 
5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /> 
</svg> 
<h3 className="mt-2 text-sm font-medium text-gray-900">No medical 
records</h3> 
<p className="mt-1 text-sm text-gray-500">Get started by adding your first medical 
record to the blockchain.</p> 
<div className="mt-6"> 
<button type="button" className="inline-flex items-center px-4 py-2 border 
border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary-600 
hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
500"> 
<svg className="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" 
stroke="currentColor"> 
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
d="M12 4v16m8-8H4" /> 
</svg> 
Add Record 
</button> 
</div> 
</div> --> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Records;
