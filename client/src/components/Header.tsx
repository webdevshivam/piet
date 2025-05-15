import { useState } from 'react';
import { Link } from 'wouter';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuState, setMobileSubmenuState] = useState({
    about: false,
    academics: false,
    admissions: false
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileSubmenu = (submenu: keyof typeof mobileSubmenuState) => {
    setMobileSubmenuState(prev => ({
      ...prev,
      [submenu]: !prev[submenu]
    }));
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+911414071500" className="text-sm hover:text-accent">
              <i className="fas fa-phone mr-2"></i>+91-141-4071500
            </a>
            <a href="mailto:info@poornima.org" className="text-sm hover:text-accent">
              <i className="fas fa-envelope mr-2"></i>info@poornima.org
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-sm hover:text-accent">Alumni</a>
            <a href="#" className="text-sm hover:text-accent">Careers</a>
            <a href="#" className="text-sm hover:text-accent">NIRF</a>
            <a href="#" className="text-sm hover:text-accent">NBA</a>
            <div className="flex space-x-2 ml-4">
              <a href="#" aria-label="Facebook" className="hover:text-accent">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-accent">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-accent">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:text-accent">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-accent">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto py-4 px-4 lg:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=70&q=80" 
              alt="Poornima Institute Logo" 
              className="h-16 mr-4"
            />
            <div>
              <h1 className="text-primary font-heading font-bold text-2xl leading-tight">Poornima Institute of</h1>
              <h2 className="text-secondary font-heading font-semibold text-xl leading-tight">Engineering & Technology</h2>
            </div>
          </div>
          
          <div className="flex mt-4 md:mt-0">
            <Link href="/apply">
              <a className="bg-secondary hover:bg-secondary-dark text-white font-semibold px-6 py-2 rounded-md transition duration-300 mr-3">
                Apply Now
              </a>
            </Link>
            <button 
              className="block md:hidden text-neutral-900 focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="bg-primary hidden md:block">
        <div className="container mx-auto">
          <ul className="flex flex-col md:flex-row justify-center">
            <li className="group relative">
              <Link href="/">
                <a className="block py-4 px-5 text-white hover:bg-primary-light font-medium">Home</a>
              </Link>
            </li>
            <li className="group relative">
              <a href="#" className="block py-4 px-5 text-white hover:bg-primary-light font-medium">About</a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg w-52 z-10">
                <Link href="/about">
                  <a className="block p-3 text-neutral-800 hover:bg-neutral-100">About PIET</a>
                </Link>
                <Link href="/vision">
                  <a className="block p-3 text-neutral-800 hover:bg-neutral-100">Vision & Mission</a>
                </Link>
                <Link href="/leadership">
                  <a className="block p-3 text-neutral-800 hover:bg-neutral-100">Leadership</a>
                </Link>
                <Link href="/infrastructure">
                  <a className="block p-3 text-neutral-800 hover:bg-neutral-100">Infrastructure</a>
                </Link>
              </div>
            </li>
            <li className="group relative">
              <a href="#" className="block py-4 px-5 text-white hover:bg-primary-light font-medium">Academics</a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg w-52 z-10">
                <Link href="/departments">
                  <a className="block p-3 text-neutral-800 hover:bg-neutral-100">Departments</a>
                </Link>
                <Link href="/programs">
                  <a className="block p-3 text-neutral-800 hover:bg-neutral-100">Programs Offered</a>
                </Link>
                <Link href="/calendar">
                  <a className="block p-3 text-neutral-800 hover:bg-neutral-100">Academic Calendar</a>
                </Link>
                <Link href="/examination">
                  <a className="block p-3 text-neutral-800 hover:bg-neutral-100">Examination</a>
                </Link>
              </div>
            </li>
            <li className="group relative">
              <a href="#" className="block py-4 px-5 text-white hover:bg-primary-light font-medium">Admissions</a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg w-52 z-10">
                <Link href="/admission-process">
                  <a className="block p-3 text-neutral-800 hover:bg-neutral-100">Admission Process</a>
                </Link>
                <Link href="/eligibility">
                  <a className="block p-3 text-neutral-800 hover:bg-neutral-100">Eligibility</a>
                </Link>
                <Link href="/fee-structure">
                  <a className="block p-3 text-neutral-800 hover:bg-neutral-100">Fee Structure</a>
                </Link>
                <Link href="/scholarships">
                  <a className="block p-3 text-neutral-800 hover:bg-neutral-100">Scholarships</a>
                </Link>
              </div>
            </li>
            <li className="group relative">
              <Link href="/research">
                <a className="block py-4 px-5 text-white hover:bg-primary-light font-medium">Research</a>
              </Link>
            </li>
            <li className="group relative">
              <Link href="/placements">
                <a className="block py-4 px-5 text-white hover:bg-primary-light font-medium">Placements</a>
              </Link>
            </li>
            <li className="group relative">
              <Link href="/campus-life">
                <a className="block py-4 px-5 text-white hover:bg-primary-light font-medium">Campus Life</a>
              </Link>
            </li>
            <li className="group relative">
              <Link href="/contact">
                <a className="block py-4 px-5 text-white hover:bg-primary-light font-medium">Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`bg-white shadow-lg md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="px-4">
          <li>
            <Link href="/">
              <a className="block py-3 border-b border-neutral-200">Home</a>
            </Link>
          </li>
          <li className="py-3 border-b border-neutral-200">
            <div className="flex justify-between items-center">
              <a href="#">About</a>
              <button 
                className="mobile-submenu-toggle"
                onClick={() => toggleMobileSubmenu('about')}
              >
                <i className={`fas fa-chevron-${mobileSubmenuState.about ? 'up' : 'down'}`}></i>
              </button>
            </div>
            <ul className={`pl-4 mt-2 ${mobileSubmenuState.about ? 'block' : 'hidden'}`}>
              <li><a href="#" className="block py-2">About PIET</a></li>
              <li><a href="#" className="block py-2">Vision & Mission</a></li>
              <li><a href="#" className="block py-2">Leadership</a></li>
              <li><a href="#" className="block py-2">Infrastructure</a></li>
            </ul>
          </li>
          <li className="py-3 border-b border-neutral-200">
            <div className="flex justify-between items-center">
              <a href="#">Academics</a>
              <button 
                className="mobile-submenu-toggle"
                onClick={() => toggleMobileSubmenu('academics')}
              >
                <i className={`fas fa-chevron-${mobileSubmenuState.academics ? 'up' : 'down'}`}></i>
              </button>
            </div>
            <ul className={`pl-4 mt-2 ${mobileSubmenuState.academics ? 'block' : 'hidden'}`}>
              <li><a href="#" className="block py-2">Departments</a></li>
              <li><a href="#" className="block py-2">Programs Offered</a></li>
              <li><a href="#" className="block py-2">Academic Calendar</a></li>
              <li><a href="#" className="block py-2">Examination</a></li>
            </ul>
          </li>
          <li className="py-3 border-b border-neutral-200">
            <div className="flex justify-between items-center">
              <a href="#">Admissions</a>
              <button 
                className="mobile-submenu-toggle"
                onClick={() => toggleMobileSubmenu('admissions')}
              >
                <i className={`fas fa-chevron-${mobileSubmenuState.admissions ? 'up' : 'down'}`}></i>
              </button>
            </div>
            <ul className={`pl-4 mt-2 ${mobileSubmenuState.admissions ? 'block' : 'hidden'}`}>
              <li><a href="#" className="block py-2">Admission Process</a></li>
              <li><a href="#" className="block py-2">Eligibility</a></li>
              <li><a href="#" className="block py-2">Fee Structure</a></li>
              <li><a href="#" className="block py-2">Scholarships</a></li>
            </ul>
          </li>
          <li><a href="#" className="block py-3 border-b border-neutral-200">Research</a></li>
          <li><a href="#" className="block py-3 border-b border-neutral-200">Placements</a></li>
          <li><a href="#" className="block py-3 border-b border-neutral-200">Campus Life</a></li>
          <li><a href="#" className="block py-3">Contact</a></li>
        </ul>
      </div>
    </header>
  );
}
