import React, { useState, useRef, useEffect } from 'react';
import './AboutUs.css';
import lapbuboostLogo from '../images/LOGO.png';
import aboutStoreImage from '../images/aboutstoree.png';
import backgroundImage from '../images/background.png';
import FacebookIcon from './icons/FacebookIcon';
import InstagramIcon from './icons/InstagramIcon';
import TiktokIcon from './icons/TiktokIcon';
import emailjs from 'emailjs-com';

function AboutUs() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const form = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setEmailSent(false);
    setEmailError(false);
    
    // EmailJS configuration - using your provided credentials
    const serviceId = 'service_ijk7m8l'; // Your email service ID
    const adminTemplateId = 'template_o4qxkfu'; // Your admin notification template ID
    const userTemplateId = 'template_o4qxkfu'; // Template for user auto-reply (can be the same or different)
    const publicKey = 'YPxO9is53xhT5wBJa'; // Your public key
    
    // Get form values
    const userName = form.current.to_name.value;
    const userEmail = form.current.user_email.value;
    const userSubject = form.current.subject.value;
    const userMessage = form.current.user_message.value;
    
    // Create template params for admin notification
    const adminParams = {
      to_name: userName,
      from_name: 'Lapbuboost Team', // Setting the sender name to "Lapbuboost Team"
      user_email: userEmail,
      subject: userSubject,
      user_message: userMessage,
      reply_to: userEmail, // User's email for you to reply to
      to_email: 'markjerald2323@gmail.com' // Your email to receive messages
    };
    
    // Create template params for user copy/confirmation
    const userParams = {
      to_name: userName,
      from_name: 'Lapbuboost Team',
      user_email: userEmail,
      subject: `Copy of: ${userSubject}`,
      user_message: userMessage,
      reply_to: 'markjerald2323@gmail.com', // Your email as reply-to
      to_email: userEmail // Send to the user's email
    };
    
    // Send notification email to admin
    emailjs.send(serviceId, adminTemplateId, adminParams, publicKey)
      .then((result) => {
        console.log('Admin notification sent successfully:', result.text);
        
        // Send confirmation copy to the user
        return emailjs.send(serviceId, userTemplateId, userParams, publicKey);
      })
      .then((result) => {
        console.log('User confirmation sent successfully:', result.text);
        setEmailSent(true);
        setLoading(false);
        form.current.reset();
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
        setEmailError(true);
        setLoading(false);
      });
  };

  return (
    <div className="about-us-container relative min-h-screen bg-black overflow-hidden" 
         style={{
           backgroundImage: `url(${backgroundImage})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundAttachment: 'fixed'
         }}>
      {/* Dark overlay for better readability */}
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 pointer-events-none" style={{zIndex: 5}}></div>
      
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
          <a href="/gallery" className="text-white mx-6 hover:text-blue-400 nav-link">Gallery</a>
          <a href="/featured" className="text-white mx-6 hover:text-blue-400 nav-link">Featured</a>
          <a href="/products" className="text-white mx-6 hover:text-blue-400 nav-link">Products</a>
          <a href="/about" className="text-white mx-6 hover:text-blue-400 nav-link active">About Us</a>
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
            <a href="/" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link">Home</a>
            <a href="/gallery" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link">Gallery</a>
            <a href="/featured" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link">Featured</a>
            <a href="/products" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link">Products</a>
            <a href="/about" className="text-white py-3 w-full text-center hover:text-blue-400 nav-link active">About Us</a>
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
                <p className="text-gray-300 text-lg leading-relaxed">
                  Gaming laptops represent the perfect solution for the modern Filipino gamer who values both performance and mobility. In the Philippines, where internet cafes (computer shops) have traditionally dominated the gaming landscape, there's a growing shift toward personal gaming devices that offer the freedom to game anywhere.
                </p>
              </div>
            </div>
            
            {/* Right side - Store image */}
            <div className="lg:w-1/2">
              <img 
                src={aboutStoreImage} 
                alt="Lapbuboost Store" 
                className="rounded-lg shadow-2xl w-full store-image store-glow floating-store" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="social-media-section py-8 px-4 md:px-16 lg:px-24 mt-8 z-10 relative">
        <div className="container mx-auto">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-white text-center">Social Media:</h3>
          <div className="flex items-center justify-center flex-wrap">
            <div className="social-item flex items-center mx-4 my-2">
              <div className="social-icon w-12 h-12 flex items-center justify-center bg-blue-600 rounded-full">
                <FacebookIcon />
              </div>
              <span className="text-white ml-2">Lapbuboost</span>
            </div>
            <div className="social-item flex items-center mx-4 my-2">
              <div className="social-icon w-12 h-12 flex items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full">
                <InstagramIcon />
              </div>
              <span className="text-white ml-2">@lapbuboost</span>
            </div>
            <div className="social-item flex items-center mx-4 my-2">
              <div className="social-icon w-12 h-12 flex items-center justify-center bg-black rounded-full">
                <TiktokIcon />
              </div>
              <span className="text-white ml-2">@lapbuboost</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section py-16 px-4 md:px-16 lg:px-24 mt-8 z-10 relative">
        <div className="container mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Us</h2>
            <p className="text-blue-400 mt-2">We'd love to hear from you!</p>
          </div>
          
          <div className="max-w-2xl mx-auto contact-form-container">
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="form-header mb-6">
                <div className="form-logo flex items-center justify-center mb-4">
                  <img src={lapbuboostLogo} alt="Lapbuboost Logo" className="h-10 mr-2" />
                </div>
                <p className="text-gray-300 text-center text-sm">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-group">
                  <label htmlFor="to_name" className="text-gray-300 mb-2 font-medium flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    id="to_name" 
                    name="to_name" 
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="user_email" className="text-gray-300 mb-2 font-medium flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Your Email
                  </label>
                  <input 
                    type="email" 
                    id="user_email" 
                    name="user_email" 
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject" className="text-gray-300 mb-2 font-medium flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path>
                  </svg>
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  placeholder="Enter subject"
                  className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="user_message" className="text-gray-300 mb-2 font-medium flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                  </svg>
                  Message
                </label>
                <textarea 
                  id="user_message" 
                  name="user_message" 
                  rows="5" 
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 bg-gray-800 bg-opacity-50 text-white rounded-lg border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
              
              <div className="privacy-policy mt-4 mb-6">
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="mt-1 mr-2" 
                    required
                  />
                  <label htmlFor="privacy" className="text-gray-400 text-xs">
                    I agree that my submitted data is being collected and stored. Lapbuboost may use the information to respond to my inquiry.
                  </label>
                </div>
              </div>
              
              <div className="form-group flex justify-center">
                <button 
                  type="submit" 
                  className={`px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-bold transition duration-300 w-full md:w-64 shadow-lg ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center w-full">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                      </svg>
                      Send Message
                    </span>
                  )}
                </button>
              </div>
              
              <div className="form-messages flex justify-center w-full">
                {emailSent && (
                  <div className="mt-6 p-4 bg-green-500 bg-opacity-10 border border-green-500 text-green-400 rounded-lg flex items-center w-full md:w-2/3">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
                
                {emailError && (
                  <div className="mt-6 p-4 bg-red-500 bg-opacity-10 border border-red-500 text-red-400 rounded-lg flex items-center w-full md:w-2/3">
                    <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Error sending message. Please try again later.
                  </div>
                )}
              </div>
            </form>
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

export default AboutUs;
