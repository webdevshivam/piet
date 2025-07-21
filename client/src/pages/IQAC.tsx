import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadCrumb from '@/components/BreadCrumb';
import Cta from '@/components/Cta';
import { ChevronDown, ChevronRight, Download, Eye, Users, Target, Award, BookOpen, FileText, Calendar, CheckCircle } from 'lucide-react';

const iqacConstitution = [
    'Constitution 2024-25 (After Visit)',
    'Constitution 2024-25',
    'Constitution 2023-24',
    'Constitution 2022-23',
    'Constitution 2021-22',
    'Constitution 2020-21',
    'Constitution 2019-20',
    'Constitution 2018-19'
];

const iqacInitiatives = [
    'IQAC Initiatives (After 2018)',
    'IQAC Initiatives (Before 2018)'
];

const aqarReports = [
    'AQAR (2022-23)',
    'AQAR (2021-22)',
    'AQAR (2020-21)',
    'AQAR (2019-20)',
    'AQAR (2018-19)'
];

const strategicPlans = [
    'Strategic Development Plan 2023 Onwards',
    'Measured Analysis of Strategic Development Plan 2018-22 by IQAC',
    'Strategic Development Plan 2018-22'
];

const feedbackForms = [
    'Alumni Survey Questionnaire',
    'Employer\'s Feedback Form',
    'Faculty Feedback form',
    'Student Feedback form on Ambience',
    'Student Feedback form on Academics',
    'Student Feedback on Academics over ERP (Process)'
];

const feedbackAnalysis = [
    'Action Taken Report of Feedback (2023-24)',
    'Feedback Analysis (2023-24)',
    'Action Taken Report of Feedback (2022-23)',
    'Feedback Analysis (2022-23)',
    'Action Taken Report of Feedback (2021-22)',
    'Feedback Analysis (2021-22)',
    'Action Taken Report of Feedback (2020-21)',
    'Feedback Analysis (2020-21)',
    'Action Taken Report of Feedback (2019-20)',
    'Feedback Analysis (2019-20)',
    'Action Taken Report of Feedback (2018-19)',
    'Feedback Analysis (2018-19)'
];

const studentSurveys = [
    'Students Satisfaction Survey 2023-24',
    'Students Satisfaction Survey 2022-23',
    'Students Satisfaction Survey 2021-22',
    'Students Satisfaction Survey 2020-21',
    'Students Satisfaction Survey 2019-20',
    'Students Satisfaction Survey 2018-19'
];

const academicAudits = [
    'Academic & Administrative Audit 2023-24',
    'Academic & Administrative Audit 2022-23',
    'Academic & Administrative Audit 2021-22',
    'Academic & Administrative Audit 2020-21',
    'Academic & Administrative Audit 2019-20',
    'Academic & Administrative Audit 2018-19'
];

const bestPractices = [
    'Best Practices 1',
    'Best Practices 2'
];

const bestPracticesEvidence = [
    'Best Practices 1 Evidence',
    'Best Practices 2 Evidence'
];

// Data for IQAC Meetings & Action Taken Reports with nested structure
const iqacMeetingsData = {
    '2024-25': [
        'Meeting 1 - April 2024',
        'Meeting 2 - August 2024',
        'Action Taken Report - Q1',
        'Action Taken Report - Q2'
    ],
    '2023-24': [
        'Meeting 1 - May 2023',
        'Meeting 2 - September 2023',
        'Meeting 3 - December 2023',
        'Action Taken Report - Annual'
    ],
    '2022-23': [
        'Meeting 1 - June 2022',
        'Meeting 2 - October 2022',
        'Meeting 3 - February 2023',
        'Action Taken Report - Annual'
    ],
    '2021-22': [
        'Meeting 1 - July 2021',
        'Meeting 2 - November 2021',
        'Action Taken Report - Annual'
    ],
    '2020-21': [
        'Meeting 1 - August 2020',
        'Meeting 2 - December 2020',
        'Action Taken Report - Annual'
    ],
    '2019-20': [
        'Meeting 1 - September 2019',
        'Meeting 2 - January 2020',
        'Action Taken Report - Annual'
    ],
    '2018-19': [
        'Meeting 1 - October 2018',
        'Action Taken Report - Annual'
    ]
};

