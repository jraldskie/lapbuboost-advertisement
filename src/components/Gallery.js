import React, { useState } from 'react';
import './Gallery.css';
import lapbuboostLogo from '../images/LOGO.png';
import backgroundImage from '../images/background.png';

// Brand logos
import roglogo from '../images/roglogo.png';
import predatorlogo from '../images/predatorlogo.png';
import msilogo from '../images/msilogo.png';
import legionlogo from '../images/legionlogo.png';
import aoruslogo from '../images/aoruslogo.png';
import tuflogo from '../images/tuflogo.png';

// Laptop images
import rog from '../images/rog.png';
import tuf from '../images/tuf.png';
import aorus from '../images/aorus.png';
import predator from '../images/predator.png';
import legion from '../images/LEGION.png';
import msi from '../images/msi.png';

// Spec icons
import nvidialogo from '../images/nvidialogo.png';
import ssdlogo from '../images/ssdlogo.png';
import intellogo from '../images/intellogo.png';
import amdlogo from '../images/amdlogo.png';
import displaylogo from '../images/displaylogo.png';
import mediumdisplaylogo from '../images/mediumdisplaylogo.png';
import bigdisplaylogo from '../images/bigdisplaylogo.png';

function Gallery() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const laptops = [
    {
      brandLogo: roglogo,
      brandText: 'REPUBLIC OF GAMERS',
      model: 'ROG STRIX G18',
      tagline: 'RAISE YOUR GAME. CARRY YOUR SQUAD.',
      description: 'Draw more frames and win more games with the brand new Strix G18 and Windows 11 Pro. Powered by up to a 13th Gen Intel® Core™ i9-13980HX Processor and up to an NVIDIA GeForce RTX 4080 Laptop GPU boasting a max TGP of 175W with Dynamic Boost, be ready to dominate the competition in all of the latest games. Backed up with a dedicated MUX Switch and NVIDIA Advanced Optimus support, the Strix G18 unlocks the true potential of its hardware. With PCIe Gen4x4 SSD storage and up to 32GB of 4800MHz DDR5 RAM, large game libraries and intense multitasking sessions are a breeze for this gaming machine.',
      cpu: 'i9-13980HX',
      cpuLogo: intellogo,
      cpuLabel: 'Intel®Core™',
      gpu: 'RTX™ 4080',
      gpuLogo: nvidialogo,
      gpuLabel: 'NVIDIA® GeForce',
      ssd: '2TB SSD',
      ssdLogo: ssdlogo,
      ssdLabel: 'PCIe® Gen 4x4',
      display: '240Hz WQXGA',
      displayLogo: bigdisplaylogo,
      displayLabel: 'Display',
      image: rog,
      taglineColor: '#ff0050',
      glowColor: 'rgba(255, 0, 80, 0.7)'
    },
    {
      brandLogo: tuflogo,
      brandText: 'TUF GAMING',
      model: 'ASUS TUF A16',
      tagline: 'EXPANSIVE IMMERSION. MECHANIZED PERFORMANCE.',
      description: 'The 2024 TUF Gaming A16 retains its classic TUF styling, with a few new touches. The Mecha Grey variant sports an embossed TUF logo, while the Jaeger Gray editions have a stylish laser engraved logo. Dive right into gaming and creating on Windows 11 with the AMD Ryzen™ 9 7845HX and up to an NVIDIA® GeForce RTX™ 4070 Laptop GPU with support for NVIDIA® Advanced Optimus. The 2024 TUF Gaming A16 also sports high-speed DDR5-5200MHz RAM and dual PCIe Gen 4x4 M.2 SSD slots, with all slots easily accessible for future upgrades and expansion.',
      cpu: 'R9-7845HX',
      cpuLogo: amdlogo,
      cpuLabel: 'AMD Ryzen™',
      gpu: 'RTX™ 4070',
      gpuLogo: nvidialogo,
      gpuLabel: 'NVIDIA® GeForce',
      ssd: '2TB SSD',
      ssdLogo: ssdlogo,
      ssdLabel: 'PCIe® Gen 4x4',
      display: '165Hz FHD',
      displayLogo: displaylogo,
      displayLabel: 'Display',
      image: tuf,
      taglineColor: '#ffeb00',
      glowColor: 'rgba(255, 235, 0, 0.7)'
    },
    {
      brandLogo: aoruslogo,
      brandText: 'AORUS',
      model: 'AORUS 17X',
      tagline: 'THE FINELY CRAFTED FLAGSHIP GAMING LAPTOP',
      description: 'The new AORUS 17X is equipped with the 13th gen Intel® Core™ i9-13980HX processor and the max TGP NVIDIA® GeForce RTX™ 4090 laptop GPU, providing unbeatable performance. Dynamic Display Switch (DDS) technology and the market\'s highest-spec DDR5-5600 memory provide higher frame rates, and the powerful cooling technology allows the chassis to be unbelievably thin, dominating the gaming world with overwhelming performance. Enjoy sharp and precise game graphics through the AORUS 17X\'s high resolution and high refresh rate screen, which perfectly balances the QHD 240Hz sharp images and smoothness.',
      cpu: 'i9-13980HX',
      cpuLogo: intellogo,
      cpuLabel: 'Intel®Core™',
      gpu: 'RTX™ 4090',
      gpuLogo: nvidialogo,
      gpuLabel: 'NVIDIA® GeForce',
      ssd: '2TB SSD',
      ssdLogo: ssdlogo,
      ssdLabel: 'PCIe® Gen 4x4',
      display: '240Hz QHD',
      displayLogo: mediumdisplaylogo,
      displayLabel: 'Display',
      image: aorus,
      taglineColor: '#ff9000',
      glowColor: 'rgba(255, 144, 0, 0.7)'
    },
    {
      brandLogo: predatorlogo,
      brandText: 'PREDATOR',
      model: 'PREDATOR HELIOS 18',
      tagline: 'FORGE YOUR GALACTIC DESTINY',
      description: 'Step into next-gen gaming with the Helios 18 AI gaming laptop / PC, powered by DLSS 3.5. Unleash peak performance with cutting-edge cooling, a radiant Mini LED display, and the precision of MagKey 3.0 keycaps: MagClick and MagSpeed. ntel® Core™ processors (14th Gen) feature newly optimized hybrid architecture and industry-leading technology that enables you to go beyond gaming and creation. With Intel, you can do it all. From progressing in the game to advancing in real life, Intel empowers you to be your best self. NVIDIA® GeForce RTX™ 40 Series Laptop GPUs are beyond fast for gamers and creators.',
      cpu: 'i9-14900HX',
      cpuLogo: intellogo,
      cpuLabel: 'Intel®Core™',
      gpu: 'RTX™ 4090',
      gpuLogo: nvidialogo,
      gpuLabel: 'NVIDIA® GeForce',
      ssd: '2TB SSD',
      ssdLogo: ssdlogo,
      ssdLabel: 'PCIe® Gen 4x4',
      display: '250Hz Mini LED',
      displayLogo: bigdisplaylogo,
      displayLabel: 'Display',
      image: predator,
      taglineColor: '#00ffff',
      glowColor: 'rgba(0, 255, 255, 0.7)'
    },
    {
      brandLogo: legionlogo,
      brandText: 'LEGION',
      model: 'LENOVO LEGION 9i',
      tagline: 'LIQUID COOLED. AI TUNED. YOUR FUTURE IS FORGED.',
      description: 'Experience the laptop that\'s changing the entire PC gaming industry, with revolutionary liquid cooling tech, AI features, and more. Intel\'s® latest hybrid architecture, paired with industry-leading features, delivers the ultimate gaming experience. Stream, create, and compete at the highest levels—Intel® Core™ processors push your gameplay beyond performance, giving you the power to do it all. GeForce RTX™ 40 Series Laptop GPUs deliver a quantum leap in performance with AI-powered DLSS 3. They enable lifelike virtual worlds with ray tracing and are thin, light, and quiet, thanks to Max-Q technologies.',
      cpu: 'i9-14900HX',
      cpuLogo: intellogo,
      cpuLabel: 'Intel®Core™',
      gpu: 'RTX™ 4090',
      gpuLogo: nvidialogo,
      gpuLabel: 'NVIDIA® GeForce',
      ssd: '2TB SSD',
      ssdLogo: ssdlogo,
      ssdLabel: 'PCIe® Gen 4x4',
      display: '165Hz Mini LED',
      displayLogo: displaylogo,
      displayLabel: 'Display',
      image: legion,
      taglineColor: '#00d4ff',
      glowColor: 'rgba(0, 212, 255, 0.7)'
    },
    {
      brandLogo: msilogo,
      brandText: 'MSI',
      model: 'MSI RAIDER GE76',
      tagline: 'OVERBOOST TECHNOLOGY UNLEASH THE POWER',
      description: 'The Raider series is the pinnacle of performance with features to lead you beyond infinity. With the latest 14th Gen. Intel® Core™ i9-14900HX, the Raider GE76 provides unprecedented boost in your multitasking projects and performance demanding games. NVIDIA® GeForce RTX™ 40 Series Laptop GPUs power the world\'s fastest laptops for gamers and creators. They\'re built with Ampere—NVIDIA\'s 2nd gen RTX architecture—to give you the most realistic ray-traced graphics and cutting-edge AI features like NVIDIA DLSS. Plus, Max-Q Technologies unleash the power of AI to make thin, high-performance laptops that are faster and better than ever.',
      cpu: 'i9-14900HX',
      cpuLogo: intellogo,
      cpuLabel: 'Intel®Core™',
      gpu: 'RTX™ 4090',
      gpuLogo: nvidialogo,
      gpuLabel: 'NVIDIA® GeForce',
      ssd: '2TB SSD',
      ssdLogo: ssdlogo,
      ssdLabel: 'PCIe® Gen 4x4',
      display: '300Hz FHD',
      displayLogo: mediumdisplaylogo,
      displayLabel: 'Display',
      image: msi,
      taglineColor: '#ff0000',
      glowColor: 'rgba(255, 0, 0, 0.7)'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % laptops.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + laptops.length) % laptops.length);
  };

  const currentLaptop = laptops[currentSlide];

  return (
    <div className="gallery-container min-h-screen bg-black text-white overflow-hidden"
         style={{
           backgroundImage: `url(${backgroundImage})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundAttachment: 'fixed'
         }}>
      {/* Dark overlay for better readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 pointer-events-none" style={{zIndex: 5}}></div>
      
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
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''} bg-black bg-opacity-90 backdrop-blur-sm fixed top-16 left-0 right-0 z-30 transition-all duration-300`}>
          <nav className="flex flex-col items-center py-5">
            <a href="/" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link">Home</a>
            <a href="/gallery" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link active">Gallery</a>
            <a href="/featured" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link">Featured</a>
            <a href="/products" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link">Products</a>
            <a href="/about" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link">About Us</a>
          </nav>
        </div>
      </div>

      {/* Laptop Showcase Slider */}
      <div className="laptop-showcase relative z-10">
        <div className="showcase-content">
          {/* Left Content Section */}
          <div className="content-left">
            <div className="brand-logo-container">
              <img src={currentLaptop.brandLogo} alt={currentLaptop.brandText} className="brand-logo" />
            </div>
            
            <h2 className="laptop-model">{currentLaptop.model}</h2>
            
            <h3 className="laptop-tagline" style={{ color: currentLaptop.taglineColor }}>
              {currentLaptop.tagline}
            </h3>
            
            <p className="laptop-description">
              {currentLaptop.description}
            </p>

            {/* Specifications Grid */}
            <div className="specs-grid">
              {/* CPU Spec */}
              <div className="spec-item">
                <div className={`spec-label ${currentLaptop.cpuLabel.includes('Intel') ? 'intel-label' : currentLaptop.cpuLabel.includes('AMD') ? 'amd-label' : ''}`}>
                  {currentLaptop.cpuLabel}
                </div>
                <div className="spec-value">{currentLaptop.cpu}</div>
                <div className="spec-icon">
                  <img src={currentLaptop.cpuLogo} alt="CPU" />
                </div>
              </div>

              {/* GPU Spec */}
              <div className="spec-item">
                <div className="spec-label nvidia-label">{currentLaptop.gpuLabel}</div>
                <div className="spec-value">{currentLaptop.gpu}</div>
                <div className="spec-icon">
                  <img src={currentLaptop.gpuLogo} alt="GPU" />
                </div>
              </div>

              {/* SSD Spec */}
              <div className="spec-item">
                <div className="spec-label">{currentLaptop.ssdLabel}</div>
                <div className="spec-value">{currentLaptop.ssd}</div>
                <div className="spec-icon">
                  <img src={currentLaptop.ssdLogo} alt="SSD" />
                </div>
              </div>

              {/* Display Spec */}
              <div className="spec-item">
                <div className="spec-label">{currentLaptop.displayLabel}</div>
                <div className="spec-value">{currentLaptop.display}</div>
                <div className="spec-icon">
                  <img src={currentLaptop.displayLogo} alt="Display" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="content-right">
            <div className="laptop-image-container">
              <img 
                src={currentLaptop.image} 
                alt={currentLaptop.model} 
                className="laptop-image floating-laptop" 
                style={{
                  filter: `drop-shadow(0 0 8px ${currentLaptop.glowColor}) drop-shadow(0 0 15px ${currentLaptop.glowColor})`
                }}
              />
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button className="nav-arrow nav-arrow-left" onClick={prevSlide} aria-label="Previous laptop">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="nav-arrow nav-arrow-right" onClick={nextSlide} aria-label="Next laptop">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-sm relative" style={{zIndex: 10}}>
        <p>© 2025 Lapbuboost. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Gallery;
