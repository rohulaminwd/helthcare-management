import React from 'react';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  return (
    <div className="md:pl-64 flex flex-col flex-1">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* <!-- Header with back button and actions -->  */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <a
                href="#"
                className="mr-4 text-gray-500 hover:text-blockchain-blue"
              >
                <i className="fas fa-arrow-left"></i>
              </a>
              <h1 className="text-2xl font-bold text-gray-900">
                {user?.role === 'doctor' ? 'Doctor Profile' : 'Patient Profile'}
              </h1>
              <span className="ml-3 verify-badge text-sm text-gray-500">
                Blockchain Verified
              </span>
            </div>
            <div className="flex space-x-3">
              <button
                className="inline-flex items-center px-4 py-2 border border-gray-300 
text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 
focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blockchain-blue"
              >
                <i className="fas fa-print mr-2"></i> Print
              </button>
              <button
                className="inline-flex items-center px-4 py-2 border border-transparent 
text-sm font-medium rounded-md shadow-sm text-white bg-blockchain-blue hover:bg
blockchain-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blockchain
blue"
              >
                <i className="fas fa-pencil-alt mr-2"></i> Edit Profile
              </button>
            </div>
          </div>
          {/* <!-- Blockchain status bar -->  */}
          <div
            className="bg-blockchain-light border border-blockchain-blue rounded-lg p-3 
mb-6 flex items-center justify-between"
          >
            <div className="flex items-center">
              <i className="fas fa-link text-blockchain-blue mr-2"></i>
              <span className="text-sm font-medium text-blockchain-dark">
                Record Hash:
              </span>
              <span
                className="text-sm font-mono ml-2 text-gray-700 
truncate"
              >
                0x892f8703e5...4a3c7d2e1f
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font
medium bg-green-100 text-green-800"
              >
                <i className="fas fa-check-circle mr-1"></i> Immutable
              </span>
              <span
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font
medium bg-blue-100 text-blue-800"
              >
                <i className="fas fa-cube mr-1"></i> Block #4,892,371
              </span>
              <button className="text-blockchain-blue hover:text-blockchain-dark">
                <i className="fas fa-external-link-alt"></i>
              </button>
            </div>
          </div>
          {/* <!-- Patient Summary Card -->  */}
          <div
            className="bg-white rounded-lg shadow-md blockchain-card overflow-hidden 
mb-6"
          >
            <div className="px-6 py-4 border-b border-gray-200 flex items-center">
              <div className="relative">
                {/* <img
                  className="h-16 w-16 rounded-full mr-4"
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb
1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=25
 6&q=80"
                  alt="Patient photo"
                /> */}
                <div className="h-16 w-16 rounded-full bg-blue-100 border-2 mr-3 text-blue-900 text-4xl font-bold border-blue-700 flex items-center justify-center">
                  <span className=" uppercase">{user?.name?.slice(0, 1)}</span>
                </div>
                <span
                  className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg
green-400 border-2 border-white"
                ></span>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {user?.name}
                </h2>
                <div className="flex items-center mt-1">
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs 
font-medium bg-blue-100 text-blue-800"
                  >
                    <i className="fas fa-id-card mr-1"></i> ID: MED-10025
                  </span>
                  <span
                    className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full 
text-xs font-medium bg-green-100 text-green-800"
                  >
                    <i className="fas fa-heartbeat mr-1"></i> A+
                  </span>
                  <span className="ml-2 text-sm text-gray-500">
                    <i className="fas fa-birthday-cake mr-1"></i> 38 years
                  </span>
                </div>
              </div>
            </div>
            <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <p className="text-sm font-medium text-gray-500">Last Visit</p>
                <p className="mt-1 text-sm text-gray-900">12 June 2023</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Next Appointment
                </p>
                <p className="mt-1 text-sm text-gray-900">26 June 2023</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Primary Doctor
                </p>
                <p className="mt-1 text-sm text-gray-900">Dr. Sarah Johnson</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Insurance</p>
                <p className="mt-1 text-sm text-gray-900">
                  BlueCross BlueShield
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* <!-- Left Column -->  */}
            <div className="lg:col-span-2 space-y-6">
              {/* <!-- Personal Information Card -->  */}
              <div
                className="bg-white shadow-md blockchain-card overflow-hidden 
sm:rounded-lg"
              >
                <div
                  className="px-4 py-5 sm:px-6 bg-gradient-to-r from-blue-50 to-blue-100 
