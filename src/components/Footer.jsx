import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import igIcon from '../assets/img/ig 1.png';
import waIcon from '../assets/img/wa.jpeg';

function Footer() {
  const location = useLocation();

  // List of routes where footer should not be visible
  const noFooterRoutes = [
    '/editprofile',
    '/historypembayaran',
    '/login',
    '/register',
    '/premiumacc',
    '/sandibaru',
  ];

  // If the current path is in noFooterRoutes, return null to hide footer
  if (noFooterRoutes.includes(location.pathname)) {
    return null;
  }

  // Function to scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Enables smooth scroll animation
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            {/* CahKost link that scrolls to the top */}
            <Link to="/" className="text-2xl font-bold" onClick={scrollToTop}>
              CahKost
            </Link>
            {/* Text that scrolls to the top when clicked */}
            <p className="mt-2 cursor-pointer" onClick={scrollToTop}>
              Making it a comfortable place for a second home in your hometown
            </p>
          </div>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mt-4 md:ml-0 flex space-x-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={igIcon} alt="Instagram" className="h-6" />
            </a>
            <a href="https://wa.me/+6285158442747" target="_blank" rel="noopener noreferrer">
              <img src={waIcon} alt="WhatsApp" className="h-6" />
            </a>
          </div>
          <br />
          {/* Copyright text that scrolls to the top when clicked */}
          <p className="cursor-pointer" onClick={scrollToTop}>
            &copy; 2024 CahKost. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
