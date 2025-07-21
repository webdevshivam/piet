import { useState } from "react";
import { Link, useLocation } from "wouter";
import LazyImage from "./LazyImage";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuState, setMobileSubmenuState] = useState({
    about: false,
    academics: false,
    admissions: false,
  });

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileSubmenu = (submenu: keyof typeof mobileSubmenuState) => {
    setMobileSubmenuState((prev) => ({
      ...prev,
      [submenu]: !prev[submenu],
    }));
  };

  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [, setLocation] = useLocation();


  const toggleSearchModal = () => {
    setSearchOpen(!isSearchOpen);
    setSearchTerm("");
  };


  const searchItems = [
    { title: "Home", description: "Apply for new courses", link: "/" },
    { title: "Admissions", description: "Apply for new courses", link: "/apply" },
    { title: "Courses", description: "View all available courses", link: "/courses" },
    { title: "Faculty", description: "Meet our educators", link: "/faculty" },
    { title: "Events", description: "Upcoming campus events", link: "/events" },
    { title: "Library", description: "Explore resources and books", link: "/library" },
    { title: "E-Library", description: "Access digital resources and journals", link: "/e-library" },
    { title: "About Us", description: "Learn about our institution", link: "/about" },

  ];

  const filteredResults = searchTerm
    ? searchItems.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : searchItems.slice(0, 5);



  const handleResultClick = (link) => {
    setLocation(link);
    toggleSearchModal();
  };
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gradient-primary text-white py-2 px-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <a
              href="tel:+911414071500"
              className="text-sm hover:text-accent-light transition-colors"
            >
              <i className="fas fa-phone mr-2"></i>+91-141-4071500
            </a>
            <a
              href="mailto:info@poornima.org"
              className="text-sm hover:text-accent-light transition-colors"
            >
              <i className="fas fa-envelope mr-2"></i>info@poornima.org
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <Link
                to="/alumni"
                className="text-sm hover:text-accent-light transition-colors"
              >
                Alumni
              </Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md overflow-hidden z-10 mt-1 w-48">
                <Link
                  to="/alumni"
                  className="block px-4 py-2 text-sm text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  Alumni Home
                </Link>
                <Link
                  to="/alumni-registration"
                  className="block px-4 py-2 text-sm text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  Alumni Registration
                </Link>
              </div>
            </div>
            <Link
              to="/careers"
              className="text-sm hover:text-accent-light transition-colors"
            >
              Careers
            </Link>
            <Link
              to="/e-library"
              className="text-sm hover:text-accent-light transition-colors"
            >
              E-Library
            </Link>
            <Link
              to="/nirf"
              className="text-sm hover:text-accent-light transition-colors"
            >
              NIRF
            </Link>
            <Link
              to="/nba"
              className="text-sm hover:text-accent-light transition-colors"
            >
              NBA
            </Link>
            <Link
              to="/iqac"
              className="text-sm hover:text-accent-light transition-colors"
            >
              IQAC
            </Link>
            <div className="flex space-x-3 ml-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:text-accent-light transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="hover:text-accent-light transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:text-accent-light transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="hover:text-accent-light transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://youtube.com"
                aria-label="YouTube"
                className="hover:text-accent-light transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
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
            <div className="w-full">
              <LazyImage
                src={'https://www.piet.poornima.org/images/pietlogo.png'}
                alt={'NAAC Accreditation'}
                className="w-full max-w-md md:max-w-lg object-contain"
              />
            </div>

          </div>

          <div className="flex mt-4 md:mt-0">
            <Link
              href="/apply"
              className="btn-secondary mr-3 rounded-lg shadow-md hover-lift"
            >
              <i className="fas fa-graduation-cap mr-2"></i> Apply Now
            </Link>
            <button
              onClick={toggleSearchModal}
              className="text-primary hover:text-secondary mr-3 focus:outline-none"
              aria-label="Open search"
            >
              <i className="fas fa-search text-xl"></i>
            </button>
            <button
              className="block md:hidden text-primary focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gradient-primary hidden md:block">
        <div className=" mx-auto">
          <ul className="flex flex-col md:flex-row justify-center">
            <li className="group relative">
              <Link
                href="/"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors"
              >
                <i className="fas fa-home mr-2"></i>Home
              </Link>
            </li>
            <li className="group relative">

              <a href="#"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors"
              >
                <i className="fas fa-university mr-2"></i>About
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg w-56 rounded-md overflow-hidden z-10 transition-all duration-300">
                <Link
                  href="/about"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-info-circle mr-2"></i>About PIET
                </Link>
                <Link
                  href="/recognization"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-certificate mr-2"></i>Recognition
                </Link>
                <Link
                  href="/leadership"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-chart-line mr-2"></i>Development Plan
                </Link>
                <Link
                  href="/annual-reports"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-file-alt mr-2"></i>Annual Report
                </Link>
                <Link
                  href="/annual-accounts"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-calculator mr-2"></i>Annual Account
                </Link>
                <Link
                  href="/sponsering-body"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-handshake mr-2"></i>Sponsoring Body
                </Link>
                <Link
                  href="/advisery-board"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-users-cog mr-2"></i>Advisory Board
                </Link>
                <Link
                  href="/infrastructure"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-network-wired mr-2"></i>Outreach Plan
                </Link>
                <Link
                  href="/infrastructure"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-comments mr-2"></i>Messages
                </Link>

              </div>
            </li>
            <li className="group relative">

              <a href="#"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors"
              >
                <i className="fas fa-university mr-2"></i>Adminstrator
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg w-56 rounded-md overflow-hidden z-10 transition-all duration-300">

                <Link href="/director-message" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-user-tie mr-2"></i>Principal
                </Link>

                <Link href="/registar-message" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-clipboard-user mr-2"></i>Registrar
                </Link>

                <Link href="/coe-message" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-clipboard-check mr-2"></i>Controller
                </Link>

                <Link href="/governing-council" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-users-cog mr-2"></i>Council
                </Link>

                <Link
                  href="/complaints"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-exclamation-triangle mr-2"></i>Complaints
                </Link>

                <Link
                  href="/complaints-registration"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-edit mr-2"></i>Submit Complaint
                </Link>

                <Link href="/management" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-users mr-2"></i>Management
                </Link>

                <Link href="/committees" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-sitemap mr-2"></i>Committees
                </Link>

                <Link href="/nep" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-book mr-2"></i>NEP 2020
                </Link>

                <Link href="/organogram" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-project-diagram mr-2"></i>Organogram
                </Link>

                <Link href="/obe" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-cogs mr-2"></i>OBE
                </Link>

                <Link href="/rules-regulation" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-gavel mr-2"></i>Rules
                </Link>

                <Link href="/teaching" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-chalkboard-teacher mr-2"></i>Teaching
                </Link>

              </div>
            </li>
            <li className="group relative">
              <a
                href="#"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors"
              >
                <i className="fas fa-book-open mr-2"></i>Academics
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg w-56 rounded-md overflow-hidden z-10 transition-all duration-300">
                <Link
                  href="/calendar"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-calendar-alt mr-2"></i>Academic Calendar
                </Link>
                <Link
                  href="/applied-sceince"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-flask mr-2"></i>Applied Sciences
                </Link>
                <Link
                  href="/artificial-intelligence"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-robot mr-2"></i>AI & Data Science
                </Link>
                <Link
                  href="/computer-science"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-laptop-code mr-2"></i>Computer Eng.
                </Link>

                <Link
                  href="/dep-iot"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-wifi mr-2"></i>Internet of Things
                </Link>
                <Link
                  href="/collbration"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-handshake mr-2"></i>Collaborations
                </Link>
              </div>
            </li>
            <li className="group relative">
              <a href="#"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors"
              >
                <i className="fas fa-microscope mr-2"></i>Research
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg w-56 rounded-md overflow-hidden z-10 transition-all duration-300">
                <Link href="/research-development" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-microscope mr-2"></i>R&D Cell
                </Link>

                <Link href="/pbic" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-seedling mr-2"></i>Business Incubation
                </Link>

                <Link href="/ideal-lab" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-lightbulb mr-2"></i>IDEA Lab
                </Link>

                <Link href="/conferences" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-users mr-2"></i>Conference
                </Link>

                <Link href="/funding" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-hand-holding-usd mr-2"></i>Fundings
                </Link>

                <Link href="/iprs" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-shield-alt mr-2"></i>IPRs
                </Link>

                <Link href="/activities" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-chart-line mr-2"></i>Research Activities
                </Link>

                <Link href="/publications" className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors">
                  <i className="fas fa-book-open mr-2"></i>Publications
                </Link>
              </div>
            </li>
            <li className="group relative">
              <a
                href="#"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors"
              >
                <i className="fas fa-certificate mr-2"></i>Accreditation
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg w-56 rounded-md overflow-hidden z-10 transition-all duration-300">
                <Link
                  href="/research"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-university mr-2"></i>AISHE
                </Link>

                <Link
                  href="/incubation"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-certificate mr-2"></i>ISO Certificate
                </Link>

                <Link
                  href="/idealab"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-star mr-2"></i>NAAC Grade ‘A’
                </Link>

                <Link
                  href="/conference"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-award mr-2"></i>NBA
                </Link>

                <Link
                  href="/fundings"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-chart-bar mr-2"></i>NIRF
                </Link>

                <Link
                  href="/ipr"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-globe-americas mr-2"></i>QS I-Gauge
                </Link>

                <Link
                  href="/activities"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-trophy mr-2"></i>QIV Ranking
                </Link>

                <Link
                  href="/publications"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-book mr-2"></i>Times Ranking
                </Link>
              </div>
            </li>

            <li className="group relative">
              <a
                href="#"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors"
              >
                <i className="fas fa-network-wired mr-2"></i>Chapters
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg w-56 rounded-md overflow-hidden z-10 transition-all duration-300">
                <Link
                  href="/iee"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-microchip mr-2"></i>IEEE
                </Link>

                <Link
                  href="/acm"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-laptop-code mr-2"></i>ACM
                </Link>

                <Link
                  href="/iete"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-satellite-dish mr-2"></i>IETE
                </Link>

                <Link
                  href="/conference"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-users mr-2"></i>Student Council
                </Link>

                <Link
                  href="/fundings"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-vote-yea mr-2"></i>Electoral Education
                </Link>
              </div>
            </li>
            <li className="group relative">
              <a
                href="#"
                className="block py-4 px-5 text-white hover:bg-primary-light font-medium transition-colors"
              >
                <i className="fas fa-user-graduate mr-2"></i>Student Life
              </a>
              <div className="absolute hidden group-hover:block bg-white shadow-lg w-56 rounded-md overflow-hidden z-10 transition-all duration-300">
                <Link
                  href="/sports"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-futbol mr-2"></i>Sports Zone
                </Link>

                <Link
                  href="/nss"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-hands-helping mr-2"></i>NSS Unit
                </Link>

                <Link
                  href="/hostel-facilties"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-bed mr-2"></i>Hostel Life
                </Link>

                <Link
                  href="/placements"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-briefcase mr-2"></i>Placements
                </Link>

                <Link
                  href="/greviance"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-comments mr-2"></i>Grievance Cell
                </Link>

                <Link
                  href="/health"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-heartbeat mr-2"></i>Health Care
                </Link>

                <Link
                  href="/complaints"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-balance-scale mr-2"></i>Complaints
                </Link>

                <Link
                  href="/complaints-registration"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-edit mr-2"></i>Submit Complaint
                </Link>

                <Link
                  href="/greviance"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-ban mr-2"></i>Anti Ragging
                </Link>

                <Link
                  href="/equal-opportunity"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-universal-access mr-2"></i>Equal Rights
                </Link>

                <Link
                  href="/sedg"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-lightbulb mr-2"></i>SEDG Cell
                </Link>

                <Link
                  href="/disable"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-wheelchair mr-2"></i>Accessible Ed
                </Link>

                <Link
                  href="/annual-events"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-calendar-alt mr-2"></i>Annual Events
                </Link>

                <Link
                  href="/facilties"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-tools mr-2"></i>Campus Tools
                </Link>

                <Link
                  href="/hackathons"
                  className="block p-3 text-neutral-800 hover:bg-primary hover:text-white transition-colors"
                >
                  <i className="fas fa-code mr-2"></i>Hackathons
                </Link>
              </div>
            </li>




          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`bg-white shadow-xl md:hidden rounded-b-lg ${mobileMenuOpen ? "block" : "hidden"}`}
      >
        <ul className="px-4">
          <li>
            <Link href="/">
              <a className="block py-3 border-b border-neutral-200 hover:text-primary transition-colors">
                Home
              </a>
            </Link>
          </li>
          <li className="py-3 border-b border-neutral-200">
            <div className="flex justify-between items-center">
              <a href="#" className="hover:text-primary transition-colors">
                About
              </a>
              <button
                className="mobile-submenu-toggle text-primary"
                onClick={() => toggleMobileSubmenu("about")}
              >
                <i
                  className={`fas fa-chevron-${mobileSubmenuState.about ? "up" : "down"}`}
                ></i>
              </button>
            </div>
            <ul
              className={`pl-4 mt-2 ${mobileSubmenuState.about ? "block" : "hidden"}`}
            >
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  About PIET
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Vision & Mission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Leadership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Infrastructure
                </a>
              </li>
            </ul>
          </li>
          <li className="py-3 border-b border-neutral-200">
            <div className="flex justify-between items-center">
              <a href="#" className="hover:text-primary transition-colors">
                Academics
              </a>
              <button
                className="mobile-submenu-toggle text-primary"
                onClick={() => toggleMobileSubmenu("academics")}
              >
                <i
                  className={`fas fa-chevron-${mobileSubmenuState.academics ? "up" : "down"}`}
                ></i>
              </button>
            </div>
            <ul
              className={`pl-4 mt-2 ${mobileSubmenuState.academics ? "block" : "hidden"}`}
            >
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Departments
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Programs Offered
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Academic Calendar
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Examination
                </a>
              </li>
            </ul>
          </li>
          <li className="py-3 border-b border-neutral-200">
            <div className="flex justify-between items-center">
              <a href="#" className="hover:text-primary transition-colors">
                Admissions
              </a>
              <button
                className="mobile-submenu-toggle text-primary"
                onClick={() => toggleMobileSubmenu("admissions")}
              >
                <i
                  className={`fas fa-chevron-${mobileSubmenuState.admissions ? "up" : "down"}`}
                ></i>
              </button>
            </div>
            <ul
              className={`pl-4 mt-2 ${mobileSubmenuState.admissions ? "block" : "hidden"}`}
            >
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Admission Process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Eligibility
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Fee Structure
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 hover:text-secondary transition-colors"
                >
                  Scholarships
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="block py-3 border-b border-neutral-200 hover:text-primary transition-colors"
            >
              Research
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-3 border-b border-neutral-200 hover:text-primary transition-colors"
            >
              Placements
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-3 border-b border-neutral-200 hover:text-primary transition-colors"
            >
              Campus Life
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-3 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out">
          <div className="bg-white rounded-lg p-6 shadow-lg w-11/12 max-w-md transform transition-all scale-100 opacity-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Search</h2>
              <button
                onClick={toggleSearchModal}
                className="text-gray-500 hover:text-gray-800 focus:outline-none"
                aria-label="Close search"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Type to Search More..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              autoFocus
            />

            {/* Search Results */}
            <div className="mt-4 max-h-60 overflow-y-auto">
              {filteredResults.length === 0 && searchTerm ? (
                <p className="text-sm text-gray-500">No results found.</p>
              ) : (
                filteredResults.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleResultClick(item.link)}
                    className="block w-full text-left px-3 py-2 rounded-md hover:bg-gray-100 transition"
                  >
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.description}</div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}