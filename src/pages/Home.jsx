import React from 'react';
import Navbar from '../components/UI/Navbar';
import Footer from '../components/UI/Footer';
import Cta from '../components/Cta';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center py-20">
            <div className="text-white animate__animated animate__fadeInLeft">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Revolutionizing Healthcare
                <span className="text-cyan-200">with Blockchain</span>
              </h1>
              <p className="text-xl md:text-2xl text-indigo-100 mb-8">
                Take full control of your medical records with our secure,
                decentralized platform. Your data, your rules.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link
                  to="/dashboard"
                  className="px-8 py-4 bg-white text-indigo-600 text-lg font-semibold rounded-lg hover:bg-gray-100 transition duration-300 text-center shadow-lg"
                >
                  Join HealthChain
                </Link>
                <a
                  href="#"
                  className="px-8 py-4 border-2 border-white text-white text-lg font semibold rounded-lg hover:bg-white hover:bg-opacity-10 transition duration-300 text-center"
                >
                  Watch Demo
                </a>
              </div>
            </div>
            <div className="animate__animated animate__fadeInRight">
              <img
                src="https://images.ctfassets.net/9xr9e2s5heun/Hooa3a6QpihD3STwbvpdR/7a4e86baf4da0e4723a34688edb8fbed/PlaidHeroImage.png?w=800&q=50"
                alt="Doctor using digital 
tablet"
                className="rounded-xl  border-opacity-20"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Partners Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 mb-8">
            Trusted by leading healthcare providers
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify center">
            <img
              src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/000/697/917/datas/original.png"
              alt="Mayo Clinic"
              className="h-12 opacity-60 hover:opacity-100 transition duration-300"
            />
            <img
              src="https://thumbnail-cloud.naturaltherapypages.com.au/unsafe/fit-in/500x0/smart/https://mediacache.naturaltherapypages.com.au/creative/services/885001_890000/887633/640x480.jpg?v=b7b1b23efe8e098b9d147f94cd978b67"
              alt="Johns 
Hopkins"
              className="h-12 opacity-60 hover:opacity-100 transition duration-300"
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/651b012ea202a342712e0b34/1698425878831-N6LYBAPBOZBD75SNS1OA/health+eco+logo.png?format=750w"
              alt="Cleveland 
Clinic"
              className="h-12 opacity-60 hover:opacity-100 transition duration-300"
            />
            <img
              src="https://th.bing.com/th/id/OIP.Pft1fTzkcEkc2nGddulsBAHaHa?cb=iwp2&rs=1&pid=ImgDetMain"
              alt="Mass 
General"
              className="h-12 opacity-60 hover:opacity-100 transition duration-300"
            />
            <img
              src="https://th.bing.com/th/id/OIP.Ga9EzM7LY6eq1CjdBUHWNwHaHa?cb=iwp2&w=1536&h=1536&rs=1&pid=ImgDetMain"
              alt="Stanford 
Health"
              className="h-12 opacity-60 hover:opacity-100 transition duration-300"
            />
            <img
              src="https://img.freepik.com/premium-vector/health-home-vector-logo-design-logo-template-health_393879-1063.jpg"
              alt="Kaiser"
              className="h-12 opacity-60 hover:opacity-100 transition duration-300"
            />
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo 100 rounded-full mb-4">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Secure, Transparent, and Patient-Centric
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              HealthChain combines blockchain technology with healthcare to
              create an ecosystem where patients truly own their medical data.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-xl p-8 shadow-lg feature-card transition duration-300">
              <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10
10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Unbreakable Security
              </h3>
              <p className="text-gray-600">
                Your medical records are encrypted and distributed across a
                decentralized blockchain network, eliminating single points of
                failure.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-xl p-8 shadow-lg feature-card transition duration-300">
              <div className="w-14 h-14 bg-cyan-100 rounded-lg flex items-center justify-center mb 6">
                <svg
                  className="w-6 h-6 text-cyan-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 
