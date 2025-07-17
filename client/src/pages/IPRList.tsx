import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import BreadCrumb from '@/components/BreadCrumb';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'
const iprData = {
    2025: [
        { sno: 1, grantNo: '202511003955', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'REVOLUTIONIZING TRAIN HOSPITALITY WITH INTELLIGENT PNR INTEGRATION AND REAL-TIME TRACKING' },
        { sno: 2, grantNo: '202511003957', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'Intelligent Autonomous Drone: Dual-Battery Swapping, Ethical AI Navigation, IoT Weather Insights, AR/VR Control, and Noise-Cancelling Communication' },
        { sno: 3, grantNo: '202511004327', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'AI-POWERED ROBOTIC NAVIGATION SYSTEM FOR DYNAMIC TRAFFIC MANAGEMENT USING IOT AND DEEP LEARNING' },
        { sno: 4, grantNo: '202511004346', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'AN INTELLIGENT VOICE COMMUNICATION SYSTEM FOR HUMANOID ROBOT WITH MOOD RECOGNITION AND SELF-LEARNING FOR PERSONALIZED INTERACTION BASED ON IOT AND DEEP LEARNING' },
        { sno: 5, grantNo: '202511004358', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'A NOVEL VR-BASED HAND THERAPY SYSTEM EMPOWERED BY IOT AND AI-ML FOR STROKE REHABILITATION' },
        { sno: 6, grantNo: '202511004363', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'ADAPTIVE AI SYSTEM FOR FACE RECOGNITION AND INTELLIGENT VOICE INTERACTION IN LEARNING ENVIRONMENTS' },
        { sno: 7, grantNo: '202511004392', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'AUTONOMOUS HUMANOID ROBOT WITH REAL-TIME BRAIN-MIMICKING CAPABILITIES USING NEURAL SIGNAL PROCESSING' },
        { sno: 8, grantNo: '202511004399', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'BI-DIRECTIONAL LINE FOLLOWING ROBOT WITH ENHANCED SENSOR INTEGRATION AND AUTONOMOUS OPERATIONAL CAPABILITIES' },
        { sno: 9, grantNo: '202511004408', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'VISIONARY CONNECT: MULTI-FUNCTIONAL SMART GLASSES FOR ENHANCED COMMUNICATION AND MOBILITY FOR THE HEARING, SPEECH, AND VISION IMPAIRED' },
        { sno: 10, grantNo: '202511008505', author: 'Ms. Alka Rani', affiliation: 'PIET, Jaipur', title: 'Smart Pool Guardian: Voice-Controlled Management System' },
        { sno: 11, grantNo: '202511009043', author: 'Aditya Pareek', affiliation: 'PIET, Jaipur', title: 'EmpowerFemGuard: Smart Vending with Mobile Authentication & Personalized Usage Tracking' },
        { sno: 12, grantNo: '4142/2025-CO/L', author: 'Dr. Sonia Kaur Bansal', affiliation: 'PIET, Jaipur', title: 'Interactive Multi-Sensory Learning Method for Teaching English Poetry in Classrooms' },
    ],
    2024: [
        { sno: 1, grantNo: '202411000987', author: 'Mr. Adiya Pareek', affiliation: 'PIET, Jaipur', title: 'PawsGuard Pro: Integrated GPS-GSM Pet Tracker with Heartbeat Monitoring' },
        { sno: 2, grantNo: '202411000979', author: 'Mr. Adiya Pareek', affiliation: 'PIET, Jaipur', title: 'CamScanPay: QR Code Payment Authentication with Fingerprint Security' },
        { sno: 3, grantNo: '202411000922', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'IoT Enable Extended Reality for College Virtual Tour: An Emusive Mobile Application with Real Voice' },
        { sno: 4, grantNo: '202411001312', author: 'Ms. Himani Jangid', affiliation: 'PIET, Jaipur', title: 'Sustainable AgriTech: A Comprehensive IoT Approach to Smart Farming' },
        { sno: 5, grantNo: '202411001543', author: 'Mr. Nakshatra Kumar Gupta', affiliation: 'PIET, Jaipur', title: 'Innovative Smart Mirror: A Fusion of Technology and Elegance' },
        { sno: 6, grantNo: '202411001779', author: 'Mr. Kunal Sharma', affiliation: 'PIET, Jaipur', title: 'Integrative Solar-Electric Vehicle Power System with High-Efficiency Battery Management' },
        { sno: 7, grantNo: '202411025820', author: 'Ms. Alka Rani', affiliation: 'PIET, Jaipur', title: 'Street Light Advanced Emergency Sensor and Switch System' },
        { sno: 8, grantNo: '202411025772', author: 'Ms. Aniva Sharma', affiliation: 'PIET, Jaipur', title: 'TempFlow Hydration: Your Personalized Thirst Quencher' },
        { sno: 9, grantNo: '202411025774', author: 'Ms. Alka Rani', affiliation: 'PIET, Jaipur', title: 'Licence Plate Recognition System for Anti-Counterfeiting' },
        { sno: 10, grantNo: '202411025781', author: 'Mr. Indra Kishor', affiliation: 'PIET, Jaipur', title: 'IoT-Enhanced Collaborative Robot: Intelligent Solutions for Advanced Healthcare and Home Security with AR Integration' },
        { sno: 11, grantNo: '202411026398', author: 'Mr. Vikash Sharma', affiliation: 'PIET, Jaipur', title: 'Smart Glove System Enabling Gesture-Driven Speech Interface for Augmentative and Alternative Communication (AAC) in Speech-Impaired Individuals' },
        { sno: 12, grantNo: '202411025837', author: 'Mr. Abhay Choudhary', affiliation: 'PIET, Jaipur', title: 'Development of Vehicle Monitoring System' },
        { sno: 13, grantNo: '202411026396', author: 'Mr. Rajendra Singh', affiliation: 'PIET, Jaipur', title: 'To protect the Healthy with sensors in Jacket utilizing Modern Technology' },
        { sno: 14, grantNo: '202411026387', author: 'Ms. Jayshree Surolia', affiliation: 'PIET, Jaipur', title: 'Mobile Device Based Communication System for Alerts, Pertaining to Women Safety' },
        { sno: 15, grantNo: '202411026385', author: 'Dr. Payal Bansal', affiliation: 'PIET, Jaipur', title: 'Water Saving Module by Integrating Flush Model System' },
    ],
    2023: [
        { sno: 1, grantNo: '202311037475', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'Intelligent waste segregation: Enhancing efficiency through smart dustbin for dry and wet waste segregation' },
        { sno: 2, grantNo: '202311037494', author: 'Mr. Udit Mamodiya', affiliation: 'PIET, Jaipur', title: 'Advanced and compact IoT-based system for home automation and intelligent electricity' },
        { sno: 3, grantNo: '202311049138', author: 'Satish Parmar', affiliation: 'PIET, Jaipur', title: 'Design and development of an IoT-based knee guard to aid blind individual in obstacle avoidance' },
        { sno: 4, grantNo: '202311037396', author: 'Mr. Abhishek Dadhich', affiliation: 'PIET, Jaipur', title: "Digital system for student's presence" },
        { sno: 5, grantNo: '202311051802', author: 'Mr. Indra Kishore', affiliation: 'PIET, Jaipur', title: 'Immersive XR system with voice assistant integration for exploring of educational institutions' },
        { sno: 6, grantNo: '202311037912', author: 'Dr. Uday Singh', affiliation: 'PIET, Jaipur', title: 'Network Traffic Analyzer using NodeMCU-32' },
        { sno: 7, grantNo: '202311078174', author: 'Ms. Alka Rani', affiliation: 'PIET, Jaipur', title: 'An Intelligent Automatic Bill Generation System' },
        { sno: 8, grantNo: '202311076140', author: 'Mr. Indra Kishore', affiliation: 'PIET, Jaipur', title: 'Development of the Artificial Intelligence-Based AgroGenius System for Enhancing Farming Efficiency Based on the IoT-AR Drone Approach' },
        { sno: 9, grantNo: '202311075320', author: 'Mr. Indra Kishore', affiliation: 'PIET, Jaipur', title: 'An IoT-Based Two-Way People Counter with Dynamic Tracking and Data Regression Analysis for Single Door Entry and Exit' },
        { sno: 10, grantNo: '202311037945', author: 'Dr. Anil Kumar', affiliation: 'PIET, Jaipur', title: 'Implementing IOT for Garbage Monitoring and Removal' },
        { sno: 11, grantNo: '202311086335', author: 'Mr. Rahul Sawhney', affiliation: 'PIET, Jaipur', title: 'Comparative Performance of Deep Learning Architectures in Lower-Grade Segmentation: An Empirical Analysis' },
    ],
};

