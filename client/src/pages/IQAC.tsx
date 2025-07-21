
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadCrumb from '@/components/BreadCrumb';
import Cta from '@/components/Cta';

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

    const DoubleDropdown = ({ title, data, openYear, setOpenYear, openItem, setOpenItem }) => (
        <div className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">{title}</h2>
            <div className="space-y-4">
                {Object.entries(data).map(([year, items]) => (
                    <div key={year} className="border rounded-xl shadow-md">
                        <button
                            className="w-full text-left px-6 py-4 font-semibold text-secondary hover:bg-gray-100 focus:outline-none flex justify-between items-center"
                            onClick={() => {
                                setOpenYear(openYear === year ? null : year);
                                setOpenItem(null);
                            }}
                        >
                            <span>{year}</span>
                            <span className="text-xl">{openYear === year ? '▼' : '►'}</span>
                        </button>
                        {openYear === year && (
                            <div className="px-6 pb-4 space-y-2">
                                {items.map((item, idx) => (
                                    <div key={idx} className="border-l-4 border-secondary pl-4">
                                        <button
                                            className="w-full text-left py-2 text-gray-700 hover:text-secondary focus:outline-none flex justify-between items-center"
                                            onClick={() => setOpenItem(openItem === `${year}-${idx}` ? null : `${year}-${idx}`)}
                                        >
                                            <span>{item}</span>
                                            <span className="text-sm">{openItem === `${year}-${idx}` ? '▼' : '►'}</span>
                                        </button>
                                        {openItem === `${year}-${idx}` && (
                                            <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                                                <p className="text-sm text-gray-600">
                                                    Document details for "{item}" - Download link available here.
                                                </p>
                                                <button className="mt-2 bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition">
                                                    Download PDF
                                                </button>
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

    return (
        <div>
            <Header />
            <BreadCrumb
                title="IQAC"
                description="Internal Quality Assurance Cell - Enhancing educational standards and academic excellence at PIET."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'IQAC', isCurrent: true },
                ]}
            />

            <div className="container mx-auto px-4 py-10">
                {/* About IQAC */}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-6">About IQAC</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            The Internal Quality Assurance Cell (IQAC) of Poornima Institute of Engineering and Technology, Jaipur was established in 2018 to enhance teaching-learning quality and sustain the institution's performance. The IQAC focuses on fostering a culture of belongingness and stakeholder participation in all activities.
                        </p>
                        <p>
                            The institute's vision emphasizes "Pursuit of Excellence in Education," followed by Research and Entrepreneurship. The institution practices outcome-based education, student-centric experimental learning, participative learning, and problem-solving methodologies to improve learning experiences.
                        </p>
                        <p>
                            The IQAC monitors academic activities, channels efforts, and institutionalizes good practices towards academic excellence. The IQAC includes the head of the institution, senior faculty members, distinguished educationalists, industry experts, local management representatives, and stakeholders.
                        </p>
                    </div>
                </div>

                {/* Vision and Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition-transform hover:scale-105 border-l-4 border-primary">
                        <h3 className="text-2xl font-bold text-secondary mb-4">Vision</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To practice benchmarks and sustainable quality mechanism in academic and research initiative and process.
                        </p>
                    </div>
                    <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition-transform hover:scale-105 border-l-4 border-secondary">
                        <h3 className="text-2xl font-bold text-secondary mb-4">Mission</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                            <li>To be the driving force for enhancing quality and channelize and systematize the efforts towards academic excellence.</li>
                            <li>To establish student Learning-Centric environment by use of ICT tools for teaching and learning process.</li>
                            <li>To assess the progress of the academic process through audit system and ensure transparent operations.</li>
                            <li>To ensure the adequacy and smooth functioning of the support structure and build association with stakeholders.</li>
                        </ul>
                    </div>
                </div>

                {/* IQAC Strategies and Functions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition-transform hover:scale-105">
                        <h3 className="text-2xl font-bold text-secondary mb-4">IQAC Strategies</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                            <li>Ensuring timely, efficient and progressive performance of academic, administrative and financial tasks</li>
                            <li>The relevance and quality of academic and research programmes</li>
                            <li>Equitable access to and affordability of academic programmes</li>
                            <li>Optimization and integration of modern methods of teaching and learning</li>
                            <li>The credibility of evaluation procedures</li>
                            <li>Ensuring the adequacy, maintenance and proper allocation of support structure</li>
                        </ul>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-xl transition-transform hover:scale-105">
                        <h3 className="text-2xl font-bold text-secondary mb-4">IQAC Functions</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                            <li>Development and application of quality benchmarks/parameters</li>
                            <li>Facilitating the creation of a learner-centric environment</li>
                            <li>Arrangement for feedback response from stakeholders</li>
                            <li>Dissemination of information on various quality parameters</li>
                            <li>Organization of workshops, seminars on quality related themes</li>
                            <li>Documentation of various programs/activities leading to quality improvement</li>
                            <li>Development and maintenance of institutional database through MIS</li>
                        </ul>
                    </div>
                </div>

                {/* Quality Policy */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Quality Policy</h2>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4 text-left">S. No.</th>
                                    <th className="p-4 text-left">Document</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-blue-50">
                                    <td className="p-4">1</td>
                                    <td className="p-4">Quality Policy</td>
                                    <td className="p-4">
                                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* IQAC Constitution */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">IQAC Constitution</h2>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4 text-left">S. No.</th>
                                    <th className="p-4 text-left">Document</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {iqacConstitution.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-blue-50">
                                        <td className="p-4">{idx + 1}</td>
                                        <td className="p-4">{item}</td>
                                        <td className="p-4">
                                            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                                                Download
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* IQAC Handbook */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">IQAC Handbook</h2>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4 text-left">S. No.</th>
                                    <th className="p-4 text-left">Document</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-blue-50">
                                    <td className="p-4">1</td>
                                    <td className="p-4">IQAC Handbook</td>
                                    <td className="p-4">
                                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* IQAC Initiatives */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">IQAC Initiatives</h2>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4 text-left">S. No.</th>
                                    <th className="p-4 text-left">Document</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {iqacInitiatives.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-blue-50">
                                        <td className="p-4">{idx + 1}</td>
                                        <td className="p-4">{item}</td>
                                        <td className="p-4">
                                            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                                                Download
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Institute Perspective Plan */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Institute Perspective Plan</h2>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4 text-left">S. No.</th>
                                    <th className="p-4 text-left">Document</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-blue-50">
                                    <td className="p-4">1</td>
                                    <td className="p-4">Institute Perspective Plan</td>
                                    <td className="p-4">
                                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Double Dropdown Sections */}
                <DoubleDropdown 
                    title="IQAC Meetings & Action Taken Reports"
                    data={iqacMeetingsData}
                    openYear={openMeetingsYear}
                    setOpenYear={setOpenMeetingsYear}
                    openItem={openMeetingsItem}
                    setOpenItem={setOpenMeetingsItem}
                />

                <DoubleDropdown 
                    title="IQAC Quality Activities"
                    data={iqacQualityActivities}
                    openYear={openQualityYear}
                    setOpenYear={setOpenQualityYear}
                    openItem={openQualityItem}
                    setOpenItem={setOpenQualityItem}
                />

                {/* Annual Quality Assurance Report (AQAR) */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Annual Quality Assurance Report (AQAR)</h2>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4 text-left">S. No.</th>
                                    <th className="p-4 text-left">Document</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {aqarReports.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-blue-50">
                                        <td className="p-4">{idx + 1}</td>
                                        <td className="p-4">{item}</td>
                                        <td className="p-4">
                                            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                                                Download
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Strategic Development Plan */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Strategic Development Plan</h2>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4 text-left">S. No.</th>
                                    <th className="p-4 text-left">Document</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {strategicPlans.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-blue-50">
                                        <td className="p-4">{idx + 1}</td>
                                        <td className="p-4">{item}</td>
                                        <td className="p-4">
                                            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                                                Download
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Feedback Policy */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Feedback Policy</h2>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4 text-left">S. No.</th>
                                    <th className="p-4 text-left">Document</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-blue-50">
                                    <td className="p-4">1</td>
                                    <td className="p-4">Feedback Policy</td>
                                    <td className="p-4">
                                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Feedback Forms */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Feedback Forms</h2>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4 text-left">S. No.</th>
                                    <th className="p-4 text-left">Document</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {feedbackForms.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-blue-50">
                                        <td className="p-4">{idx + 1}</td>
                                        <td className="p-4">{item}</td>
                                        <td className="p-4">
                                            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                                                Download
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Feedback Analysis & ATR */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Feedback Analysis & ATR</h2>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4 text-left">S. No.</th>
                                    <th className="p-4 text-left">Document</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {feedbackAnalysis.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-blue-50">
                                        <td className="p-4">{idx + 1}</td>
                                        <td className="p-4">{item}</td>
                                        <td className="p-4">
                                            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                                                Download
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Students Satisfaction Survey */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Students Satisfaction Survey</h2>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4 text-left">S. No.</th>
                                    <th className="p-4 text-left">Document</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {studentSurveys.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-blue-50">
                                        <td className="p-4">{idx + 1}</td>
                                        <td className="p-4">{item}</td>
                                        <td className="p-4">
                                            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                                                Download
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* FDP's/Workshops for Faculty & Staff with Dropdown */}
                <DoubleDropdown 
                    title="FDP's/Workshops for Faculty & Staff"
                    data={fdpWorkshopsData}
                    openYear={openFDPYear}
                    setOpenYear={setOpenFDPYear}
                    openItem={openFDPItem}
                    setOpenItem={setOpenFDPItem}
                />

                {/* Academic Calendars with Dropdown */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Academic Calendars</h2>
                    <div className="space-y-4">
                        {Object.entries(academicCalendars).map(([year, items]) => (
                            <div key={year} className="border rounded-xl shadow-md">
                                <button
                                    className="w-full text-left px-6 py-4 font-semibold text-secondary hover:bg-gray-100 focus:outline-none flex justify-between items-center"
                                    onClick={() => setOpenCalendarYear(openCalendarYear === year ? null : year)}
                                >
                                    <span>{year}</span>
                                    <span className="text-xl">{openCalendarYear === year ? '▼' : '►'}</span>
                                </button>
                                {openCalendarYear === year && (
                                    <div className="px-6 pb-4">
                                        {items.map((item, idx) => (
                                            <div key={idx} className="flex justify-between items-center py-2 border-b">
                                                <span className="text-gray-700">{item}</span>
                                                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition">
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

                {/* Academic & Administrative Audit */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Academic & Administrative Audit</h2>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4 text-left">S. No.</th>
                                    <th className="p-4 text-left">Document</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {academicAudits.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-blue-50">
                                        <td className="p-4">{idx + 1}</td>
                                        <td className="p-4">{item}</td>
                                        <td className="p-4">
                                            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                                                Download
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Environment Audits Certificates with Dropdown */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Environment Audits Certificates</h2>
                    <div className="space-y-4">
                        {Object.entries(environmentAuditCertificates).map(([year, items]) => (
                            <div key={year} className="border rounded-xl shadow-md">
                                <button
                                    className="w-full text-left px-6 py-4 font-semibold text-secondary hover:bg-gray-100 focus:outline-none flex justify-between items-center"
                                    onClick={() => setOpenEnvCertYear(openEnvCertYear === year ? null : year)}
                                >
                                    <span>{year}</span>
                                    <span className="text-xl">{openEnvCertYear === year ? '▼' : '►'}</span>
                                </button>
                                {openEnvCertYear === year && (
                                    <div className="px-6 pb-4">
                                        {items.map((item, idx) => (
                                            <div key={idx} className="flex justify-between items-center py-2 border-b">
                                                <span className="text-gray-700">{item}</span>
                                                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition">
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

                {/* Environment Audits Reports with Dropdown */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Environment Audits Reports</h2>
                    <div className="space-y-4">
                        {Object.entries(environmentAuditReports).map(([year, items]) => (
                            <div key={year} className="border rounded-xl shadow-md">
                                <button
                                    className="w-full text-left px-6 py-4 font-semibold text-secondary hover:bg-gray-100 focus:outline-none flex justify-between items-center"
                                    onClick={() => setOpenEnvReportYear(openEnvReportYear === year ? null : year)}
                                >
                                    <span>{year}</span>
                                    <span className="text-xl">{openEnvReportYear === year ? '▼' : '►'}</span>
                                </button>
                                {openEnvReportYear === year && (
                                    <div className="px-6 pb-4">
                                        {items.map((item, idx) => (
                                            <div key={idx} className="flex justify-between items-center py-2 border-b">
                                                <span className="text-gray-700">{item}</span>
                                                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition">
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

                {/* Best Practices */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Best Practices</h2>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4 text-left">S. No.</th>
                                    <th className="p-4 text-left">Document</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bestPractices.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-blue-50">
                                        <td className="p-4">{String(idx + 1).padStart(2, '0')}</td>
                                        <td className="p-4">{item}</td>
                                        <td className="p-4">
                                            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                                                Download
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Best Practices Evidence */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Best Practices Evidence</h2>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4 text-left">S. No.</th>
                                    <th className="p-4 text-left">Document</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bestPracticesEvidence.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-blue-50">
                                        <td className="p-4">{String(idx + 1).padStart(2, '0')}</td>
                                        <td className="p-4">{item}</td>
                                        <td className="p-4">
                                            <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                                                Download
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Institute Distinctiveness */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Institute Distinctiveness</h2>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4 text-left">S. No.</th>
                                    <th className="p-4 text-left">Document</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-blue-50">
                                    <td className="p-4">01</td>
                                    <td className="p-4">Institute Distinctiveness</td>
                                    <td className="p-4">
                                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Institute Distinctiveness Evidences */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Institute Distinctiveness Evidences</h2>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4 text-left">S. No.</th>
                                    <th className="p-4 text-left">Document</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-blue-50">
                                    <td className="p-4">01</td>
                                    <td className="p-4">Institute Distinctiveness Evidences</td>
                                    <td className="p-4">
                                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Green Initiatives */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Green Initiatives</h2>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4 text-left">S. No.</th>
                                    <th className="p-4 text-left">Document</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-blue-50">
                                    <td className="p-4">01</td>
                                    <td className="p-4">Green Initiatives</td>
                                    <td className="p-4">
                                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Events on Green Practices */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-primary mb-4">Events on Green Practices</h2>
                    <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-secondary text-white">
                                <tr>
                                    <th className="p-4 text-left">S. No.</th>
                                    <th className="p-4 text-left">Document</th>
                                    <th className="p-4 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="hover:bg-blue-50">
                                    <td className="p-4">01</td>
                                    <td className="p-4">Events on Green Practices</td>
                                    <td className="p-4">
                                        <button className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">
                                            Download
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default IQACPage;
