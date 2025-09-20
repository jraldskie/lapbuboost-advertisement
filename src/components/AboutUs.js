import React, { useState } from 'react';
import './AboutUs.css';
import lapbuboostLogo from '../images/lapbuboost logo.png';
import aboutStoreImage from '../images/aboutstoree.png';
import backgroundImage from '../images/rogbannercover.png';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import TiktokIcon from './icons/TiktokIcon';

function AboutUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="about-us-container relative min-h-screen bg-black overflow-hidden" 
         style={{
           backgroundImage: `url(${backgroundImage})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
         }}>
      {/* Navigation for larger screens */}
      <header className="hidden md:flex justify-between items-center px-8 py-5 z-20 relative">
        <div className="flex items-center">
          <a href="/">
            <img src={lapbuboostLogo} alt="Lapbuboost Logo" className="h-12 mr-2" />
          </a>
          <h1 className="text-white text-xl font-bold">LAPBUBOOST</h1>
        </div>
        <nav className="flex">
          <a href="/" className="text-white mx-6 hover:text-blue-400 nav-link">Home</a>
          <a href="#" className="text-white mx-6 hover:text-blue-400 nav-link">Gallery</a>
          <a href="#" className="text-white mx-6 hover:text-blue-400 nav-link">Featured</a>
          <a href="#" className="text-white mx-6 hover:text-blue-400 nav-link">Products</a>
          <a href="/about" className="text-white mx-6 hover:text-blue-400 nav-link active">About Us</a>
        </nav>
      </header>

      {/* Mobile navigation */}
      <div className="md:hidden z-20 relative">
        {/* Mobile header */}
        <header className="flex justify-between items-center p-4">
          <div className="flex items-center">
            <a href="/">
              <img src={lapbuboostLogo} alt="Lapbuboost Logo" className="h-8 mr-2" />
            </a>
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
            <a href="/" className="text-white py-3 hover:text-blue-400 nav-link">Home</a>
            <a href="#" className="text-white py-3 hover:text-blue-400 nav-link">Gallery</a>
            <a href="#" className="text-white py-3 hover:text-blue-400 nav-link">Featured</a>
            <a href="#" className="text-white py-3 hover:text-blue-400 nav-link">Products</a>
            <a href="/about" className="text-white py-3 hover:text-blue-400 nav-link active">About Us</a>
          </nav>
        </div>
      </div>
      {/* Main content section with store image and description */}
      <div className="about-content-section pt-16 px-4 md:px-16 lg:px-24 mt-8 z-10 relative">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            
            {/* Left side - Logo and text */}
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <div className="logo-section">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <img src={lapbuboostLogo} alt="Lapbuboost Logo" className="h-16" />
                  <h1 className="text-white text-3xl md:text-4xl font-bold ml-3">LAPBUBOOST</h1>
                </div>
                <h2 className="text-blue-400 text-2xl md:text-3xl font-bold">"Boost Your Game, Anywhere You Go"</h2>
              </div>
              
              <div className="text-description">
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Gaming laptops represent the perfect solution for the modern Filipino gamer who values both performance and mobility. In the Philippines, where internet cafes (computer shops) have traditionally dominated the gaming landscape, there's a growing shift toward personal gaming devices that offer the freedom to game anywhere.
                </p>
              </div>
            </div>
            
            {/* Right side - Store image */}
            <div className="lg:w-1/2">
              <img 
                src={aboutStoreImage} 
                alt="Lapbuboost Store" 
                className="rounded-lg shadow-2xl w-full store-image" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-media-section py-8 px-4 md:px-16 lg:px-24 mt-8 z-10 relative">
        <div className="container mx-auto">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Social Media:</h3>
          <div className="flex items-center flex-wrap">
            <div className="social-item flex items-center mr-8">
              <div className="social-icon w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full">
                <FacebookIcon />
              </div>
              <span className="text-white ml-2">Lapbuboost</span>
            </div>
            <div className="social-item flex items-center mr-8">
              <div className="social-icon w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full">
                <InstagramIcon />
              </div>
              <span className="text-white ml-2">@lapbuboost</span>
            </div>
            <div className="social-item flex items-center">
              <div className="social-icon w-12 h-12 flex items-center justify-center bg-black rounded-full">
                <TiktokIcon />
              </div>
              <span className="text-white ml-2">@lapbuboost</span>
            </div>
          </div>
        </div>
      </div>

      {/* Branches Section */}
      <div className="branches-section py-16 px-4 md:px-16 lg:px-24 mt-8 z-10 relative">
        <div className="container mx-auto">
          <div className="mb-12">
            <div className="flex items-center justify-center mb-4">
              <img src={lapbuboostLogo} alt="Lapbuboost Logo" className="h-16" />
              <h2 className="text-3xl md:text-4xl font-bold text-white ml-3">LAPBUBOOST</h2>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center">Branches</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Luzon Branch */}
            <div className="branch-card">
              <h3 className="text-xl font-bold mb-2">Lapbuboost - Luzon Branch</h3>
              <p className="text-gray-300 mb-1">#717 Aurora Blvd, Quezon City,</p>
              <p className="text-gray-300">1112 Metro Manila</p>
            </div>
            
            {/* Visayas Branch */}
            <div className="branch-card">
              <h3 className="text-xl font-bold mb-2">Lapbuboost - Visayas Branch</h3>
              <p className="text-gray-300 mb-1">#3F, NS Building, A. S. Fortuna St,</p>
              <p className="text-gray-300">Mandaue, 6014 Cebu</p>
            </div>
            
            {/* Mindanao Branch */}
            <div className="branch-card">
              <h3 className="text-xl font-bold mb-2">Lapbuboost - Mindanao Branch</h3>
              <p className="text-gray-300 mb-1">#Talomo, Davao City, Davao del Sur</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-sm z-10 relative">
        <p>© 2025 Lapbuboost. All Rights Reserved.</p>
      </footer>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-75 z-0"></div>
    </div>
  );
}

export default AboutUs;
