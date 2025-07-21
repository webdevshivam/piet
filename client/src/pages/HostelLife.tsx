
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import BreadCrumb from '@/components/BreadCrumb';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';

const Card = ({ iconClass, title, description, color }) => (
    <div className={`bg-white shadow-md border-2 border-primary border-l-8 rounded-xl p-8 flex flex-col items-start transition hover:scale-[1.02] duration-300 min-h-[250px]`}>
        <div className="text-5xl text-secondary mb-4">
            <i className={`fas ${iconClass}`}></i>
        </div>
        <h3 className="text-2xl font-semibold mb-3 text-primary">{title}</h3>
        <p className="text-gray-600 text-base whitespace-pre-line">{description}</p>
    </div>
);

const HostelLife = () => {
    const hostels = [
        { name: 'Gayatri Girls Hostel', type: 'Girls', capacity: 1100 },
        { name: 'Aravali Boys Hostel', type: 'Boys', capacity: 1900 },
        { name: 'Gurushikhar Boys Hostel', type: 'Boys', capacity: 'Expandable' },
        { name: 'Gargi Girls Hostel', type: 'Girls', capacity: 'Expandable' },
        { name: 'Himalaya Boys Hostel', type: 'Boys', capacity: 'Expandable' },
    ];

    const advantages = [
        "Congenial atmosphere for study",
        "Fixed time for everything making students habitual",
        "Students lead a disciplined life",
        "Students learn regularity and punctuality",
        "Students can get help from brighter students",
        "Increased aesthetical, cultural and intellectual values",
        "Students can borrow books from one another",
        "Opportunity of reading newspapers",
        "Students learn many useful lessons of life",
        "Students develop self-reliance habits",
        "Festival celebrations",
        "Great opportunity to develop social skills",
        "Better records of attendance, results & placements",
        "Opportunity to become team leaders for various fests",
        "Various activities for skill enhancement",
        "Activities for placement preparation",
        "Intra & Inter hostel competitions",
        "Learning experience to manage monthly expenses",
        "Negligible commute time, saving time for activities",
        "Preference for campus sponsored events",
        "24x7 academic support from friends & faculty",
        "Hobby oriented programs available",
        "Full access to all sports facilities"
    ];

    const facilities = [
        "Regular housekeeping & maintenance",
        "Hot water through solar water heater in winters",
        "Purified & Chilled RO water",
        "Variety of items at canteen and provision store",
        "100% Secured campus",
        "24x7 electricity backup",
        "24x7 Medical facilities and Ambulance",
        "24x7 Wi-Fi facilities for all devices",
        "Complete Gymnasium with ultramodern equipment",
        "Laundry Facilities",
        "Guest house facility for parents",
        "TV room, Seminar Halls & Convention Centre"
    ];

    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Hostel Life"
                description="Experience home away from home at PIET hostels with world-class facilities and vibrant student community."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Student Life', href: '#' },
                    { label: 'Hostel Life', isCurrent: true },
                ]}
            />

            <div className="container mx-auto py-10 px-4">
                {/* Hero Section */}
                <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-xl p-8 mb-12">
                    <div className="flex items-center mb-6">
                        <i className="fas fa-home text-6xl mr-6"></i>
                        <div>
                            <h1 className="text-4xl font-bold mb-2">Poornima Hostels</h1>
                            <p className="text-xl opacity-90">Home Away From Home</p>
                        </div>
                    </div>
                    <p className="text-lg leading-relaxed">
                        Poornima Institute hostels provide ample scope, opportunities and facilities for all-round development of personality and leadership qualities among students. Students participate effectively in hostel management, food services, games and sports, cultural and literary activities under faculty guidance.
                    </p>
                </div>

                {/* Main Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                    <Card
                        iconClass="fa-house-user"
                        title="Independent Living"
                        description={`Experience the greatest blessing of hostel life - independence. Apart from necessary rules and regulations, students are their own masters with opportunities for personal growth and friendship building.`}
                        color="border-yellow-400"
                    />
                    <Card
                        iconClass="fa-people-group"
                        title="Community & Cooperation"
                        description={`Mutual cooperation, sympathy, and love are characteristics of hostel life. Students inspire each other, creating an environment where all-round personality development is possible.`}
                        color="border-green-500"
                    />
                    <Card
                        iconClass="fa-bed"
                        title="Basic Facilities"
                        description={`Reasonably big and airy rooms with good natural light, semi-furnished with complete fittings. Choose to share with students from same or different fields in a safe and secure environment.`}
                        color="border-pink-500"
                    />
                    <Card
                        iconClass="fa-utensils"
                        title="Dining Excellence"
                        description={`4 vegetarian meals daily, hygienic mess in self-service mode. Menu designed considering student requirements with morning tea, breakfast, lunch, evening snacks, dinner and milk.`}
                        color="border-purple-500"
                    />
                </div>

                {/* Director Student Welfare Section */}
                <div className="bg-blue-50 border-2 border-primary rounded-xl p-8 mb-12">
                    <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
                        <i className="fas fa-user-tie text-secondary mr-3"></i>
                        Director, Student Welfare
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        The Office of the Director, Student Welfare acts as a nodal centre for promoting collaboration and fellowship among students on campus. It actively coordinates activities for student welfare, taking into account their difficulties and socio-economic diversities. Students get facilities to articulate their creativity and aspirations with objectives of social harmony and campus peace.
                    </p>
                </div>

                {/* Recreational & Health Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <Card
                        iconClass="fa-dumbbell"
                        title="Recreation & Sports"
                        description={`Open grounds for outdoor team games & athletics, natural lawn for relaxation, multi-facility gym, and indoor games including TT, Chess, Carom Board, Foosball and Pool.`}
                        color="border-orange-500"
                    />
                    <Card
                        iconClass="fa-heart-pulse"
                        title="Healthcare Services"
                        description={`First aid facility, hospitalization arrangements with nearby Mahatma Gandhi hospital at walking distance. Health awareness through pamphlets on AIDS, cancer, smoking, alcoholism, immunization and blood donation.`}
                        color="border-red-500"
                    />
                </div>

                {/* Security Section */}
                <div className="bg-red-50 border-2 border-primary rounded-xl p-8 mb-12">
                    <h3 className="text-3xl font-bold text-primary mb-6 flex items-center">
                        <i className="fas fa-shield-alt text-secondary mr-3"></i>
                        Security - Safe & Secure Campus
                    </h3>
                    <p className="text-gray-700 mb-4">
                        Stringent security through CCTV Cameras, Fire warning Systems and 24 Hours Guards. Unauthorized persons and vehicles are not permitted to enter the campus.
                    </p>
                </div>

                {/* Hostel Advantages */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-primary mb-6 flex items-center">
                        <i className="fas fa-star text-secondary mr-3"></i>
                        Life at Poornima Hostels - Advantages
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {advantages.map((advantage, index) => (
                            <div key={index} className="bg-white border border-primary rounded-lg p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-start">
                                    <i className="fas fa-check-circle text-secondary mr-3 mt-1"></i>
                                    <p className="text-gray-700">{advantage}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Additional Facilities */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-primary mb-6 flex items-center">
                        <i className="fas fa-cogs text-secondary mr-3"></i>
                        Additional Facilities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {facilities.map((facility, index) => (
                            <div key={index} className="bg-white border border-primary rounded-lg p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-start">
                                    <i className="fas fa-check-circle text-secondary mr-3 mt-1"></i>
                                    <p className="text-gray-700">{facility}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Faculty & Staff Accommodation */}
                <div className="bg-green-50 border-2 border-primary rounded-xl p-8 mb-12">
                    <h3 className="text-3xl font-bold text-primary mb-6 flex items-center">
                        <i className="fas fa-building-user text-secondary mr-3"></i>
                        Faculty & Staff Accommodation
                    </h3>
                    <p className="text-gray-700 mb-6">
                        To encourage faculty & staff members to stay in Poornima hostels, the management offers affordable accommodation to its faculty & staff members.
                    </p>
                </div>

                {/* Hostel Details Table */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-primary mb-6 flex items-center">
                        <i className="fas fa-hotel text-secondary mr-3"></i>
                        Hostel Details
                    </h3>
                    <p className="text-gray-700 mb-6">
                        Poornima Group hostels with residential capacity of 3000 students including 1100 girls and 1900 boys separately. Built up of more than a million square feet where students feel at home and safe 24/7.
                    </p>

                    <div className="overflow-x-auto rounded-lg border border-primary">
                        <table className="w-full text-left table-auto">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th className="py-4 px-6 font-semibold">Hostel Name</th>
                                    <th className="py-4 px-6 font-semibold">Type</th>
                                    <th className="py-4 px-6 font-semibold">Capacity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {hostels.map((hostel, index) => (
                                    <tr key={index} className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                        <td className="py-4 px-6 font-medium text-primary">{hostel.name}</td>
                                        <td className="py-4 px-6">{hostel.type}</td>
                                        <td className="py-4 px-6">{hostel.capacity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Important Documents */}
                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-primary mb-6 flex items-center">
                        <i className="fas fa-file-alt text-secondary mr-3"></i>
                        Important Documents
                    </h3>

                    <div className="overflow-x-auto rounded-lg border border-primary">
                        <table className="w-full text-left table-auto">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th className="py-4 px-6 font-semibold">S. No.</th>
                                    <th className="py-4 px-6 font-semibold">Document</th>
                                    <th className="py-4 px-6 font-semibold">Download</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { no: 1, title: 'Hostel Form Student', file: '#' },
                                    { no: 2, title: 'Employee Accommodation Form', file: '#' },
                                    { no: 3, title: 'General Requirements of new hosteller', file: '#' },
                                    { no: 4, title: 'Fee Structure', file: '#' },
                                ].map((doc, index) => (
                                    <tr key={index} className={`border-t ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                                        <td className="py-4 px-6">{doc.no}</td>
                                        <td className="py-4 px-6 font-medium">{doc.title}</td>
                                        <td className="py-4 px-6">
                                            <a 
                                                href={doc.file} 
                                                className="text-primary hover:text-secondary font-medium hover:underline transition-colors flex items-center"
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                <i className="fas fa-download mr-2"></i>
                                                Download
                                            </a>
                                        </td>
                                    </tr>
                                ))}
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

export default HostelLife;
