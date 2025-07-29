import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getUsers, addItem, updateItem } from '../utils/dataService';

function Login() {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('patient'); // Default role
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login Logic
      try {
        const users = await getUsers();
        const user = users.find(
          (u) => u.email === email && u.password === password
        );

        if (user) {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('currentUser', JSON.stringify(user));
          toast.success('Login successful!');
          navigate('/dashboard');
        } else {
          toast.error('Invalid credentials!');
        }
      } catch (error) {
        console.error('Login error:', error);
        toast.error('Login failed. Please try again.');
      }
    } else {
      // Signup Logic
      if (password !== confirmPassword) {
        toast.error('Passwords do not match!');
        return;
      }

      try {
        const users = await getUsers();

        // Check if user already exists
        if (users.some((user) => user.email === email)) {
          toast.warn('User already exists with this email!');
          return;
        }

        // Create new user with proper ID format
        const userId = role === 'doctor' ? `DR-${Date.now()}` : `PT-${Date.now()}`;
        const newUser = {
          id: userId,
          name,
          email,
          password,
          role,
          bloodType: role === 'patient' ? 'O+' : null,
          hospital: role === 'doctor' ? 'City General Hospital' : null,
          specialty: role === 'doctor' ? 'General Medicine' : null,
          patients: role === 'doctor' ? [] : null,
        };

        // Save to localforage
        await addItem('users', newUser);
        
        // If this is a new patient, assign them to an available doctor
        if (role === 'patient') {
          const allUsers = await getUsers();
          const availableDoctors = allUsers.filter(user => user.role === 'doctor');
          
          if (availableDoctors.length > 0) {
            // Assign to the first available doctor
            const doctor = availableDoctors[0];
            const currentPatients = doctor.patients || [];
            const updatedPatients = [...currentPatients, userId];
            await updateItem('users', doctor.id, { patients: updatedPatients });
          }
        }
        
        toast.success('Signup successful! Please login.');
        setIsLogin(true);
        resetForm();
      } catch (error) {
        console.error('Signup error:', error);
        toast.error('Signup failed. Please try again.');
      }
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setName('');
    setConfirmPassword('');
    setRole('patient');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <i className="fas fa-heartbeat text-blue-600 text-2xl"></i>
            </div>
          </div>
          <h2 className="text-center text-2xl font-extrabold text-gray-900">
            Access Your HealthChain
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            {isLogin ? (
              <span className="flex items-center justify-center gap-2">
                <i className="fas fa-sign-in-alt text-blue-500"></i>
                Sign in to your account
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <i className="fas fa-user-plus text-blue-500"></i>
                Decentralized • Secure • Patient-Owned
              </span>
            )}
          </p>
        </div>
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="mb-4">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Sign in as:
                </label>
                <div className="mt-2 space-x-4 flex justify-between ">
                  <button
                    onClick={() => setRole('patient')}
                    type="button"
                    className={`w-full duration-300 border rounded-lg hover:border-blue-600 py-1.5 border-gray-200 flex items-center justify-center gap-2 ${
                      role === 'patient'
                        ? 'bg-blue-500 text-white border-blue-600'
                        : ''
                    } `}
                  >
                    <i className="fas fa-user-injured"></i>
                    Patient
                  </button>
                  <button
                    onClick={() => setRole('doctor')}
                    type="button"
                    className={`w-full border duration-300 rounded-lg hover:border-blue-600 py-1.5 border-gray-200 flex items-center justify-center gap-2 ${
                      role === 'doctor'
                        ? 'bg-blue-500 text-white border-blue-600'
                        : ''
                    } `}
                  >
                    <i className="fas fa-user-md"></i>
                    Doctor
                  </button>

                  {/* <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="patient"
                      checked={role === 'patient'}
                      onChange={(e) => setRole(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2">Patient</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="role"
                      value="doctor"
                      checked={role === 'doctor'}
                      onChange={(e) => setRole(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="ml-2">Doctor</span>
                  </label> */}
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  <i className="fas fa-user mr-2 text-blue-500"></i>
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </>
          )}
          <div className="mb-4">
            <label
              htmlFor="email-address"
              className="block text-sm font-medium text-gray-700"
            >
              <i className="fas fa-envelope mr-2 text-blue-500"></i>
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              <i className="fas fa-lock mr-2 text-blue-500"></i>
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {!isLogin && (
            <div className="mb-4">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                <i className="fas fa-shield-alt mr-2 text-blue-500"></i>
                Confirm Password
              </label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}

          {isLogin && (
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              {isLogin ? (
                <>
                  <i className="fas fa-sign-in-alt mr-2"></i>
                  Sign in
                </>
              ) : (
                <>
                  <i className="fas fa-user-plus mr-2"></i>
                  Sign up
                </>
              )}
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 flex items-center justify-center gap-x-2">
            <Link
              to="/"
              className="font-medium text-blue-600 hover:text-blue-500  flex items-center gap-x-2"
            >
              <svg
                className="w-5 h-5 text-blue-600 hover:text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>{' '}
              back
            </Link>
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