// Data for IQAC Quality Activities with nested structure
const iqacQualityActivities = {
    '2023-2024': [
        'Faculty Development Programs',
        'Quality Enhancement Workshops',
        'Student Feedback Analysis',
        'Curriculum Review Activities',
        'Research Quality Initiatives'
    ],
    '2022-2023': [
        'Teaching Learning Process Enhancement',
        'Quality Audit Activities',
        'Stakeholder Feedback Collection',
        'Academic Quality Improvement',
        'Infrastructure Quality Assessment'
    ],
    '2021-2022': [
        'Digital Learning Initiatives',
        'Quality Assurance Training',
        'Student Satisfaction Surveys',
        'Faculty Quality Programs',
        'Assessment Reform Activities'
    ],
    '2020-2021': [
        'Online Quality Enhancement',
        'Virtual Teaching Training',
        'Digital Assessment Methods',
        'Quality Monitoring Systems',
        'Remote Learning Quality'
    ],
    '2019-2020': [
        'Traditional Quality Methods',
        'Classroom Quality Enhancement',
        'Faculty Training Programs',
        'Student Engagement Activities',
        'Quality Documentation'
    ],
    '2018-2019': [
        'IQAC Establishment Activities',
        'Initial Quality Framework',
        'Basic Quality Training',
        'Foundation Quality Programs',
        'Quality Policy Development'
    ]
};

// Data for other dropdowns
const fdpWorkshopsData = {
    '2023-2024': [
        'Advanced Teaching Methodologies Workshop',
        'Research Methodology FDP',
        'Digital Tools Training',
        'Quality Enhancement Program'
    ],
    '2022-2023': [
        'Innovative Teaching Practices',
        'Academic Leadership FDP',
        'Technology Integration Workshop',
        'Assessment Techniques Training'
    ],
    '2021-2022': [
        'Online Teaching Excellence',
        'Curriculum Development FDP',
        'Student Engagement Strategies',
        'Quality Assurance Training'
    ],
    '2020-2021': [
        'Virtual Classroom Management',
        'Digital Assessment FDP',
        'Remote Learning Workshop',
        'Online Quality Training'
    ],
    '2019-2020': [
        'Traditional Teaching Methods',
        'Classroom Management FDP',
        'Student Mentoring Workshop',
        'Academic Excellence Program'
    ],
    '2018-2019': [
        'Basic Teaching Skills',
        'Foundation FDP Program',
        'Quality Basics Workshop',
        'Initial Training Sessions'
    ]
};

const academicCalendars = {
    '2024-25': ['Academic Calendar 2024-25'],
    '2023-24': ['Academic Calendar 2023-24'],
    '2022-23': ['Academic Calendar 2022-23'],
    '2021-22': ['Academic Calendar 2021-22'],
    '2020-21': ['Academic Calendar 2020-21'],
    '2019-20': ['Academic Calendar 2019-20'],
    '2018-19': ['Academic Calendar 2018-19']
};

const environmentAuditCertificates = {
    '2024-25': ['Environment Audit Certificate 2024-25'],
    '2023-24': ['Environment Audit Certificate 2023-24'],
    '2022-23': ['Environment Audit Certificate 2022-23'],
    '2021-22': ['Environment Audit Certificate 2021-22']
};

const environmentAuditReports = {
    '2023-24': ['Environment Audit Report 2023-24'],
    '2020-2023': ['Environment Audit Report 2020-2023']
};

