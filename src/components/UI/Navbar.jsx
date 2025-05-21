import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav class="bg-white shadow-sm sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-20 items-center">
            <div class="flex items-center">
              <div class="flex-shrink-0 flex items-center">
                <svg
                  class="h-10 w-10 text-indigo-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 14C19 15.6569 17.6569 17 16 17C14.3431 17 13 15.6569 13 
14C13 12.3431 14.3431 11 16 11C17.6569 11 19 12.3431 19 14Z"
                    fill="#4F46E5"
                  />
                  <path
                    d="M21 12C21 13.6569 19.6569 15 18 15C16.3431 15 15 13.6569 15 
12C15 10.3431 16.3431 9 18 9C19.6569 9 21 10.3431 21 12Z"
                    fill="#4F46E5"
                  />
                  <path
                    d="M9 10C9 11.6569 7.65685 13 6 13C4.34315 13 3 11.6569 3 10C3 
8.34315 4.34315 7 6 7C7.65685 7 9 8.34315 9 10Z"
                    fill="#4F46E5"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.0317 1C12.0317 1 6 
3.11765 6 8.11765C6 12.8824 12.0317 23 12.0317 23C12.0317 23 18 12.8824 18 8.11765C18 
3.11765 12.0317 1 12.0317 1Z"
                    stroke="#4F46E5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span class="ml-3 text-2xl font-bold bg-gradient-to-r from-indigo-600 to-cyan 500 bg-clip-text text-transparent">
                  HealthChain
                </span>
              </div>
            </div>
            <div class="hidden lg:flex items-center space-x-10">
              <a
                href="#features"
                class="nav-link text-gray-700 hover:text-indigo-600 text-base font-medium transition duration-150"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                class="nav-link text-gray-700 hover:text-indigo-600 text base font-medium transition duration-150"
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                class="nav-link text-gray-700 hover:text-indigo-600 text base font-medium transition duration-150"
              >
                Testimonials
              </a>
              <Link
                to="/login"
                class="px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150"
              >
                Get Started
              </Link>
            </div>
            <div class="lg:hidden">
              <button
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
