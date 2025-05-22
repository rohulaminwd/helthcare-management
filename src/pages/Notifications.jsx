import React from 'react';

const Notifications = () => {
  return (
    <div className="md:pl-64 flex flex-col flex-1">
      <div className="flex-1">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Notifications
                </h1>
                <p className="mt-1 text-sm text-gray-500">
                  View all your blockchain-verified health activity
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex space-x-3">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-healthblue"
                >
                  <svg
                    className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                  Filter
                </button>
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <svg
                    className="-ml-1 mr-2 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Mark all as read
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg divide-y divide-gray-200">
              {/* New Notification */}
              <div className="px-6 py-4 bg-blue-50 hover:bg-blue-100 transition-colors duration-150 cursor-pointer">
                <NotificationItem
                  icon={<CheckIcon className="h-6 w-6 text-blue-600" />}
                  bgColor="bg-blue-100"
                  title={
                    <>
                      <span className="text-blue-600">Dr. Sarah Smith</span>{' '}
                      accessed your blood test results
                    </>
                  }
                  description="Results from your recent CBC panel were reviewed by your primary care physician."
                  time="2 hours ago"
                  transactionId="0x8a2...4d7"
                  isNew
                />
              </div>

              {/* Regular Notifications */}
              <div className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150 cursor-pointer">
                <NotificationItem
                  icon={<PrescriptionIcon className="h-6 w-6 text-green-600" />}
                  bgColor="bg-green-100"
                  title={
                    <>
                      New prescription from{' '}
                      <span className="text-blue-600">Dr. Michael Johnson</span>
                    </>
                  }
                  description="Amoxicillin 500mg capsules - Take one capsule every 8 hours for 7 days."
                  time="1 day ago"
                  transactionId="0x3f9...1e2"
                />
              </div>

              {/* Add more notification items here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable NotificationItem component
const NotificationItem = ({
  icon,
  bgColor,
  title,
  description,
  time,
  transactionId,
  isNew,
}) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 pt-1">
      <div
        className={`h-10 w-10 rounded-full ${bgColor} flex items-center justify-center`}
      >
        {icon}
      </div>
    </div>
    <div className="ml-4 flex-1">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        {isNew && (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            New
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
      <div className="mt-2 flex items-center text-xs text-gray-500">
        <CalendarIcon className="flex-shrink-0 mr-1.5 h-4 w-4" />
        <span>
          {time}
          {transactionId && ` • Transaction ID: ${transactionId}`}
        </span>
      </div>
    </div>
  </div>
);

// Icon components
const CheckIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const CalendarIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const PrescriptionIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

export default Notifications;