const IQACPage = () => {
    const [openMeetingsYear, setOpenMeetingsYear] = useState(null);
    const [openMeetingsItem, setOpenMeetingsItem] = useState(null);
    const [openQualityYear, setOpenQualityYear] = useState(null);
    const [openQualityItem, setOpenQualityItem] = useState(null);
    const [openFDPYear, setOpenFDPYear] = useState(null);
    const [openFDPItem, setOpenFDPItem] = useState(null);
    const [openCalendarYear, setOpenCalendarYear] = useState(null);
    const [openEnvCertYear, setOpenEnvCertYear] = useState(null);
    const [openEnvReportYear, setOpenEnvReportYear] = useState(null);

    const ModernDoubleDropdown = ({ title, data, openYear, setOpenYear, openItem, setOpenItem, icon: Icon }) => (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl">
                    <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {title}
                </h2>
            </div>
            <div className="grid gap-4">
                {Object.entries(data).map(([year, items]) => (
                    <div key={year} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                        <button
                            className="w-full text-left px-8 py-6 font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 focus:outline-none flex justify-between items-center transition-all duration-300"
                            onClick={() => {
                                setOpenYear(openYear === year ? null : year);
                                setOpenItem(null);
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <Calendar className="h-5 w-5 text-blue-500" />
                                <span className="text-lg">{year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                                    {items.length} items
                                </span>
                                {openYear === year ? (
                                    <ChevronDown className="h-5 w-5 text-blue-600 transition-transform duration-200" />
                                ) : (
                                    <ChevronRight className="h-5 w-5 text-blue-600 transition-transform duration-200" />
                                )}
                            </div>
                        </button>
                        {openYear === year && (
                            <div className="px-8 pb-6 bg-gradient-to-br from-gray-50 to-blue-50 space-y-3">
                                {items.map((item, idx) => (
                                    <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-200">
                                        <button
                                            className="w-full text-left p-4 text-gray-700 hover:bg-blue-50 focus:outline-none flex justify-between items-center group"
                                            onClick={() => setOpenItem(openItem === `${year}-${idx}` ? null : `${year}-${idx}`)}
                                        >
                                            <div className="flex items-center gap-3">
                                                <FileText className="h-4 w-4 text-blue-500 group-hover:text-blue-600" />
                                                <span className="font-medium">{item}</span>
                                            </div>
                                            {openItem === `${year}-${idx}` ? (
                                                <ChevronDown className="h-4 w-4 text-blue-500" />
                                            ) : (
                                                <ChevronRight className="h-4 w-4 text-blue-500" />
                                            )}
                                        </button>
                                        {openItem === `${year}-${idx}` && (
                                            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-gray-200">
                                                <div className="flex items-start gap-4">
                                                    <div className="flex-1">
                                                        <p className="text-sm text-gray-600 mb-3">
                                                            Access and download the complete document for "{item}". 
                                                            This document contains detailed information and official records.
                                                        </p>
                                                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                                            <CheckCircle className="h-3 w-3 text-green-500" />
                                                            <span>Verified Document</span>
                                                            <span>•</span>
                                                            <span>Last Updated: {year}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex gap-3">
                                                    <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg">
                                                        <Download className="h-4 w-4" />
                                                        Download PDF
                                                    </button>
                                                    <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg">
                                                        <Eye className="h-4 w-4" />
                                                        Preview
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    const ModernTable = ({ title, data, icon: Icon }) => (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-xl">
                    <Icon className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                    {title}
                </h2>
            </div>
            <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                    <div className="grid grid-cols-12 gap-4 p-6">
                        <div className="col-span-1 font-semibold">S. No.</div>
                        <div className="col-span-8 font-semibold">Document</div>
                        <div className="col-span-3 font-semibold text-center">Action</div>
                    </div>
                </div>
                <div className="divide-y divide-gray-100">
                    {data.map((item, idx) => (
                        <div key={idx} className="grid grid-cols-12 gap-4 p-6 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 group">
                            <div className="col-span-1 flex items-center">
                                <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                                    {String(idx + 1).padStart(2, '0')}
                                </span>
                            </div>
                            <div className="col-span-8 flex items-center">
                                <div className="flex items-center gap-3">
                                    <FileText className="h-5 w-5 text-blue-500 group-hover:text-blue-600" />
                                    <span className="font-medium text-gray-800 group-hover:text-gray-900">{item}</span>
                                </div>
                            </div>
                            <div className="col-span-3 flex justify-center">
                                <button className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
                                    <Download className="h-4 w-4" />
                                    Download
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const SimpleDropdown = ({ title, data, openYear, setOpenYear, icon: Icon }) => (
        <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                    <Icon className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {title}
                </h2>
            </div>
            <div className="grid gap-4">
                {Object.entries(data).map(([year, items]) => (
                    <div key={year} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
                        <button
                            className="w-full text-left px-8 py-6 font-semibold text-gray-800 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 focus:outline-none flex justify-between items-center transition-all duration-300"
                            onClick={() => setOpenYear(openYear === year ? null : year)}
                        >
                            <div className="flex items-center gap-3">
                                <Calendar className="h-5 w-5 text-purple-500" />
                                <span className="text-lg">{year}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                                    {items.length} items
                                </span>
                                {openYear === year ? (
                                    <ChevronDown className="h-5 w-5 text-purple-600" />
                                ) : (
                                    <ChevronRight className="h-5 w-5 text-purple-600" />
                                )}
                            </div>
                        </button>
                        {openYear === year && (
                            <div className="px-8 pb-6 bg-gradient-to-br from-gray-50 to-purple-50">
                                {items.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0">
                                        <div className="flex items-center gap-3">
                                            <FileText className="h-4 w-4 text-purple-500" />
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </div>
                                        <button className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg">
                                            <Download className="h-4 w-4" />
                                            Download
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
            <Header />
            <BreadCrumb
                title="IQAC"
                description="Internal Quality Assurance Cell - Enhancing educational standards and academic excellence at PIET."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'IQAC', isCurrent: true },
                ]}
            />

            <div className="container mx-auto px-4 py-12">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-3 bg-white shadow-lg rounded-full px-8 py-4 mb-6">
                        <Award className="h-8 w-8 text-blue-500" />
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Excellence in Quality Assurance
                        </span>
                    </div>
                    <h1 className="text-5xl font-bold text-gray-800 mb-4">
                        Internal Quality <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Assurance Cell</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Fostering a culture of excellence and continuous improvement in educational standards at PIET
                    </p>
                </div>

                {/* About IQAC - Enhanced */}
                <div className="mb-16">
                    <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl">
                                <Users className="h-8 w-8 text-blue-600" />
                            </div>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                About IQAC
                            </h2>
                        </div>
                        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                            <p className="border-l-4 border-blue-500 pl-6 bg-blue-50 p-4 rounded-r-lg">
                                The Internal Quality Assurance Cell (IQAC) of Poornima Institute of Engineering and Technology, Jaipur was established in <strong>2018</strong> to enhance teaching-learning quality and sustain the institution's performance. The IQAC focuses on fostering a culture of belongingness and stakeholder participation in all activities.
                            </p>
                            <p className="border-l-4 border-purple-500 pl-6 bg-purple-50 p-4 rounded-r-lg">
                                The institute's vision emphasizes <strong>"Pursuit of Excellence in Education,"</strong> followed by Research and Entrepreneurship. The institution practices outcome-based education, student-centric experimental learning, participative learning, and problem-solving methodologies to improve learning experiences.
                            </p>
                            <p className="border-l-4 border-green-500 pl-6 bg-green-50 p-4 rounded-r-lg">
                                The IQAC monitors academic activities, channels efforts, and institutionalizes good practices towards academic excellence. The IQAC includes the head of the institution, senior faculty members, distinguished educationalists, industry experts, local management representatives, and stakeholders.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Vision and Mission - Enhanced */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl">
                                    <Target className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Vision</h3>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-lg">
                                To practice benchmarks and sustainable quality mechanism in academic and research initiative and process.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="relative">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl">
                                    <BookOpen className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Mission</h3>
                            </div>
                            <ul className="space-y-3 text-gray-700 leading-relaxed">
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span>To be the driving force for enhancing quality and channelize efforts towards academic excellence.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span>To establish student Learning-Centric environment by use of ICT tools for teaching and learning process.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span>To assess the progress through audit system and ensure transparent operations.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                    <span>To ensure adequacy of support structure and build association with stakeholders.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* IQAC Strategies and Functions - Enhanced */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl">
                                <Target className="h-6 w-6 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">IQAC Strategies</h3>
                        </div>
                        <ul className="space-y-3 text-gray-700 leading-relaxed">
                            {[
                                'Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks',
                                'The relevance and quality of academic and research programmes',
                                'Equitable access to and affordability of academic programmes',
                                'Optimization and integration of modern methods of teaching and learning',
                                'The credibility of evaluation procedures',
                                'Ensuring the adequacy, maintenance and proper allocation of support structure'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="h-4 w-4 text-orange-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white shadow-xl rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-xl">
                                <BookOpen className="h-6 w-6 text-teal-600" />
                            </div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">IQAC Functions</h3>
                        </div>
                        <ul className="space-y-3 text-gray-700 leading-relaxed">
                            {[
                                'Development and application of quality benchmarks/parameters',
                                'Facilitating the creation of a learner-centric environment',
                                'Arrangement for feedback response from stakeholders',
                                'Dissemination of information on various quality parameters',
                                'Organization of workshops, seminars on quality related themes',
                                'Documentation of various programs/activities leading to quality improvement',
                                'Development and maintenance of institutional database through MIS'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle className="h-4 w-4 text-teal-500 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Tables with modern design */}
                <ModernTable title="Quality Policy" data={['Quality Policy']} icon={FileText} />
                <ModernTable title="IQAC Constitution" data={iqacConstitution} icon={Users} />
                <ModernTable title="IQAC Handbook" data={['IQAC Handbook']} icon={BookOpen} />
                <ModernTable title="IQAC Initiatives" data={iqacInitiatives} icon={Target} />
                <ModernTable title="Institute Perspective Plan" data={['Institute Perspective Plan']} icon={FileText} />

                {/* Double Dropdown Sections with modern design */}
                <ModernDoubleDropdown 
                    title="IQAC Meetings & Action Taken Reports"
                    data={iqacMeetingsData}
                    openYear={openMeetingsYear}
                    setOpenYear={setOpenMeetingsYear}
                    openItem={openMeetingsItem}
                    setOpenItem={setOpenMeetingsItem}
                    icon={Users}
                />

                <ModernDoubleDropdown 
                    title="IQAC Quality Activities"
                    data={iqacQualityActivities}
                    openYear={openQualityYear}
                    setOpenYear={setOpenQualityYear}
                    openItem={openQualityItem}
                    setOpenItem={setOpenQualityItem}
                    icon={Award}
                />

                <ModernTable title="Annual Quality Assurance Report (AQAR)" data={aqarReports} icon={FileText} />
                <ModernTable title="Strategic Development Plan" data={strategicPlans} icon={Target} />
                <ModernTable title="Feedback Policy" data={['Feedback Policy']} icon={FileText} />
                <ModernTable title="Feedback Forms" data={feedbackForms} icon={FileText} />
                <ModernTable title="Feedback Analysis & ATR" data={feedbackAnalysis} icon={FileText} />
                <ModernTable title="Students Satisfaction Survey" data={studentSurveys} icon={Users} />

                <ModernDoubleDropdown 
                    title="FDP's/Workshops for Faculty & Staff"
                    data={fdpWorkshopsData}
                    openYear={openFDPYear}
                    setOpenYear={setOpenFDPYear}
                    openItem={openFDPItem}
                    setOpenItem={setOpenFDPItem}
                    icon={BookOpen}
                />

                <SimpleDropdown 
                    title="Academic Calendars"
                    data={academicCalendars}
                    openYear={openCalendarYear}
                    setOpenYear={setOpenCalendarYear}
                    icon={Calendar}
                />

                <ModernTable title="Academic & Administrative Audit" data={academicAudits} icon={FileText} />

                <SimpleDropdown 
                    title="Environment Audits Certificates"
                    data={environmentAuditCertificates}
                    openYear={openEnvCertYear}
                    setOpenYear={setOpenEnvCertYear}
                    icon={Award}
                />

                <SimpleDropdown 
                    title="Environment Audits Reports"
                    data={environmentAuditReports}
                    openYear={openEnvReportYear}
                    setOpenYear={setOpenEnvReportYear}
                    icon={FileText}
                />

                <ModernTable title="Best Practices" data={bestPractices} icon={Award} />
                <ModernTable title="Best Practices Evidence" data={bestPracticesEvidence} icon={FileText} />
                <ModernTable title="Institute Distinctiveness" data={['Institute Distinctiveness']} icon={Award} />
                <ModernTable title="Institute Distinctiveness Evidences" data={['Institute Distinctiveness Evidences']} icon={FileText} />
                <ModernTable title="Green Initiatives" data={['Green Initiatives']} icon={Award} />
                <ModernTable title="Events on Green Practices" data={['Events on Green Practices']} icon={FileText} />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default IQACPage;