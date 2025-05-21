function PatientDashboard() {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">
            Total Treatments
          </h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">24</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Last Doctor</h3>
          <p className="text-xl font-medium text-gray-900 mt-2">
            Dr. Sarah Smith
          </p>
          <p className="text-sm text-gray-500">Cardiologist</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Last Report</h3>
          <p className="text-xl font-medium text-gray-900 mt-2">Blood Test</p>
          <p className="text-sm text-gray-500">March 15, 2024</p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          View Records
        </button>
        <button className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Grant Access
        </button>
        <button className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Upload File
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Recent Notifications
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-800">Dr. Rahim accessed your report</p>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-800">
              New prescription added to your records
            </p>
            <p className="text-sm text-gray-500">1 day ago</p>
          </div>
        </div>
      </div>
    </div>
  );
}
