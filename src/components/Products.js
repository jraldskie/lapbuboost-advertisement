import React, { useState, useEffect } from 'react';
import './Products.css';
import lapbuboostLogo from '../images/LOGO.png';
import backgroundImage from '../images/background.png';

// Import laptop images
import rogStrixG15 from '../images/ROG STRIX G15.png';
import rogStrixG16 from '../images/ROG STRIX G16.png';
import rogStrixG17 from '../images/ROG STRIX G17.png';
import rogStrixG18 from '../images/ROG STRIX G18.png';
import asusTufA15 from '../images/ASUS TUF A15.png';
import asusTufA16 from '../images/ASUS TUF A16.png';
import asusTufDashF15 from '../images/ASUS TUF DASH F15.png';
import asusTufF15 from '../images/ASUS TUF F15.png';
import aorus15 from '../images/AORUS 15.png';
import aorus16 from '../images/AORUS 16.png';
import aorus16X from '../images/AORUS 16X.png';
import aorus17X from '../images/AORUS 17X.png';
import legion5Pro from '../images/LEGION 5 PRO.png';
import legion5i from '../images/LEGION 5i.png';
import legion9i from '../images/LEGION 9i.png';
import legionPro7i from '../images/LEGION PRO 7i.png';
import msiCyborg15 from '../images/MSI CYBORG 15.png';
import msiKatana15 from '../images/MSI KATANA 15.png';
import msiKatana17 from '../images/MSI KATANA 17.png';
import msiRaiderGE76 from '../images/MSI RAIDER GE76 .png';
import predatorHelios16 from '../images/PREDATOR HELIOS 16.png';
import predatorHelios18 from '../images/PREDATOR HELIOS 18.png';
import predatorHelios300 from '../images/PREDATOR HELIOS 300.png';
import predatorNeo1 from '../images/PREDATOR NEO 1.png';

// Import brand logos
import darkAorusLogo from '../images/darkaoruslogo.png';
import darkLegionLogo from '../images/darklegionlogo.png';
import darkMsiLogo from '../images/darkmsilogo.png';
import darkPredatorLogo from '../images/darkpredatorlogo.png';
import darkRogLogo from '../images/darkroglogo.png';
import darkTufLogo from '../images/darktuflogo.png';
import hoverAorusLogo from '../images/hoveraoruslogo.png';
import hoverLegionLogo from '../images/hoverlegionlogo.png';
import hoverMsiLogo from '../images/hovermsilogo.png';
import hoverPredatorLogo from '../images/hoverpredatorlogo.png';
import hoverRogLogo from '../images/hoverroglogo.png';
import hoverTufLogo from '../images/hovertuflogo.png';

