import React, { useState, useEffect } from 'react';
import './Home.css';
import lapbuboostLogo from '../images/LOGO.png';
import backgroundImage from '../images/background.png';
import rogStrixG16 from '../images/rogstrixg16.png';
import msiImage from '../images/msi.png';
import legionImage from '../images/LEGION.png';
import aorusImage from '../images/aorus.png';
import predatorImage from '../images/predator.png';
import tufImage from '../images/tuf.png';
import rogTilt from '../images/rogtilt.png';

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Slideshow images
  const slideshowImages = [
    { src: rogStrixG16, alt: "ROG Strix G16 Gaming Laptop" },
    { src: msiImage, alt: "MSI Gaming Laptop" },
    { src: legionImage, alt: "Legion Gaming Laptop" },
    { src: aorusImage, alt: "AORUS Gaming Laptop" },
    { src: predatorImage, alt: "Predator Gaming Laptop" },
    { src: tufImage, alt: "TUF Gaming Laptop" },
    { src: rogTilt, alt: "ROG Gaming Laptop" }
  ];

  // Automatic slideshow effect
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideshowImages.length);
    }, 3000); // Change slide every 3 seconds
    
    return () => clearInterval(slideTimer);
  }, []);

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
        <a href="/" className="flex items-center">
          <img src={lapbuboostLogo} alt="Lapbuboost Logo" className="h-12 mr-2" />
          <h1 className="text-white text-xl font-bold">LAPBUBOOST</h1>
        </a>
        <nav className="flex">
          <a href="/" className="text-white mx-6 hover:text-blue-400 nav-link active">Home</a>
          <a href="/gallery" className="text-white mx-6 hover:text-blue-400 nav-link">Gallery</a>
          <a href="/featured" className="text-white mx-6 hover:text-blue-400 nav-link">Featured</a>
          <a href="/products" className="text-white mx-6 hover:text-blue-400 nav-link">Products</a>
          <a href="/about" className="text-white mx-6 hover:text-blue-400 nav-link">About Us</a>
        </nav>
      </header>

      {/* Mobile navigation */}
      <div className="md:hidden z-20 relative">
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
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''} bg-black bg-opacity-90 backdrop-blur-sm fixed top-16 left-0 right-0 z-30 transition-all duration-300`}>
          <nav className="flex flex-col items-center py-5">
            <a href="/" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link active">Home</a>
            <a href="/gallery" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link">Gallery</a>
            <a href="/featured" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link">Featured</a>
            <a href="/products" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link">Products</a>
            <a href="/about" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link">About Us</a>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 py-24 md:py-0">
        <div className="text-center md:w-1/2 mb-12 md:mb-0 z-10">
          <a href="/" className="mb-6 md:mb-8 flex justify-center items-center">
            <img src={lapbuboostLogo} alt="Lapbuboost Logo" className="h-12 md:h-24" />
            <h1 className="text-white text-2xl md:text-4xl font-bold ml-2 flex items-center tracking-wider">
              LAPBUBOOST
            </h1>
          </a>
          <h2 className="text-white text-lg md:text-3xl lg:text-4xl font-bold mb-8 md:mb-16 tracking-wide">
            "Boost Your Game, Anywhere You Go"
          </h2>
          <a href="/products" className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white font-bold py-3 px-6 md:px-8 rounded-md transition duration-300 get-started-btn inline-block">
            GET STARTED
          </a>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end z-10 relative">
          <div className="slideshow-container w-full h-[250px] md:h-[350px] relative">
            {slideshowImages.map((slide, index) => (
              <div 
                key={index} 
                className={`slideshow-slide absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
                  currentSlide === index ? 'opacity-100 z-20' : 'opacity-0 z-10'
                }`}
              >
                <img 
                  src={slide.src} 
                  alt={slide.alt} 
                  className="w-auto h-auto max-w-[200px] md:max-w-[450px] max-h-[220px] md:max-h-none object-contain transform hover:scale-105 transition duration-500 laptop-glow floating-laptop"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-0"></div>
    </div>
  );
}

export default Home;
