import React, { useState } from 'react';
import './Gallery.css';
import lapbuboostLogo from '../images/LOGO.png';
import backgroundImage from '../images/background.png';

function Gallery() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="gallery-container min-h-screen bg-black text-white overflow-hidden"
         style={{
           backgroundImage: `url(${backgroundImage})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundAttachment: 'fixed'
         }}>
      {/* Dark overlay for better readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 z-0"></div>
      
      {/* Navigation for larger screens */}
      <header className="hidden md:flex justify-between items-center px-8 py-5 z-30 relative">
        <a href="/" className="flex items-center">
          <img src={lapbuboostLogo} alt="Lapbuboost Logo" className="h-12 mr-2" />
          <h1 className="text-white text-xl font-bold">LAPBUBOOST</h1>
        </a>
        <nav className="flex">
          <a href="/" className="text-white mx-6 hover:text-blue-400 nav-link">Home</a>
          <a href="/gallery" className="text-white mx-6 hover:text-blue-400 nav-link active">Gallery</a>
          <a href="/featured" className="text-white mx-6 hover:text-blue-400 nav-link">Featured</a>
          <a href="/products" className="text-white mx-6 hover:text-blue-400 nav-link">Products</a>
          <a href="/about" className="text-white mx-6 hover:text-blue-400 nav-link">About Us</a>
        </nav>
      </header>

      {/* Mobile navigation */}
      <div className="md:hidden z-30 relative">
        {/* Mobile header */}
        <header className="flex justify-between items-center p-4">
          <a href="/" className="flex items-center">
            <img src={lapbuboostLogo} alt="Lapbuboost Logo" className="h-8 mr-2" />
            <h1 className="text-white text-lg font-bold">LAPBUBOOST</h1>
          </a>
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
            <a href="/gallery" className="text-white py-3 hover:text-blue-400 nav-link active">Gallery</a>
            <a href="/featured" className="text-white py-3 hover:text-blue-400 nav-link">Featured</a>
            <a href="/products" className="text-white py-3 hover:text-blue-400 nav-link">Products</a>
            <a href="/about" className="text-white py-3 hover:text-blue-400 nav-link">About Us</a>
          </nav>
        </div>
      </div>

      {/* Gallery Content Placeholder */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        <div className="text-center">
          <p className="text-xl">Coming Soon...</p>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