border-b border-blue-200"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      <i className="fas fa-user-circle mr-2 text-blockchain-blue"></i>
                      Personal Information
                    </h3>
                    <div className="flex items-center">
                      <span
                        className="text-xs font-mono bg-blue-100 text-blue-800 px-2 
py-1 rounded mr-2"
                      >
                        Last updated: Block #4,892,102
                      </span>
                      <button className="text-blockchain-blue hover:text-blockchain-dark">
                        <i className="fas fa-pencil-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Full name
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        John Michael Doe
                      </dd>
                    </div>

                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Date of Birth
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        15 March 1985 (38 years)
                      </dd>
                    </div>

                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Gender
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        Male
                      </dd>
                    </div>

                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Email
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        john.doe@example.com
                      </dd>
                    </div>

                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Phone
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        +1 (555) 123-4567
                      </dd>
                    </div>

                    <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm font-medium text-gray-500">
                        Address
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        123 Main St, Anytown, CA 12345, USA
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* <!-- Medical Information Card -->  */}
              <div
                className="bg-white shadow-md blockchain-card overflow-hidden 
sm:rounded-lg"
              >
                <div
                  className="px-4 py-5 sm:px-6 bg-gradient-to-r from-green-50 to-green
100 border-b border-green-200"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      <i className="fas fa-heartbeat mr-2 text-medical-green"></i>{' '}
                      Medical Information
                    </h3>
                    <div className="flex items-center">
                      <span
                        className="text-xs font-mono bg-green-100 text-green-800 px-2 
py-1 rounded mr-2"
                      >
                        Last updated: Block #4,892,371
                      </span>
                      <button className="text-medical-green hover:text-green-800">
                        <i className="fas fa-pencil-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div
                      className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px
6"
                    >
                      <dt className="text-sm font-medium text-gray-500">
                        Blood Group
                      </dt>
                      <dd
                        className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span
2"
                      >
                        A+ (A Positive)
                      </dd>
                    </div>
                    <div
                      className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px
6"
                    >
                      <dt
                        className="text-sm font-medium text-gray
500"
                      >
                        Height/Weight
                      </dt>
                      <dd
                        className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span
