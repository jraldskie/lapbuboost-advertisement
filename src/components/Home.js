import React, { useState } from 'react';
import './Home.css';
import lapbuboostLogo from '../images/lapbuboost logo.png';
import rogStrixG16 from '../images/rogstrixg16.png';
import backgroundImage from '../images/background.png';

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden" 
         style={{
           backgroundImage: `url(${backgroundImage})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
         }}>
      {/* Navigation for larger screens */}
      <header className="hidden md:flex justify-between items-center px-8 py-5 z-20 relative">
        <div className="flex items-center">
          <img src={lapbuboostLogo} alt="Lapbuboost Logo" className="h-12 mr-2" />
          <h1 className="text-white text-xl font-bold">LAPBUBOOST</h1>
        </div>
        <nav className="flex">
          <a href="#" className="text-white mx-6 hover:text-blue-400 nav-link active">Home</a>
          <a href="#" className="text-white mx-6 hover:text-blue-400 nav-link">Gallery</a>
          <a href="#" className="text-white mx-6 hover:text-blue-400 nav-link">Featured</a>
          <a href="#" className="text-white mx-6 hover:text-blue-400 nav-link">Products</a>
          <a href="/about" className="text-white mx-6 hover:text-blue-400 nav-link">About Us</a>
        </nav>
      </header>

      {/* Mobile navigation */}
      <div className="md:hidden z-20 relative">
        {/* Mobile header */}
        <header className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <img src={lapbuboostLogo} alt="Lapbuboost Logo" className="h-8 mr-2" />
            <h1 className="text-white text-lg font-bold">LAPBUBOOST</h1>
          </div>
          <button 
            onClick={toggleMobileMenu} 
            className="text-white text-3xl focus:outline-none burger-button"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '×' : '≡'}
          </button>
        </header>

        {/* Mobile menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''} bg-black bg-opacity-90 backdrop-blur-sm absolute w-full z-30 transition-all duration-300`}>
          <nav className="flex flex-col items-center py-5">
            <a href="#" className="text-white py-3 hover:text-blue-400 nav-link active">Home</a>
            <a href="#" className="text-white py-3 hover:text-blue-400 nav-link">Gallery</a>
            <a href="#" className="text-white py-3 hover:text-blue-400 nav-link">Featured</a>
            <a href="#" className="text-white py-3 hover:text-blue-400 nav-link">Products</a>
            <a href="/about" className="text-white py-3 hover:text-blue-400 nav-link">About Us</a>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center h-screen px-6 md:px-16 pt-0 md:pt-0">
        <div className="text-center md:text-left md:w-1/2 mb-8 md:mb-0 z-10 mt-12 md:mt-0">
          <div className="mb-8 flex justify-center md:justify-start items-center">
            <img src={lapbuboostLogo} alt="Lapbuboost Logo" className="h-14 md:h-24" />
            <h1 className="text-white text-3xl md:text-4xl font-bold ml-2 flex items-center tracking-wider">
              LAPBUBOOST
            </h1>
          </div>
          <h2 className="text-white text-xl md:text-3xl lg:text-4xl font-bold mb-12 md:mb-16 tracking-wide">
            "Boost Your Game, Anywhere You Go"
          </h2>
          <button className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 px-8 rounded-md transition duration-300 get-started-btn">
            GET STARTED
          </button>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10">
          <img 
            src={rogStrixG16} 
            alt="ROG Strix G16 Laptop" 
            className="w-full max-w-md md:max-w-lg transform hover:scale-105 transition duration-500 laptop-glow floating-laptop"
          />
        </div>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-0"></div>
    </div>
  );
}

export default Home;