const IPRAccordion = ({ year, data }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border rounded mb-2">
            <div className="cursor-pointer bg-gray-200 px-4 py-2 flex justify-between items-center" onClick={() => setIsOpen(!isOpen)}>
                <span className="font-semibold">{year}</span>
                <span>{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && (
                <table className="w-full text-sm text-left text-gray-600">
                    <thead className="text-xs uppercase bg-gray-100 text-gray-700">
                        <tr>
                            <th className="px-4 py-2">S. No</th>
                            <th className="px-4 py-2">Grant No.</th>
                            <th className="px-4 py-2">Author</th>
                            <th className="px-4 py-2">Affiliation</th>
                            <th className="px-4 py-2">Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, idx) => (
                            <tr key={idx} className="border-b">
                                <td className="px-4 py-2">{item.sno}</td>
                                <td className="px-4 py-2">{item.grantNo}</td>
                                <td className="px-4 py-2">{item.author}</td>
                                <td className="px-4 py-2">{item.affiliation}</td>
                                <td className="px-4 py-2">{item.title}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

const IPRList = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="List of IPR"
                description="Explore year-wise granted Intellectual Property Rights filed by faculty and staff of PIET."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'List of IPR', isCurrent: true },
                ]}
            />

            <div className="container mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-6 text-center">List of IPR</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                {Object.keys(iprData).sort((a, b) => b - a).map((year) => (
                    <IPRAccordion key={year} year={year} data={iprData[year]} />
                ))}
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default IPRList;
