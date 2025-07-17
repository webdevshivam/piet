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

const iqacMeetings = {
    '2024-25': ['Meeting 1 - Jan 2025', 'Meeting 2 - Mar 2025'],
    '2023-24': ['Meeting 1 - Aug 2023', 'Meeting 2 - Dec 2023'],
    '2022-23': ['Meeting 1 - May 2022', 'Meeting 2 - Nov 2022'],
};

const IQACPage = () => {
    const [openYear, setOpenYear] = useState(null);

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
                <h2 className="text-3xl font-bold text-primary mb-4">About IQAC</h2>
                <p className="text-gray-700 mb-6">
                    The Internal Quality Assurance Cell (IQAC) of Poornima Institute of Engineering and Technology, Jaipur was established in 2018 to enhance teaching-learning quality and sustain the institution's performance. The IQAC focuses on fostering a culture of belongingness and stakeholder participation in all activities.
                </p>
                <p className="text-gray-700 mb-6">
                    The institute's vision emphasizes "Pursuit of Excellence in Education," followed by Research and Entrepreneurship. The institution practices outcome-based education, student-centric experimental learning, participative learning, and problem-solving methodologies to improve learning experiences.
                </p>
                <p className="text-gray-700 mb-6">
                    The IQAC monitors academic activities, channels efforts, and institutionalizes good practices towards academic excellence. It includes the head of the institution, senior faculty members, distinguished educationalists, industry experts, local management representatives, and stakeholders.
                </p>

                {/* Vision and Mission */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-transform hover:scale-105">
                        <h3 className="text-xl font-bold text-secondary mb-2">Vision</h3>
                        <p className="text-gray-700">
                            To practice benchmarks and sustainable quality mechanism in academic and research initiative and process.
                        </p>
                    </div>
                    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-transform hover:scale-105">
                        <h3 className="text-xl font-bold text-secondary mb-2">Mission</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>To be the driving force for enhancing quality and academic excellence.</li>
                            <li>To establish a student-centric environment using ICT tools.</li>
                            <li>To assess academic progress through audits and ensure transparency.</li>
                            <li>To ensure proper support structure and stakeholder involvement.</li>
                        </ul>
                    </div>
                </div>

                {/* Quality Policy */}
                <h2 className="text-2xl font-bold text-primary mb-2">Quality Policy</h2>
                <table className="w-full border border-gray-300 mb-8">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">S. No.</th>
                            <th className="p-2 border">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2 border">1</td>
                            <td className="p-2 border">Quality Policy</td>
                        </tr>
                    </tbody>
                </table>

                {/* IQAC Constitution */}
                <h2 className="text-2xl font-bold text-primary mb-2">IQAC Constitution</h2>
                <table className="w-full border border-gray-300 mb-8">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">S. No.</th>
                            <th className="p-2 border">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {iqacConstitution.map((item, idx) => (
                            <tr key={idx}>
                                <td className="p-2 border">{idx + 1}</td>
                                <td className="p-2 border">{item}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Strategies and Functions */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-transform hover:scale-105">
                        <h3 className="text-xl font-bold text-secondary mb-2">IQAC Strategies</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Timely and efficient academic and administrative performance</li>
                            <li>Relevance and quality in programs</li>
                            <li>Equitable access and affordability</li>
                            <li>Modern teaching and learning methods</li>
                            <li>Credible evaluation procedures</li>
                            <li>Support structure adequacy</li>
                        </ul>
                    </div>

                    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-transform hover:scale-105">
                        <h3 className="text-xl font-bold text-secondary mb-2">IQAC Functions</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Development of benchmarks and quality parameters</li>
                            <li>Promoting a learner-centric environment</li>
                            <li>Collecting stakeholder feedback</li>
                            <li>Disseminating quality information</li>
                            <li>Organizing workshops and seminars</li>
                            <li>Documenting quality improvement activities</li>
                            <li>Developing institutional database and AQAR</li>
                        </ul>
                    </div>
                </div>

                {/* Handbook */}
                <h2 className="text-2xl font-bold text-primary mb-2">IQAC Handbook</h2>
                <table className="w-full border border-gray-300 mb-8">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">S. No.</th>
                            <th className="p-2 border">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2 border">1</td>
                            <td className="p-2 border">IQAC Handbook</td>
                        </tr>
                    </tbody>
                </table>

                {/* Initiatives */}
                <h2 className="text-2xl font-bold text-primary mb-2">IQAC Initiatives</h2>
                <table className="w-full border border-gray-300 mb-8">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">S. No.</th>
                            <th className="p-2 border">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {iqacInitiatives.map((item, idx) => (
                            <tr key={idx}>
                                <td className="p-2 border">{idx + 1}</td>
                                <td className="p-2 border">{item}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Perspective Plan */}
                <h2 className="text-2xl font-bold text-primary mb-2">Institute Perspective Plan</h2>
                <table className="w-full border border-gray-300 mb-8">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">S. No.</th>
                            <th className="p-2 border">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2 border">1</td>
                            <td className="p-2 border">Institute Perspective Plan</td>
                        </tr>
                    </tbody>
                </table>

                {/* Year-wise Meetings Collapsible */}
                <h2 className="text-2xl font-bold text-primary mb-2">IQAC Meetings (Year-wise)</h2>
                <div className="space-y-4 mb-10">
                    {Object.entries(iqacMeetings).map(([year, meetings]) => (
                        <div key={year} className="border rounded-xl shadow-md">
                            <button
                                className="w-full text-left px-6 py-4 font-semibold text-secondary hover:bg-gray-100 focus:outline-none"
                                onClick={() => setOpenYear(openYear === year ? null : year)}
                            >
                                {openYear === year ? '▼' : '►'} {year}
                            </button>
                            {openYear === year && (
                                <ul className="px-8 pb-4 list-disc text-gray-700">
                                    {meetings.map((meeting, idx) => (
                                        <li key={idx}>{meeting}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default IQACPage;
