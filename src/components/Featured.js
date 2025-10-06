import React, { useState, useEffect } from 'react';
import './Featured.css';
import lapbuboostLogo from '../images/LOGO.png';
import backgroundImage from '../images/background.png';

// Import images
import xboxLogo from '../images/xboxlogo.png';
import xboxBanner from '../images/xboxbanner.jpg';
import nvidiaBack from '../images/nvidiaback.png';
import intelBack from '../images/intelback.png';
import ramImage from '../images/ram.png';
import ssdImage from '../images/sssdd.png';
import optimusImage from '../images/optimus.png';
import rogBannerCover from '../images/rogbannercover.png';
import amdRyzenLogo from '../images/ryzenlogo.png';

// Import videos
import muxVideo from '../images/mux.mp4';
import smartAccessVideo from '../images/smartaccess.mp4';
import smartShiftVideo from '../images/smartshifty.mp4';

function Featured() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Function to handle scroll navigation
  const scrollToSection = (sectionIndex) => {
    const sections = document.querySelectorAll('.featured-scroll-container section');
    if (sections[sectionIndex]) {
      sections[sectionIndex].scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Add keyboard navigation (arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const sections = document.querySelectorAll('.featured-scroll-container section');
      const currentSectionIndex = [...sections].findIndex(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });
      
      if (e.key === 'ArrowDown' && currentSectionIndex < sections.length - 1) {
        scrollToSection(currentSectionIndex + 1);
      } else if (e.key === 'ArrowUp' && currentSectionIndex > 0) {
        scrollToSection(currentSectionIndex - 1);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden"
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
          <a href="/gallery" className="text-white mx-6 hover:text-blue-400 nav-link">Gallery</a>
          <a href="/featured" className="text-white mx-6 hover:text-blue-400 nav-link active">Featured</a>
          <a href="/products" className="text-white mx-6 hover:text-blue-400 nav-link">Products</a>
          <a href="/about" className="text-white mx-6 hover:text-blue-400 nav-link">About Us</a>
        </nav>
      </header>

      {/* Mobile navigation */}
      <div className="md:hidden z-30 relative">
        {/* Mobile header */}
        <header className="flex justify-between items-center p-4 ">
          <a href="/" className="flex items-center">
            <img src={lapbuboostLogo} alt="Lapbuboost Logo" className="h-8 mr-2" />
            <h1 className="text-white text-lg font-bold">LAPBUBOOST</h1>
          </a>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
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
            <a href="/gallery" className="text-white py-3 hover:text-blue-400 nav-link">Gallery</a>
            <a href="/featured" className="text-white py-3 hover:text-blue-400 nav-link active">Featured</a>
            <a href="/products" className="text-white py-3 hover:text-blue-400 nav-link">Products</a>
            <a href="/about" className="text-white py-3 hover:text-blue-400 nav-link">About Us</a>
          </nav>
        </div>
      </div>

      {/* Navigation dots removed as requested */}
      
      <div className="featured-scroll-container w-full overflow-y-auto relative z-10">
        
        {/* Xbox Game Pass Section */}
        <section className="h-screen flex items-center border-b border-gray-800">
          <div className="container mx-auto px-4 md:px-8 flex flex-col items-center">
            <div className="text-center mb-6">
              <img src={xboxLogo} alt="Xbox Logo" className="h-14 md:h-16 mx-auto mb-4" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">Game Pass Ultimate</h2>
              <h3 className="text-xl md:text-2xl font-medium text-green-400 mt-2 mb-4">
                Discover your next favorite game
              </h3>
            </div>
            <p className="text-gray-300 text-center max-w-3xl mx-auto mb-8 text-lg">
              Play over 100 high-quality games with friends on your PC, laptop, console, phone or tablet. With new games added all the time, there's always something new to play.
            </p>
            <div className="w-full max-w-4xl mx-auto">
              <img 
                src={xboxBanner} 
                alt="Xbox Game Pass Banner" 
                className="w-full shadow-2xl" 
              />
            </div>
          </div>
        </section>

        {/* Intel Core Section */}
        <section className="min-h-screen flex items-center border-b border-gray-800">
          <div className="container mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img 
                src={intelBack} 
                alt="Intel Processor" 
                className="w-full max-w-xl mx-auto" 
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-5xl font-bold text-blue-400 mb-6">
                Intel® Core™
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                Experience powerful performance with an Intel® Core™ i9 Processor - 14900HX made for Windows ULTRA. It features 8 performance cores, 16 efficient cores, and up to 5.8 GHz turbo frequency with up to 40% in supported games.
              </p>
              <p className="text-gray-400 text-sm mb-8">
                *Actual FPS performance may vary based on the configuration settings.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">24 Cores</h3>
                  <p className="text-gray-400 text-sm">16 E-Cores + 8 P-Cores</p>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">32</h3>
                  <p className="text-gray-400 text-sm">Threads</p>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">65W</h3>
                  <p className="text-gray-400 text-sm">TDP</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NVIDIA GeForce Section */}
        <section className="min-h-screen flex items-center border-b border-gray-800">
          <div className="container mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0 md:order-2">
              <img 
                src={nvidiaBack} 
                alt="NVIDIA GeForce" 
                className="w-full max-w-xl mx-auto" 
              />
            </div>
            <div className="w-full md:w-1/2 md:pr-12 md:order-1">
              <h2 className="text-3xl md:text-5xl font-bold text-green-500 mb-6">
                NVIDIA® GeForce
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                The NVIDIA® GeForce RTX 40 series Laptop GPU is powered by NVIDIA DLSS 3, the Ada Lovelace architecture, and Ray-Tracing technology, offering a max TGP of up to 175W with Dynamic Boost. TGP in-game performance may vary based on device and configuration, though it typically varies between 150W-175W.
              </p>
              <p className="text-gray-400 text-sm mb-8">
                *Actual FPS performance may vary based on the configuration settings.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Up to NVIDIA® GeForce</h3>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">RTX™ 4080</h4>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">Max TGP up to</h3>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">175W</h4>
                  <p className="text-gray-400 text-sm">Dynamic Boost</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-green-400">NVIDIA® Advance Optimus</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Features Section */}
        <section className="min-h-screen flex items-center border-b border-gray-800">
          <div className="container mx-auto px-4 md:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* NVIDIA Advance Optimus */}
              <div>
                <h3 className="text-xl font-bold text-green-500 mb-4">NVIDIA® Advance Optimus</h3>
                <img 
                  src={optimusImage} 
                  alt="NVIDIA Advance Optimus" 
                  className="w-full h-auto object-cover mb-4" 
                />
                <p className="text-gray-300 text-base">
                  Advance Optimus helps send images from the high-performance graphics card straight to the display, which enhances FPS 20% faster than laptops without this feature.
                </p>
              </div>

              {/* Lightning DDR5 Memory */}
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Lightning DDR5 Memory</h3>
                <img 
                  src={ramImage} 
                  alt="DDR5 RAM" 
                  className="w-full h-auto object-cover mb-4" 
                />
                <p className="text-gray-300 text-base">
                  DDR5 Memory utilizes advanced DDR5 5600MHz modules, delivering 77% faster speed than 3200MHz kits. It enhances performance across demanding tasks from gaming to web browsing.
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  *Available on select units, specifications may vary based on model and region.
                </p>
              </div>

              {/* Faster SSD */}
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Faster SSD</h3>
                <img 
                  src={ssdImage} 
                  alt="PCIe Gen4 SSD" 
                  className="w-full h-auto object-cover mb-4" 
                />
                <p className="text-gray-300 text-base">
                  A PCIe Gen4 SSD can be set up in RAID 0 to quickly load large files and detailed game worlds, with speeds of up to 7000MB/s.
                </p>
                <p className="text-gray-400 text-xs mt-2">
                  *Available on select units, specifications may vary based on model and region.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AMD Features Section */}
        <section className="min-h-screen flex items-center">
          <div className="container mx-auto px-4 md:px-8 py-16">
            <h2 className="text-3xl md:text-5xl font-bold text-green-500 mb-8">
              AMD Radeon™ Mux Switch
            </h2>
            <p className="text-gray-300 mb-12 max-w-4xl text-lg">
              Smart Access Graphics technology boost frame rates by intelligently switching between integrated and discrete graphics, or enabling manual controls through a dedicated MUX switch.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* MUX Switch Video */}
              <div>
                <h3 className="text-2xl font-bold text-green-500 mb-4">AMD SmartAccess Graphics</h3>
                <p className="text-gray-300 mb-6">
                  Switch between integrated and discrete graphics on-demand with MUX Switch technology for enhanced performance.
                </p>
                <video 
                  className="w-full rounded video-hover-play" 
                  loop 
                  muted
                  onClick={(e) => {
                    if (e.target.paused) {
                      e.target.play();
                    } else {
                      e.target.pause();
                    }
                  }}
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => e.target.pause()}
                >
                  <source src={muxVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="grid grid-cols-1 gap-8">
                {/* Smart Shift Max */}
                <div>
                  <h3 className="text-2xl font-bold text-green-500 mb-4">AMD Smart Shift Max</h3>
                  <p className="text-gray-300 mb-6">
                    Smart Shift Max dynamically boost CPU and GPU power allocation. Enhancing performance for numerous tasks while maximizing battery efficiency.
                  </p>
                  <video 
                    className="w-full rounded video-hover-play" 
                    loop 
                    muted
                    onClick={(e) => {
                      if (e.target.paused) {
                        e.target.play();
                      } else {
                        e.target.pause();
                      }
                    }}
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => e.target.pause()}
                  >
                    <source src={smartShiftVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* Smart Access Memory */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-green-500 mb-4">AMD Smart Access Memory™</h3>
                  <p className="text-gray-300 mb-6">
                    Smart Access Memory lets the CPU access the full GPU VRAM, increasing performance by reducing latency.
                  </p>
                  <video 
                    className="w-full rounded video-hover-play" 
                    loop 
                    muted
                    onClick={(e) => {
                      if (e.target.paused) {
                        e.target.play();
                      } else {
                        e.target.pause();
                      }
                    }}
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => e.target.pause()}
                  >
                    <source src={smartAccessVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Featured;
