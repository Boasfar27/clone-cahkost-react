import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [kelasKostOpen, setKelasKostOpen] = useState(false); // State for Kelas Kost dropdown
  const [userDropdownOpen, setUserDropdownOpen] = useState(false); // State for User dropdown

  // List of routes where navbar should not be visible
  const noNavbarRoutes = [
    '/editprofile',
    '/historypembayaran',
    '/login',
    '/register',
    '/premiumacc',
    '/sandibaru'
  ];

  // Hide navbar on specific routes
  if (noNavbarRoutes.includes(location.pathname)) {
    return null; // Return null to hide navbar on these routes
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleKelasKost = () => {
    setKelasKostOpen(!kelasKostOpen);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-purple-600 shadow z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link
  to="/" // Navigates to the home route
  className="text-2xl font-bold text-white hover:text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 transition-colors duration-300"
>
  CahKost
</Link>


        {/* Navigation for large screens */}
        <nav className="hidden md:flex space-x-20">
          {/* Kelas Kost Dropdown */}
          <div className="relative">
            <button
              onClick={toggleKelasKost}
              className="block py-2 text-white hover:text-yellow-300 flex items-center"
            >
              Kelas Kost
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {kelasKostOpen && (
              <div className="absolute bg-white text-gray-800 mt-2 rounded shadow-lg z-50">
                <Link
                  to="/kostpria"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Kost Pria
                </Link>
                <Link
                  to="/kostperempuan"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Kost Wanita
                </Link>
                <Link
                  to="/kostekslusif"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Kost Eksklusif
                </Link>
              </div>
            )}
          </div>

          <Link to="/promo" className="block py-2 text-white hover:text-yellow-300">
            Promo
          </Link>
          <Link to="/tentangkami" className="block py-2 text-white hover:text-yellow-300">
            Tentang Kami
          </Link>
        </nav>

        {/* User dropdown with profile photo for logged-in user */}
        <div className="hidden md:flex">
          <div className="relative">
            <button
              onClick={toggleUserDropdown}
              className="ml-2 px-4 py-2 text-white hover:text-yellow-300 flex items-center"
            >
              Nama Pengguna
              <img
                src="https://via.placeholder.com/40"
                alt="Profile Photo"
                className="w-10 h-10 rounded-full ml-2"
              />
            </button>
            {userDropdownOpen && (
              <div className="absolute bg-white text-gray-800 mt-2 rounded shadow-lg z-50">
                <Link to="/editprofile" className="block px-4 py-2 hover:bg-gray-200">
                  Edit Profile
                </Link>
                <Link to="/historypembayaran" className="block px-4 py-2 hover:bg-gray-200">
                  History Pembayaran
                </Link>
                <Link to="/premiumacc" className="block px-4 py-2 hover:bg-gray-200">
                  Premium Account
                </Link>
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-gray-200 text-red-600"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white hover:text-yellow-300"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {/* User Dropdown for Mobile */}
            <div className="relative">
              <button
                onClick={toggleUserDropdown}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-300 flex items-center"
              >
                Nama Pengguna
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
                <img
                  src="https://picsum.photos/200"
                  alt="Profile Photo"
                  className="w-12 h-12 rounded-full ml-auto"
                />
              </button>
              {userDropdownOpen && (
                <div className="dropdown-menu bg-white text-gray-800 mt-2 rounded shadow-lg z-50">
                  <Link to="/editprofile" className="block px-4 py-2 hover:bg-gray-200">
                    Edit Profile
                  </Link>
                  <Link
                    to="/historypembayaran"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    History Pembayaran
                  </Link>
                  <Link to="/premiumacc" className="block px-4 py-2 hover:bg-gray-200">
                    Premium Account
                  </Link>
                  <Link
                    to="/"
                    className="block px-4 py-2 hover:bg-gray-200 text-red-600"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>

            {/* Kelas Kost Dropdown for Mobile */}
            <div className="relative">
              <button
                onClick={toggleKelasKost}
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-300 flex items-center"
              >
                Kelas Kost
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {kelasKostOpen && (
                <div className="dropdown-menu bg-white text-gray-800 mt-2 rounded shadow-lg z-50">
                  <Link to="/kostpria" className="block px-4 py-2 hover:bg-gray-200">
                    Kost Pria
                  </Link>
                  <Link to="/kostperempuan" className="block px-4 py-2 hover:bg-gray-200">
                    Kost Wanita
                  </Link>
                  <Link to="/kostekslusif" className="block px-4 py-2 hover:bg-gray-200">
                    Kost Eksklusif
                  </Link>
                </div>
              )}
            </div>

            <Link to="/promo" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-300">
              Promo
            </Link>
            <Link to="/tentangkami" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yellow-300">
              Tentang Kami
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
