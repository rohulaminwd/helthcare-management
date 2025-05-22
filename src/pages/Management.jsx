import React from 'react';

const Management = () => {
  return (
    <div className="md:pl-64 flex flex-col flex-1">
      <div className="flex-1">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Access Management
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  Control who can access your health records on the blockchain
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font
medium bg-green-100 text-green-800"
                >
                  <svg
                    className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 8 8"
                  >
                    <circle cx="4" cy="4" r="3" />
                  </svg>
                  Blockchain Connected
                </span>
                <button
                  className="inline-flex items-center px-3 py-1.5 border border-gray-300 
shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray
50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <svg
                    className="-ml-0.5 mr-1.5 h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  New Smart Contract
                </button>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
            {/* <!-- Blockchain Status Card -->  */}
            <div
              className="bg-gradient-to-r from-primary/95 to-primary/80 rounded-lg 
shadow overflow-hidden mb-8"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-10 w-10 text-white"
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
                      <dt className="text-sm font-medium text-white truncate">
                        Current Blockchain
                      </dt>
                      <dd className="flex items-baseline">
                        <div className="text-xl font-semibold text-white">
                          Ethereum HealthNet
                        </div>
                        <div
                          className="ml-2 flex items-baseline text-sm font-semibold text
primary-200"
                        >
                          <span className="sr-only">Transaction Count</span>
                          12,489 TX
                        </div>
                      </dd>
                    </dl>
                  </div>
                  <div className="ml-5">
                    <div className="text-sm font-medium text-primary-100">
                      Your Health Wallet
                    </div>
                    <div
                      className="text-sm font-mono text-primary-200 
truncate"
                    >
                      0x7f...3a4b
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Current Access -->  */}
            <div className="mt-8">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">
                  Granted Access
                </h2>
                <div className="flex items-center text-sm text-gray-500">
                  <svg
                    className="h-4 w-4 mr-1"
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
                  Managed by smart contracts
                </div>
              </div>
              <div
                className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg divide-y 
divide-gray-200"
              >
                <div
                  className="px-4 py-5 sm:px-6 bg-gray-50 flex justify-between items
center"
                >
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Authorized Healthcare Providers
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      These doctors and hospitals have blockchain-verified
                      access to your records
                    </p>
                  </div>
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font
medium bg-green-100 text-green-800"
                  >
                    2 Active Contracts
                  </span>
                </div>
                {/* <!-- Access Item 1 -->  */}
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start">
                      <div
                        className="flex-shrink-0 h-12 w-12 rounded-lg bg-primary-100 flex 
items-center justify-center"
                      >
                        <svg
                          className="h-6 w-6 text-primary-600"
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
                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 
3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          Dr. Sarah Smith
                        </div>
                        Hospital
                      </div>
                      <div className="text-sm text-gray-500">
                        Cardiologist • City General
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <svg
                            className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400"
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
                          Contract ID: 0x8d...7f2a
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 flex flex-col items-end">
                      <div className="text-xs font-medium text-gray-500 mb-2">
                        Expires: 15 Jul 2023
                      </div>
                      <div className="flex space-x-2">
                        <button
                          type="button"
                          className="inline-flex items-center px-3 py-1.5 
border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 
bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring
primary-500"
                        >
                          Details
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center px-3 py-1.5 
border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 
hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          Revoke
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Access Item 2 -->  */}
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start">
                      <div
                        className="flex-shrink-0 h-12 w-12 rounded-lg bg-purple-100 flex 
items-center justify-center"
                      >
                        <svg
                          className="h-6 w-6 text-purple-600"
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
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 
7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          MedLab Diagnostics
                        </div>
                        <div className="text-sm text-gray-500">
                          Diagnostic Center • Network Access
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                          <svg
                            className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400"
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
                          Contract ID: 0x4e...9c1d
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 flex flex-col items-end">
                      <div className="text-xs font-medium text-gray-500 mb-2">
                        Expires: Never
                      </div>
                      <div className="flex space-x-2">
                        <button
                          type="button"
                          className="inline-flex items-center px-3 py-1.5 
border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 
bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring
primary-500"
                        >
                          Details
                        </button>
                        <button
                          type="button"
                          className="inline-flex items-center px-3 py-1.5 
border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-red-600 
hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                          Revoke
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Grant New Access -->  */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900">
                Grant New Access
              </h2>
              <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 bg-gray-50">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Create Access Smart Contract
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Set permissions that will be enforced on the blockchain
                  </p>
                </div>
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="space-y-6">
                    {/* <!-- Provider Selection -->  */}
                    <div>
                      <label
                        for="provider"
                        className="block text-sm font-medium text-gray
700"
                      >
                        Healthcare Provider
                      </label>
                      <div className="mt-1 relative">
                        <select
                          id="provider"
                          name="provider"
                          className="block w-full pl-3 
pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border
primary-500 sm:text-sm rounded-md"
                        >
                          <option selected disabled>
                            Select a provider
                          </option>
                          <option>Dr. Sarah Smith - Cardiology</option>
                          <option>Dr. Michael Johnson - Diagnostics</option>
                          <option>City General Hospital</option>
                          <option>MedLab Diagnostics</option>
                          <option>Other (enter address)</option>
                        </select>
                      </div>
                    </div>

                    {/* <!-- Blockchain Address (hidden by default) -->  */}
                    <div id="address-field" className="hidden">
                      <label
                        for="address"
                        className="block text-sm font-medium text-gray
700"
                      >
                        Provider Blockchain Address
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="text"
                          name="address"
                          id="address"
                          className="focus:ring-primary-500 focus:border-primary-500 block w-full pr-10 sm:text-sm border
gray-300 rounded-md font-mono"
                          placeholder="0x..."
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                          <button
                            type="button"
                            className="text-primary-600 hover:text
primary-800 text-sm font-medium"
                          >
                            Verify
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Contract Parameters -->  */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label
                          for="expiry"
                          className="block text-sm font-medium text-gray
700"
                        >
                          Access Duration
                        </label>
                        <select
                          id="expiry"
                          name="expiry"
                          className="mt-1 block w-full pl-3 
pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border
primary-500 sm:text-sm rounded-md"
                        >
                          <option>1 month</option>
                          <option>3 months</option>
                          <option>6 months</option>
                          <option>1 year</option>
                          <option selected>No expiry</option>
                        </select>
                      </div>
                      <div>
                        <label
                          for="gas"
                          className="block text-sm font-medium text-gray
700"
                        >
                          Transaction Fee
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div
                            className="absolute inset-y-0 left-0 pl-3 flex items-center 
pointer-events-none"
                          >
                            <span className="text-gray-500 sm:text-sm">Ξ</span>
                          </div>
                          <input
                            type="text"
                            name="gas"
                            id="gas"
                            className="focus:ring
primary-500 focus:border-primary-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 
rounded-md"
                            value="0.0021"
                            disabled
                          />
                          <div
                            className="absolute inset-y-0 right-0 pr-3 flex items-center 
pointer-events-none"
                          >
                            <span
                              className="text-gray-500 sm:text-sm"
                              id="price
currency"
                            >
                              (~$4.20)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Permissions -->  */}
                    <div>
                      <label
                        className="block text-sm font-medium text-gray
700"
                      >
                        Permissions
                      </label>
                      <p className="mt-1 text-sm text-gray-500">
                        These will be encoded in the smart contract
                      </p>
                      <fieldset className="mt-4">
                        <legend className="sr-only">Permissions</legend>
                        <div className="space-y-4">
                          <div className="relative flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="view"
                                name="permissions"
                                type="checkbox"
                                checked
                                className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                for="view"
                                className="font-medium text-gray
700"
                              >
                                View Records
                              </label>
                              <p className="text-gray-500">
                                Allow viewing of medical records
                              </p>
                            </div>
                          </div>
                          <div className="relative flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="add"
                                name="permissions"
                                type="checkbox"
                                className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                for="add"
                                className="font-medium text-gray-700"
                              >
                                Add Records
                              </label>
                              <p className="text-gray-500">
                                Allow adding new medical data
                              </p>
                            </div>
                          </div>
                          <div className="relative flex items-start">
                            <div className="flex items-center h-5">
                              <input
                                id="share"
                                name="permissions"
                                type="checkbox"
                                className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                              />
                            </div>
                            <div className="ml-3 text-sm">
                              <label
                                for="share"
                                className="font-medium text-gray
700"
                              >
                                Share with Others
                              </label>
                              <p className="text-gray-500">
                                Allow provider to delegate access
                              </p>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>

                    {/* <!-- Smart Contract Preview -->  */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center">
                        <h4 className="text-sm font-medium text-gray-700">
                          Smart Contract Preview
                        </h4>
                        <button
                          type="button"
                          className="text-sm text-primary-600 hover:text
primary-800"
                        >
                          View Full Code
                        </button>
                      </div>
                      <div className="mt-2 bg-gray-800 rounded-lg overflow-hidden">
                        <div className="px-4 py-3 bg-gray-900 flex items-center">
                          <div className="flex space-x-1.5">
                            <div className="h-3 w-3 rounded-full bg-red-500"></div>
                            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                            <div className="h-3 w-3 rounded-full bg-green-500"></div>
                          </div>
                          <div
                            className="ml-4 text-xs text-gray
400"
                          >
                            HealthAccess.sol
                          </div>
                        </div>
                        <div
                          className="px-4 py-3 font-mono text-sm text-gray-300 overflow
x-auto"
                        >
                          <div className="text-green-400">
                            contract HealthAccess{' '}
                          </div>
                          <div className="ml-4 text-blue-400">
                            address{' '}
                            <span
                              className="text
gray-300"
                            >
                              public
                            </span>{' '}
                            patient ={' '}
                            <span className="text-yellow-300">0x7f...3a4b</span>
                            ;
                          </div>
                          <div className="ml-4 text-blue-400">
                            address{' '}
                            <span
                              className="text
gray-300"
                            >
                              public
                            </span>{' '}
                            provider ={' '}
                            <span className="text-yellow-300">0x00...0000</span>
                            ;
                          </div>
                          <div className="ml-4 text-blue-400">
                            uint256{' '}
                            <span
                              className="text
gray-300"
                            >
                              public
                            </span>{' '}
                            expiresAt ={' '}
                            <span className="text-yellow-300">0</span>;
                          </div>
                          <div className="ml-4 text-blue-400">
                            bool{' '}
                            <span
                              className="text-gray
300"
                            >
                              public
                            </span>{' '}
                            canView ={' '}
                            <span className="text-yellow-300">true</span>;
                          </div>
                          <div className="ml-4 text-blue-400">
                            bool{' '}
                            <span
                              className="text-gray
300"
                            >
                              public
                            </span>{' '}
                            canAdd ={' '}
                            <span className="text-yellow-300">false</span>;
                          </div>
                          <div className="text-green-400"></div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- Action Buttons -->  */}
                    <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
                      <button
                        type="button"
                        className="px-4 py-2 border border-gray-300 
shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 
focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 
border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary
600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring
primary-500"
                      >
                        <svg
                          className="-ml-1 mr-2 h-4 w-4"
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
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        Deploy Contract
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Access History -->  */}
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-gray-900">
                Access History
              </h2>
              <div className="mt-4 bg-white shadow overflow-hidden sm:rounded-lg">
                <div
                  className="px-4 py-5 sm:px-6 bg-gray-50 flex justify-between items
center"
                >
                  Access Log events
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Blockchain{' '}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Immutable record of all access{' '}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center px-3 py-1.5 border 
border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white 
hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Export as CSV
                  </button>
                </div>
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div
                    className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 
rounded-lg"
                  >
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="py-3.5 pl-4 pr-3 text-left text-sm font
semibold text-gray-900 sm:pl-6"
                          >
                            Date
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font
semibold text-gray-900"
                          >
                            Accessed By
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font
semibold text-gray-900"
                          >
                            Record Type
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font
semibold text-gray-900"
                          >
                            Action
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3.5 text-left text-sm font
semibold text-gray-900"
                          >
                            TX Hash
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td
                            className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font
medium text-gray-900 sm:pl-6"
                          >
                            <div>15 Jan 2023</div>
                            <div className="text-gray-500">10:42:23</div>
                          </td>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray
500"
                          >
                            <div>Dr. Sarah Smith</div>
                            <div
                              className="text-gray-400 text-xs font
mono"
                            >
                              0x3d...7f2a
                            </div>
                          </td>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray
500"
                          >
                            Blood Test Results
                          </td>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray
500"
                          >
                            <span
                              className="inline-flex items-center px-2 py-0.5 rounded 
text-xs font-medium bg-blue-100 text-blue-800"
                            >
                              Viewed
                            </span>
                          </td>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm font-mono 
text-gray-500"
                          >
                            <a
                              href="#"
                              className="text-primary-600 hover:text-primary
900"
                            >
                              0x8a...4c2d
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font
medium text-gray-900 sm:pl-6"
                          >
                            <div>10 Jan 2023</div>
                            <div className="text-gray-500">14:15:07</div>
                          </td>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray
500"
                          >
                            <div>City General Hospital</div>
                            <div
                              className="text-gray-400 text-xs font
mono"
                            >
                              0x7e...9b3c
                            </div>
                          </td>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray
500"
                          >
                            X-Ray Images
                          </td>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray
500"
                          >
                            <span
                              className="inline-flex items-center px-2 py-0.5 rounded 
text-xs font-medium bg-purple-100 text-purple-800"
                            >
                              Downloaded
                            </span>
                          </td>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm font-mono 
text-gray-500"
                          >
                            <a
                              href="#"
                              className="text-primary-600 hover:text-primary
900"
                            >
                              0x5f...1e9a
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font
medium text-gray-900 sm:pl-6"
                          >
                            <div>5 Jan 2023</div>
                            <div className="text-gray-500">09:30:45</div>
                          </td>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray
500"
                          >
                            <div>Dr. Michael Johnson</div>
                            <div
                              className="text-gray-400 text-xs font
mono"
                            >
                              0x2c...5d8e
                            </div>
                          </td>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray
500"
                          >
                            Prescription
                          </td>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm text-gray
500"
                          >
                            <span
                              className="inline-flex items-center px-2 py-0.5 rounded 
text-xs font-medium bg-green-100 text-green-800"
                            >
                              Added
                            </span>
                          </td>
                          <td
                            className="whitespace-nowrap px-3 py-4 text-sm font-mono 
text-gray-500"
                          >
                            <a
                              href="#"
                              className="text-primary-600 hover:text-primary
900"
                            >
                              0x3b...7f0c
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                      Showing <span className="font-medium">1</span> to{' '}
                      <span className="font-medium">3</span> of{' '}
                      <span className="font-medium">24</span> transactions
                    </div>
                    <div className="flex space-x-2">
                      <button
                        className="relative inline-flex items-center px-3 py-1.5 border 
border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Previous
                      </button>
                      <button
                        className="relative inline-flex items-center px-3 py-1.5 border 
border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        Next
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

export default Management;