function Products() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [hoveredBrand, setHoveredBrand] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('default');
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Laptop products data
  const products = [
    {
      id: 1,
      name: "ROG Strix G18",
      image: rogStrixG18,
      price: "₱154,995",
      specs: '18" QHD+ 240Hz IPS | i9-14900HX | RTX 4080 (12GB) | 32GB DDR5 | 2TB SSD | Windows 11 Home',
      brand: "rog"
    },
    {
      id: 2,
      name: "ROG Strix G16",
      image: rogStrixG16,
      price: "₱110,995",
      specs: '16" QHD+ 165Hz IPS | i9-14900HX | RTX 4060 (8GB) | 16GB DDR5 | 1TB SSD | Windows 11 Home',
      brand: "rog"
    },
    {
      id: 3,
      name: "ROG Strix G17",
      image: rogStrixG17,
      price: "₱95,999",
      specs: '17.3" QHD 240Hz IPS | AMD Ryzen 9 | RTX 4060 (8GB) | 16GB DDR5 | 1TB SSD | Windows 11 Home',
      brand: "rog"
    },
    {
      id: 4,
      name: "ROG Strix G15",
      image: rogStrixG15,
      price: "₱78,995",
      specs: '15.6" FHD 144Hz IPS | AMD Ryzen 7 | RTX 3050 Ti (4GB) | 16GB DDR5 | 512GB SSD | Windows 11 Home',
      brand: "rog"
    },
    {
      id: 5,
      name: "ASUS TUF A16",
      image: asusTufA16,
      price: "₱75,999",
      specs: '16" FHD+ 165Hz IPS | AMD Ryzen 7 | RTX 4060 (8GB) | 16GB DDR5 | 512GB SSD | Windows 11 Home',
      brand: "tuf"
    },
    {
      id: 6,
      name: "ASUS TUF A15",
      image: asusTufA15,
      price: "₱69,999",
      specs: '15.6" FHD 144Hz IPS | AMD Ryzen 7 | RTX 3050 (4GB) | 16GB DDR5 | 512GB SSD | Windows 11 Home',
      brand: "tuf"
    },
    {
      id: 7,
      name: "ASUS TUF DASH F15",
      image: asusTufDashF15,
      price: "₱65,995",
      specs: '15.6" FHD 144Hz IPS | i7-12650H | RTX 3050 (4GB) | 16GB DDR4 | 512GB SSD | Windows 11 Home',
      brand: "tuf"
    },
    {
      id: 8,
      name: "ASUS TUF F15",
      image: asusTufF15,
      price: "₱62,999",
      specs: '15.6" FHD 144Hz IPS | i5-12500H | RTX 3050 (4GB) | 16GB DDR4 | 512GB SSD | Windows 11 Home',
      brand: "tuf"
    },
    {
      id: 9,
      name: "AORUS 17X",
      image: aorus17X,
      price: "₱143,999",
      specs: '17.3" QHD 240Hz IPS | i9-13900HX | RTX 4090 (16GB) | 32GB DDR5 | 2TB SSD | Windows 11 Pro',
      brand: "aorus"
    },
    {
      id: 10,
      name: "AORUS 16",
      image: aorus16,
      price: "₱103,999",
      specs: '16" QHD+ 165Hz IPS | i9-13900H | RTX 4070 (8GB) | 16GB DDR5 | 1TB SSD | Windows 11 Home',
      brand: "aorus"
    },
    {
      id: 11,
      name: "AORUS 16X",
      image: aorus16X,
      price: "₱86,999",
      specs: '16" QHD+ 165Hz IPS | i7-13700H | RTX 4060 (8GB) | 16GB DDR5 | 1TB SSD | Windows 11 Home',
      brand: "aorus"
    },
    {
      id: 12,
      name: "AORUS 15",
      image: aorus15,
      price: "₱84,999",
      specs: '15.6" FHD 360Hz IPS | i7-12700H | RTX 3070 Ti (8GB) | 16GB DDR5 | 1TB SSD | Windows 11 Home',
      brand: "aorus"
    },
    {
      id: 13,
      name: "PREDATOR HELIOS 18",
      image: predatorHelios18,
      price: "₱135,999",
      specs: '18" QHD+ 240Hz IPS | i9-13900HX | RTX 4080 (12GB) | 32GB DDR5 | 2TB SSD | Windows 11 Home',
      brand: "predator"
    },
    {
      id: 14,
      name: "PREDATOR HELIOS 16",
      image: predatorHelios16,
      price: "₱105,999",
      specs: '16" QHD+ 240Hz IPS | i9-13900HX | RTX 4070 (8GB) | 16GB DDR5 | 1TB SSD | Windows 11 Home',
      brand: "predator"
    },
    {
      id: 15,
      name: "PREDATOR HELIOS 300",
      image: predatorHelios300,
      price: "₱79,999",
      specs: '15.6" QHD 165Hz IPS | i7-12700H | RTX 3060 (6GB) | 16GB DDR5 | 512GB SSD | Windows 11 Home',
      brand: "predator"
    },
    {
      id: 16,
      name: "PREDATOR NEO 16",
      image: predatorNeo1,
      price: "₱82,999",
      specs: '16" WUXGA 165Hz IPS | i7-13700HX | RTX 4050 (6GB) | 16GB DDR5 | 512GB SSD | Windows 11 Home',
      brand: "predator"
    },
    {
      id: 17,
      name: "Legion 9i",
      image: legion9i,
      price: "₱235,999",
      specs: '16" 3.2K Mini-LED | i9-13980HX | RTX 4090 (16GB) | 32GB DDR5 | 2TB SSD | Windows 11 Pro',
      brand: "legion"
    },
    {
      id: 18,
      name: "Legion Pro 7i",
      image: legionPro7i,
      price: "₱199,999",
      specs: '16" WQXGA Mini-LED | i9-13900HX | RTX 4090 (16GB) | 32GB DDR5 | 2TB SSD | Windows 11 Pro',
      brand: "legion"
    },
    {
      id: 19,
      name: "Legion 5 Pro",
      image: legion5Pro,
      price: "₱96,999",
      specs: '16" WQXGA 240Hz IPS | i7-13700H | RTX 4060 (8GB) | 16GB DDR5 | 1TB SSD | Windows 11 Home',
      brand: "legion"
    },
    {
      id: 20,
      name: "Legion 5i",
      image: legion5i,
      price: "₱79,999",
      specs: '15.6" WQHD 165Hz IPS | i7-12700H | RTX 3060 (6GB) | 16GB DDR5 | 512GB SSD | Windows 11 Home',
      brand: "legion"
    },
    {
      id: 21,
      name: "MSI Raider GE76",
      image: msiRaiderGE76,
      price: "₱172,999",
      specs: '17.3" UHD 120Hz IPS | i9-12900HK | RTX 3080 Ti (16GB) | 32GB DDR5 | 2TB SSD | Windows 11 Pro',
      brand: "msi"
    },
    {
      id: 22,
      name: "MSI Katana 15",
      image: msiKatana15,
      price: "₱65,950",
      specs: '15.6" FHD 144Hz IPS | i7-13620H | RTX 4050 (6GB) | 16GB DDR5 | 512GB SSD | Windows 11 Home',
      brand: "msi"
    },
    {
      id: 23,
      name: "MSI Katana 17",
      image: msiKatana17,
      price: "₱70,995",
      specs: '17.3" FHD 144Hz IPS | i7-13620H | RTX 4060 (8GB) | 16GB DDR5 | 512GB SSD | Windows 11 Home',
      brand: "msi"
    },
    {
      id: 24,
      name: "MSI Cyborg 15",
      image: msiCyborg15,
      price: "₱54,995",
      specs: '15.6" FHD 144Hz IPS | i5-12450H | RTX 4050 (6GB) | 8GB DDR5 | 512GB SSD | Windows 11 Home',
      brand: "msi"
    },
  ];

  // Filter products based on selected brand and search term
  const filteredProducts = products
    .filter(product => selectedBrand === 'all' || product.brand === selectedBrand)
    .filter(product => {
      if (!searchTerm) return true;
      const searchTermLower = searchTerm.toLowerCase();
      return (
        product.name.toLowerCase().includes(searchTermLower) ||
        product.specs.toLowerCase().includes(searchTermLower) ||
        product.price.toLowerCase().includes(searchTermLower)
      );
    });

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low-high':
        return parseFloat(a.price.replace('₱', '').replace(',', '')) - 
               parseFloat(b.price.replace('₱', '').replace(',', ''));
      case 'price-high-low':
        return parseFloat(b.price.replace('₱', '').replace(',', '')) - 
               parseFloat(a.price.replace('₱', '').replace(',', ''));
      case 'name-a-z':
        return a.name.localeCompare(b.name);
      case 'name-z-a':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  // Brand logos configuration
  const brandLogos = [
    { id: 'rog', dark: darkRogLogo, hover: hoverRogLogo, name: 'Republic of Gamers' },
    { id: 'tuf', dark: darkTufLogo, hover: hoverTufLogo, name: 'TUF Gaming' },
    { id: 'aorus', dark: darkAorusLogo, hover: hoverAorusLogo, name: 'AORUS' },
    { id: 'predator', dark: darkPredatorLogo, hover: hoverPredatorLogo, name: 'Predator' },
    { id: 'legion', dark: darkLegionLogo, hover: hoverLegionLogo, name: 'Legion' },
    { id: 'msi', dark: darkMsiLogo, hover: hoverMsiLogo, name: 'MSI' },
  ];

  return (
    <div className="products-container min-h-screen bg-black text-white overflow-hidden"
         style={{
           backgroundImage: `url(${backgroundImage})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundAttachment: 'fixed'
         }}>
      {/* Dark overlay for better readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 pointer-events-none" style={{zIndex: 5}}></div>
      
      {/* Desktop Navigation */}
      <header className="hidden md:flex justify-between items-center px-8 py-5 relative" style={{zIndex: 10}}>
        <div className="flex items-center">
          <a href="/">
            <img src={lapbuboostLogo} alt="Lapbuboost Logo" className="h-12 mr-2" />
          </a>
          <h1 className="text-white text-xl font-bold">LAPBUBOOST</h1>
        </div>
        <nav className="flex">
          <a href="/" className="text-white mx-6 hover:text-blue-400 nav-link">Home</a>
          <a href="/gallery" className="text-white mx-6 hover:text-blue-400 nav-link">Gallery</a>
          <a href="/featured" className="text-white mx-6 hover:text-blue-400 nav-link">Featured</a>
          <a href="/products" className="text-white mx-6 hover:text-blue-400 nav-link active">Products</a>
          <a href="/about" className="text-white mx-6 hover:text-blue-400 nav-link">About Us</a>
        </nav>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden relative" style={{zIndex: 10}}>
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
            <a href="/gallery" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link">Gallery</a>
            <a href="/featured" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link">Featured</a>
            <a href="/products" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link active">Products</a>
            <a href="/about" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link">About Us</a>
            
            {/* Brand filters in mobile menu */}
            <div className="mobile-brand-filters mt-4 border-t border-gray-700 pt-4 w-full px-4">
              <h3 className="text-center text-gray-400 mb-3 text-sm">Filter by Brand</h3>
              <div className="grid grid-cols-3 gap-2">
                <div 
                  onClick={() => {
                    handleBrandClick('all');
                    toggleMobileMenu();
                  }}
                  className={`mobile-filter-item text-center py-2 px-1 ${selectedBrand === 'all' ? 'active' : ''}`}
                >
                  <span className="text-sm">All Brands</span>
                </div>
                
                {brandLogos.map((brand) => (
                  <div 
                    key={brand.id}
                    onClick={() => {
                      handleBrandClick(brand.id);
                      toggleMobileMenu();
                    }}
                    className={`mobile-filter-item text-center py-2 px-1 ${selectedBrand === brand.id ? 'active' : ''}`}
                  >
                    <img 
                      src={selectedBrand === brand.id ? brand.hover : brand.dark} 
                      alt={`${brand.name} Logo`}
                      className="h-6 mx-auto mb-1"
                    />
                    <span className="text-xs">{brand.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content relative px-4 md:px-8 pt-6 pb-12" style={{zIndex: 10}}>
        <div className="container mx-auto">
          {/* Search and Filter Controls */}
          <div className="search-filter-container mb-8">
            <div className="search-bar mb-6">
              <div className="max-w-md mx-auto">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search products..."
                    className="w-full bg-gray-800 bg-opacity-70 text-white border border-gray-600 rounded-lg py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
                  />
                  <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                  {searchTerm && (
                    <button 
                      onClick={() => setSearchTerm('')} 
                      className="absolute right-3 text-gray-400 hover:text-white"
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <div>
                <h2 className="text-2xl font-bold mb-1">Our Gaming Laptops</h2>
                <p className="text-gray-400 text-sm">
                  {sortedProducts.length} {sortedProducts.length === 1 ? 'product' : 'products'} found
                  {selectedBrand !== 'all' && brandLogos.find(b => b.id === selectedBrand) ? 
                    ` in ${brandLogos.find(b => b.id === selectedBrand).name}` : 
                    searchTerm ? ' matching your search' : ''
                  }
                </p>
              </div>
              <div className="sort-options">
                <select 
                  value={sortOption} 
                  onChange={handleSortChange}
                  className="bg-gray-800 bg-opacity-70 text-white border border-gray-600 rounded-lg py-2 px-4 focus:outline-none focus:border-blue-500"
                >
                  <option value="default">Sort By: Default</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="name-a-z">Name: A to Z</option>
                  <option value="name-z-a">Name: Z to A</option>
                </select>
              </div>
            </div>
          </div>

          {/* Brand Filter Section */}
          <div className="brand-filter mb-6">
            <div className="flex flex-wrap justify-center items-center">
              <div 
                onClick={() => handleBrandClick('all')} 
                className={`filter-item m-2 text-center cursor-pointer ${selectedBrand === 'all' ? 'active' : ''}`}
              >
                <h3 className="text-lg font-medium mb-1">Show All</h3>
              </div>
              
              {brandLogos.map((brand) => (
                <div 
                  key={brand.id}
                  onClick={() => handleBrandClick(brand.id)}
                  onMouseEnter={() => setHoveredBrand(brand.id)}
                  onMouseLeave={() => setHoveredBrand(null)}
                  className={`filter-item m-2 text-center cursor-pointer ${selectedBrand === brand.id ? 'active' : ''}`}
                >
                  <img 
                    src={hoveredBrand === brand.id || selectedBrand === brand.id ? brand.hover : brand.dark} 
                    alt={`${brand.name} Logo`}
                    className="h-8 mx-auto transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="products-wrapper">
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="product-card bg-gray-900 bg-opacity-70 rounded-lg overflow-hidden hover:bg-opacity-90 transition duration-300">
                    <div className="product-image bg-gradient-to-b from-gray-800 to-black p-3 flex items-center justify-center">
                      <img src={product.image} alt={product.name} className="w-full object-contain max-h-40" />
                    </div>
                    <div className="product-info p-4">
                      <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                      <p className="text-blue-400 font-bold text-xl mb-2">{product.price}</p>
                      <p className="text-gray-400 text-xs mb-3">{product.specs}</p>
                      <div className="brand-logo mt-2 flex justify-end">
                        <img 
                          src={brandLogos.find(brand => brand.id === product.brand)?.hover} 
                          alt={`${product.brand} Logo`} 
                          className="h-4 opacity-50"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results bg-gray-900 bg-opacity-50 rounded-lg p-8 text-center">
                <svg className="w-16 h-16 mx-auto text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className="text-xl font-bold mb-2">No Products Found</h3>
                <p className="text-gray-400 mb-4">We couldn't find any products matching your search criteria.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedBrand('all');
                    setSortOption('default');
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-300"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="py-6 text-center text-gray-400 text-sm relative" style={{zIndex: 10}}>
        <p>© 2025 Lapbuboost. All Rights Reserved.</p>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button 
          onClick={scrollToTop} 
          className="back-to-top fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      )}
      
      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop} 
        className={`back-to-top fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${showBackToTop ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </div>
  );
}

export default Products;
