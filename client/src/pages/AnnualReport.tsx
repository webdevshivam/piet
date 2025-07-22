
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'
import BreadCrumb from '@/components/BreadCrumb'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

const reports = [
    {
        year: "2023-24",
        title: "Annual Report 2023-24",
        pdfUrl: "/pdfs/aicte-2025-26.pdf",
        description: "Comprehensive overview of our achievements and milestones for the academic year 2023-24",
        highlights: ["NAAC Grade A", "New Infrastructure", "Research Publications"]
    },
    {
        year: "2022-23",
        title: "Annual Report 2022-23",
        pdfUrl: "/pdfs/aicte-2024-25.pdf",
        description: "Academic excellence and institutional growth documented for 2022-23",
        highlights: ["Industry Partnerships", "Student Achievements", "Faculty Development"]
    },
    {
        year: "2023-24",
        title: "AICTE 2023-24 Report",
        pdfUrl: "/pdfs/aicte-2023-24.pdf",
        description: "AICTE compliance and regulatory reporting for academic year 2023-24",
        highlights: ["Compliance Achieved", "Quality Metrics", "Accreditation Status"]
    },
    {
        year: "2021-22",
        title: "Annual Report 2021-22",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
        description: "Strategic initiatives and academic progress during 2021-22",
        highlights: ["Digital Transformation", "Online Learning", "Campus Development"]
    },
    {
        year: "2020-21",
        title: "Annual Report 2020-21",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
        description: "Resilience and adaptation during challenging times in 2020-21",
        highlights: ["Pandemic Response", "Virtual Education", "Student Support"]
    },
    {
        year: "2019-20",
        title: "AICTE 2019-20 Report",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
        description: "Foundation year achievements and institutional milestones",
        highlights: ["Establishment Goals", "Faculty Recruitment", "Infrastructure Setup"]
    },
    {
        year: "2018-19",
        title: "AICTE 2018-19 Report",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
        description: "Inaugural year accomplishments and vision implementation",
        highlights: ["Vision Launch", "First Batch", "Quality Framework"]
    },
];

const AnnualReport = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Annual Reports"
                description="Comprehensive documentation of our institutional journey and achievements over the years."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Annual Reports', isCurrent: true },
                ]}
            />

            <main className='container mx-auto px-4 lg:px-0 relative z-10 my-16'>
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-heading font-bold text-primary mb-4 leading-tight">
                        Annual Reports
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our institutional journey through detailed annual reports showcasing our commitment to excellence in education.
                    </p>
                </div>

                {/* Enhanced Timeline Design */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary opacity-30"></div>
                    
                    {reports.map((report, index) => (
                        <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                            {/* Timeline Node */}
                            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg z-10">
                                <div className="absolute inset-1 bg-white rounded-full"></div>
                            </div>
                            
                            {/* Content Card */}
                            <div className={`ml-20 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                                    {/* Year Badge */}
                                    <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3">
                                        <div className="flex items-center justify-between">
                                            <span className="text-xl font-bold">{report.year}</span>
                                            <div className="flex items-center space-x-2">
                                                <i className="fas fa-calendar-alt"></i>
                                                <span className="text-sm opacity-90">Academic Year</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Card Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                                            {report.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                            {report.description}
                                        </p>
                                        
                                        {/* Highlights */}
                                        <div className="mb-4">
                                            <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Highlights:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {report.highlights.map((highlight, idx) => (
                                                    <span key={idx} className="inline-block bg-primary/10 text-primary text-xs px-3 py-1 rounded-full">
                                                        {highlight}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        {/* Download Button */}
                                        <a
                                            href={report.pdfUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 group"
                                        >
                                            <i className="fas fa-download group-hover:animate-bounce"></i>
                                            <span className="font-medium">Download Report</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Year Display on Opposite Side */}
                            <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}>
                                <div className="text-center">
                                    <div className="text-6xl font-bold text-primary/20 mb-2">
                                        {report.year.split('-')[0]}
                                    </div>
                                    <div className="text-lg text-gray-500">
                                        Academic Year
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Statistics Section */}
                <div className="mt-16 bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold mb-2">Report Archive Statistics</h3>
                        <p className="opacity-90">Our commitment to transparency and documentation</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-1">{reports.length}+</div>
                            <div className="text-sm opacity-90">Annual Reports</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-1">7+</div>
                            <div className="text-sm opacity-90">Years Documented</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-1">100%</div>
                            <div className="text-sm opacity-90">Transparency</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-1">1000+</div>
                            <div className="text-sm opacity-90">Pages of Insights</div>
                        </div>
                    </div>
                </div>
            </main>
            
            <Cta />
            <Footer />
        </div>
    )
}

export default AnnualReport
