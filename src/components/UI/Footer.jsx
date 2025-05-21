import React from 'react';

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-white pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div class="col-span-2">
            <div class="flex items-center">
              <svg
                class="h-10 w-10 text-indigo-400"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 14C19 15.6569 17.6569 17 16 17C14.3431 17 13 15.6569 13 
14C13 12.3431 14.3431 11 16 11C17.6569 11 19 12.3431 19 14Z"
                  fill="#818CF8"
                />
                <path
                  d="M21 12C21 13.6569 19.6569 15 18 15C16.3431 15 15 13.6569 15 
12C15 10.3431 16.3431 9 18 9C19.6569 9 21 10.3431 21 12Z"
                  fill="#818CF8"
                />
                <path
                  d="M9 10C9 11.6569 7.65685 13 6 13C4.34315 13 3 11.6569 3 10C3 
8.34315 4.34315 7 6 7C7.65685 7 9 8.34315 9 10Z"
                  fill="#818CF8"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0317 1C12.0317 1 6 
3.11765 6 8.11765C6 12.8824 12.0317 23 12.0317 23C12.0317 23 18 12.8824 18 8.11765C18 
3.11765 12.0317 1 12.0317 1Z"
                  stroke="#818CF8"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span class="ml-3 text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan 400 bg-clip-text text-transparent">
                HealthChain
              </span>
            </div>
            <p class="mt-4 text-gray-400">
              The future of healthcare data management, powered by blockchain
              technology.
            </p>
            <div class="mt-6 flex space-x-6">
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355
.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 
8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 
001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01
1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 
1.84"
                  ></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
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
                  ></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 
0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629
5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577
3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08
1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 
013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 
12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065
.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 
8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 
35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 
2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-white">
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 
5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 
0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 
12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 
2.476v6.759z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-300 tracking-wider uppercase mb 4">
              Solutions
            </h3>
            <ul class="space-y-3">
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  For Patients
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  For Doctors
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  For Hospitals
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  For Researchers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-300 tracking-wider uppercase mb 4">
              Company
            </h3>
            <ul class="space-y-3">
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Press
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-sm font-semibold text-gray-300 tracking-wider uppercase mb 4">
              Legal
            </h3>
            <ul class="space-y-3">
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Security
                </a>
              </li>
              <li>
                <a href="#" class="text-gray-400 hover:text-white">
                  Compliance
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-12 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify between items-center">
          <p class="text-gray-400 text-sm">
            &copy; 2023 HealthChain, Inc. All rights reserved.
          </p>
          <div class="mt-4 md:mt-0 flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" class="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </a>
            <a href="#" class="text-gray-400 hover:text-white text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
