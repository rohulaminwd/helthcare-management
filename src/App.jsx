import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import DashboardHome from './pages/DashboardHome';
import ProtectedRoute from './utils/ProtectedRoute';
import Profile from './pages/Profile';
import Notifications from './pages/Notifications';
import Records from './pages/Records';
import Prescriptions from './pages/Prescriptions';
import UploadReport from './pages/UploadReport';
import Management from './pages/Management';
import ActivityLog from './pages/ActivityLog';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardHome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="notification" element={<Notifications />} />
            <Route path="records" element={<Records />} />
            <Route path="prescriptions" element={<Prescriptions />} />
            <Route path="upload-report" element={<UploadReport />} />
            <Route path="management" element={<Management />} />
            <Route path="activity-log" element={<ActivityLog />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