3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042
.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Granular Access Control
              </h3>
              <p className="text-gray-600">
                Grant or revoke access to specific records with expiration
                dates. Full audit logs show exactly who accessed your data and
                when.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-xl p-8 shadow-lg feature-card transition duration-300">
              <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Instant Emergency Access
              </h3>
              <p className="text-gray-600">
                Authorized medical professionals can access critical information
                in emergencies, saving precious time when it matters most.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-white rounded-xl p-8 shadow-lg feature-card transition duration-300">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb 6">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Seamless Interoperability
              </h3>
              <p className="text-gray-600">
                Connect with any healthcare provider. Our standardized protocols
                ensure smooth data exchange across different systems.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="bg-white rounded-xl p-8 shadow-lg feature-card transition duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb 6">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 
2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Comprehensive Records
              </h3>
              <p className="text-gray-600">
                Store and manage all your health data in one place - from
                prescriptions and lab results to imaging and vaccination
                records.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="bg-white rounded-xl p-8 shadow-lg feature-card transition duration-300">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb 6">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 
1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 
0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Monetize Your Data
              </h3>
              <p className="text-gray-600">
                Earn rewards by anonymously contributing your de identified
                health data to medical research studies.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* How It Works Section */}
      <div id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo 100 rounded-full mb-4">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Health Data, Simplified
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Three simple steps to take control of your medical records.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center px-6">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Create Your Profile
              </h3>
              <p className="text-gray-600">
                Sign up and verify your identity to create your secure
                HealthChain profile in minutes.
              </p>
            </div>
            {/* Step 2 */}
            <div className="text-center px-6">
              <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-cyan-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Connect Your Providers
              </h3>
              <p className="text-gray-600">
                Authorize HealthChain to retrieve your medical records from
                hospitals, clinics, and pharmacies.
              </p>
            </div>
            {/* Step 3 */}
            <div className="text-center px-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Manage Access
              </h3>
              <p className="text-gray-600">
                Control exactly who can see which parts of your medical history
                and for how long.
              </p>
            </div>
          </div>
          <div className="mt-16 text-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
            >
              See Live Demo
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 
1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010
1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <div id="testimonials" className="py-20 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 bg-indigo 100 rounded-full mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Hear from patients and doctors who transformed their healthcare
              experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://randomuser.me/api/portraits/women/32.jpg"
                    alt="Sarah J."
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Sarah J.
                  </h4>
                  <p className="text-indigo-600">Patient</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "After moving cities, HealthChain saved me hours of paperwork.
                All my records were instantly available to my new doctors. It's
                revolutionary!"
              </p>
              <div className="mt-4 flex text-yellow-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921
.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539
1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 
00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921
.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539
1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 
00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921
.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539
1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 
00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921
.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539
1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 
00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921
.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539
1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 
00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://randomuser.me/api/portraits/men/54.jpg"
                    alt="Dr. Robert K."
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Dr. Robert K.
                  </h4>
                  <p className="text-indigo-600">Cardiologist</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Having complete medical histories available instantly has
                improved my diagnostic accuracy and reduced redundant testing.
                This is the future of medicine."
              </p>
              <div className="mt-4 flex text-yellow-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921
.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539
1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 
00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921
.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539
1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 
00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921
.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539
1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 
00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921
.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539
1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 
00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921
.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539
1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 
00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Maria L."
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Maria L.
                  </h4>
                  <p className="text-indigo-600">Chronic Patient</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As someone with multiple chronic conditions, HealthChain has
                simplified my life. No more carrying thick files to every
                appointment!"
              </p>
              <div className="mt-4 flex text-yellow-400">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921
.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539
1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 
00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921
.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539
1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 
00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921
.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539
1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 
00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921
.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539
1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 
00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 
00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921
.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539
1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 
00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Startup Section */}
      <div className="bg-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <p className="text-4xl font-bold mb-2">250K+</p>
              <p className="text-indigo-100">Patients</p>
            </div>
            <div className="text-white">
              <p className="text-4xl font-bold mb-2">15K+</p>
              <p className="text-indigo-100">Doctors</p>
            </div>
            <div className="text-white">
              <p className="text-4xl font-bold mb-2">1.2M+</p>
              <p className="text-indigo-100">Records Secured</p>
            </div>
            <div className="text-white">
              <p className="text-4xl font-bold mb-2">99.99%</p>
              <p className="text-indigo-100">Uptime</p>
            </div>
          </div>
        </div>
      </div>
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
