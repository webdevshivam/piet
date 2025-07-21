
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'
import OverviewSection from '@/components/OverviewSection'
import BreadCrumb from '@/components/BreadCrumb'
import InfoCard from '@/components/InfoCard'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

const SponseringBody = () => {
    const items = [
        {
            title: "Vision",
            iconClass: "fas fa-lightbulb text-indigo-600",
            content: (
                <p className="text-gray-700 leading-relaxed">
                    To be a beacon of educational excellence, fostering innovation, inclusivity, and integrity while shaping future leaders and professionals who will inspire positive change in the world.
                </p>
            ),
        },
        {
            title: "Mission",
            iconClass: "fas fa-flag text-emerald-600",
            content: (
                <p className="text-gray-700 leading-relaxed">
                    Shanti Education Society strives to empower youth through holistic education that blends academic rigor with ethical values and leadership qualities. Our mission is to create learning environments that nurture critical thinking, creativity, and a strong sense of social responsibility.
                </p>
            ),
        },
        {
            title: "Institutions Under SES",
            iconClass: "fas fa-school text-purple-600",
            content: (
                <ul className="list-none space-y-3 text-gray-700">
                    <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                            <strong className="text-gray-900">Poornima College of Engineering (PCE):</strong> Established in 2000, PCE is known for its strong academic programs and industry-linked initiatives in engineering.
                        </div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                            <strong className="text-gray-900">Poornima Institute of Engineering & Technology (PIET):</strong> Founded in 2007, PIET delivers quality technical education aligned with global standards.
                        </div>
                    </li>
                    <li className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                            <strong className="text-gray-900">Poornima University (PU):</strong> A UGC-recognized private university established in 2012, offering programs in engineering, management, design, architecture, hospitality, and science.
                        </div>
                    </li>
                </ul>
            ),
        },
        {
            title: "Scholarships and Financial Assistance",
            iconClass: "fas fa-hand-holding-usd text-green-600",
            content: (
                <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                        SES is deeply committed to rewarding academic excellence and encouraging merit through a variety of <span className="font-semibold text-green-600">scholarship programs</span>, including:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-award text-green-500 text-sm"></i>
                            <span className="text-sm">Shanti Education Scholarship</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-award text-green-500 text-sm"></i>
                            <span className="text-sm">President's Scholarship</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-award text-green-500 text-sm"></i>
                            <span className="text-sm">Sports Scholarship</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <i className="fas fa-award text-green-500 text-sm"></i>
                            <span className="text-sm">Entrance Exam Scholarships</span>
                        </div>
                    </div>
                    <p className="text-sm leading-relaxed bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                        Through these initiatives, SES ensures that deserving students can pursue their dreams without financial barriers.
                    </p>
                </div>
            ),
        },
    ];

    const stats = [
        { number: "25+", label: "Years of Excellence", icon: "fas fa-calendar-alt" },
        { number: "3", label: "Premier Institutions", icon: "fas fa-university" },
        { number: "15,000+", label: "Alumni Network", icon: "fas fa-users" },
        { number: "50+", label: "Industry Partners", icon: "fas fa-handshake" }
    ];

    return (
        <div className="bg-gray-50">
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Sponsoring Body"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Sponsoring Body', isCurrent: true },
                ]}
            />

            {/* Hero Section with Stats */}
            <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-700"></div>
                </div>
                
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
                            Shanti Education Society
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                            Transforming education since 1999 with innovation, excellence, and unwavering commitment to student success
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300">
                                    <i className={`${stat.icon} text-3xl text-blue-300 mb-3 group-hover:scale-110 transition-transform duration-300`}></i>
                                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                                    <div className="text-blue-200 text-sm font-medium">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className="bg-white">
                <OverviewSection
                    title="About Shanti Education Society"
                    subtitle="Building Tomorrow's Leaders"
                    reverse={true}
                    image={{
                        src: "https://internationalbudget.org/wp-content/uploads/https___www.imagesofempowerment.org_wp-content_uploads_packard_pb_india_11.14_fullrelease003a.jpg",
                        alt: "College Overview Image",
                        caption: "Accredited with Grade 'A' by NAAC",
                    }}
                >
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Founded in 1999, <span className="font-semibold text-primary bg-blue-50 px-2 py-1 rounded">Shanti Education Society (SES)</span> is a renowned non-profit organization based in Jaipur, Rajasthan, dedicated to promoting excellence in education. SES was established with the vision of transforming young minds into responsible citizens and skilled professionals who can contribute meaningfully to society.
                        </p>
                        
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Under the leadership of visionary educationists, SES has emerged as a driving force in higher education, setting benchmarks for quality, innovation, and commitment. The Society is best known for founding some of Jaipur's most reputed educational institutions.
                        </p>

                        <div className="flex flex-wrap gap-3 mt-6">
                            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                                <i className="fas fa-check-circle mr-2"></i>NAAC Grade 'A'
                            </span>
                            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                                <i className="fas fa-star mr-2"></i>25+ Years Excellence
                            </span>
                            <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                                <i className="fas fa-graduation-cap mr-2"></i>15,000+ Alumni
                            </span>
                        </div>

                        <div className="mt-8">
                            <a href="#institutions" className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                                Explore Our Institutions
                                <i className="fas fa-arrow-right ml-3"></i>
                            </a>
                        </div>
                    </div>
                </OverviewSection>
            </div>

            {/* Cards Section */}
            <section id="institutions" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">Foundation</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Discover the pillars that make Shanti Education Society a beacon of educational excellence
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                        {items.map((item, index) => (
                            <div key={index} className="group hover:scale-105 transition-all duration-500 h-full">
                                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 h-full border border-gray-100 hover:border-blue-200 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-center mb-6">
                                            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                                                <i className={`${item.iconClass} text-2xl`}></i>
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                        </div>
                                        
                                        <div className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
                </div>

                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Join Our Educational Journey
                    </h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Be part of an institution that has been shaping futures and creating leaders for over two decades
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/about" className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <i className="fas fa-info-circle mr-3"></i>
                            Learn More About Us
                        </a>
                        <a href="/alumni-registration" className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                            <i className="fas fa-user-plus mr-3"></i>
                            Join Alumni Network
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default SponseringBody