2"
                      >
                        175 cm (5'9") / 72 kg (158 lbs)
                      </dd>
                    </div>
                    <div
                      className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px
6"
                    >
                      <dt className="text-sm font-medium text-gray-500">
                        Allergies
                      </dt>
                      <dd
                        className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span
2"
                      >
                        Penicillin, Peanuts
                      </dd>
                    </div>
                    <div
                      className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px
6"
                    >
                      <dt className="text-sm font-medium text-gray-500">
                        Chronic Conditions
                      </dt>
                      <dd
                        className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span
2"
                      >
                        Hypertension (controlled), Type 2 Diabetes
                      </dd>
                    </div>
                    <div
                      className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px
6"
                    >
                      <dt className="text-sm font-medium text-gray-500">
                        Current Medications
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul className="list-disc pl-5">
                          <li>Metformin 500mg twice daily</li>
                          <li>Lisinopril 10mg daily</li>
                          <li>Atorvastatin 20mg at bedtime</li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            {/* <!-- Right Column -->  */}
            <div className="space-y-6">
              {/* <!-- Emergency Contact Card -->  */}
              <div
                className="bg-white shadow-md blockchain-card overflow-hidden 
sm:rounded-lg"
              >
                <div
                  className="px-4 py-5 sm:px-6 bg-gradient-to-r from-red-50 to-red-100 
border-b border-red-200"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      <i className="fas fa-exclamation-triangle mr-2 text-red-600"></i>
                      Emergency Contact
                    </h3>
                    <div className="flex items-center">
                      <span
                        className="text-xs font-mono bg-red-100 text-red-800 px-2 py-1 
rounded mr-2"
                      >
                        Last updated: Block #4,891,845
                      </span>
                      <button className="text-red-600 hover:text-red-800">
                        <i className="fas fa-pencil-alt"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                  <dl className="sm:divide-y sm:divide-gray-200">
                    <div
                      className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px
6"
                    >
                      <dt className="text-sm font-medium text-gray-500">
                        Name
                      </dt>
                      <dd
                        className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span
2"
                      >
                        Jane Elizabeth Doe
                      </dd>
                    </div>
                    <div
                      className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px
6"
                    >
                      <dt className="text-sm font-medium text-gray-500">
                        Relationship
                      </dt>
                      <dd
                        className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span
2"
                      >
                        Spouse
                      </dd>
                    </div>
                    <div
                      className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px
6"
                    >
                      <dt className="text-sm font-medium text-gray-500">
                        Phone
                      </dt>
                      <dd
                        className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span
2"
                      >
                        +1 (555) 987-6543
                      </dd>
                    </div>
                    <div
                      className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px
6"
                    >
                      <dt className="text-sm font-medium text-gray-500">
                        Address
                      </dt>
                      <dd
                        className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span
2"
                      >
                        Same as patient
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              {/* <!-- Blockchain ID Card -->  */}
              <div
                className="bg-white shadow-md blockchain-card overflow-hidden 
sm:rounded-lg"
              >
                <div
                  className="px-4 py-5 sm:px-6 bg-gradient-to-r from-purple-50 to-purple
100 border-b border-purple-200"
                >
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    <i className="fas fa-fingerprint mr-2 text-purple-600"></i>{' '}
                    Blockchain Identity
                  </h3>
                </div>
                <div className="px-4 py-5 sm:p-6 text-center">
                  <div
                    className="mx-auto w-48 h-48 bg-gray-50 flex items-center justify
center rounded-md border-2 border-dashed border-purple-300 p-4 relative"
                  >
                    {/* <!-- QR Code Placeholder with blockchain theme -->  */}
                    <div className="relative">
                      <svg
                        className="h-32 w-32 text-purple-400"
                        fill="none"
                        viewBox="0 0 
24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke
                          width="1.5"
                          d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 
12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 
1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1
1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white p-1 rounded">
                          <span
                            className="text-xs font-bold text-blockchain
blue"
                          >
                            MED
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 text-purple-500 text-xs">
                      <i className="fas fa-link"></i>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p
                      className="text-sm font-mono text-gray-700 break
all"
                    >
                      0x892f8703e5...4a3c7d2e1f
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Unique blockchain identifier
                    </p>
                  </div>
                  <div className="mt-4 flex justify-center space-x-3">
                    <button
                      className="inline-flex items-center px-4 py-2 border border-gray
300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 
focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      <i className="fas fa-download mr-2"></i> Download
                    </button>
                    <button
                      className="inline-flex items-center px-4 py-2 border border
transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg
purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      <i className="fas fa-share-alt mr-2"></i> Share
                    </button>
                  </div>
                  <p className="mt-3 text-xs text-gray-500">
                    Scan this QR code to access medical profile in emergencies
                  </p>
                </div>
              </div>

              {/* <!-- Blockchain Activity Card -->  */}
              <div
                className="bg-white shadow-md blockchain-card overflow-hidden 
sm:rounded-lg"
              >
                <div
                  className="px-4 py-5 sm:px-6 bg-gradient-to-r from-amber-50 to-amber
100 border-b border-amber-200"
                >
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    <i className="fas fa-project-diagram mr-2 text-amber-600"></i>
                    Blockchain Activity
                  </h3>
                </div>
                <div className="px-4 py-4">
                  <ul className="divide-y divide-gray-200">
                    <li className="py-3">
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0 text-blockchain-blue">
                          <i className="fas fa-cube"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            Medical record updated
                          </p>
                          <p className="text-sm text-gray-500">
                            Added new prescription
                          </p>
                          <div className="flex items-center mt-1">
                            <p className="text-xs text-gray-400">
                              Block #4,892,371
                            </p>
                            <p className="text-xs text-gray-400 ml-2">
                              12 Jun 2023, 10:30 AM
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="py-3">
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0 text-green-500">
                          <i className="fas fa-calendar-check"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            Appointment recorded
                          </p>
                          <p className="text-sm text-gray-500">
                            Follow-up visit
                          </p>
                          <div className="flex items-center mt-1">
                            <p className="text-xs text-gray-400">
                              Block #4,892,102
                            </p>
                            <p className="text-xs text-gray-400 ml-2">
                              12 Jun 2023, 9:00 AM
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="py-3">
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0 text-purple-500">
                          <i className="fas fa-vial"></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            Lab results added
                          </p>
                          <p className="text-sm text-gray-500">HbA1c: 6.2%</p>
                          <div className="flex items-center mt-1">
                            <p className="text-xs text-gray-400">
                              Block #4,891,845
                            </p>
                            <p className="text-xs text-gray-400 ml-2">
                              5 Jun 2023, 2:15 PM
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="mt-3 text-center">
                    <a
                      href="#"
                      className="text-sm font-medium text-blockchain-blue 
hover:text-blockchain-dark"
                    >
                      View all blockchain activity{' '}
                      <i
                        className="fas fa-arrow-right ml
1"
                      ></i>
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

export default Profile;
