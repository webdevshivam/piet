import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import BreadCrumb from '@/components/BreadCrumb';
import DynamicTable from '@/components/DynamicTable ';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'
const codeOfConductColumns = [
    { label: 'S. No', key: 'sno' },
    { label: 'Code of Conduct', key: 'name' },
    { label: 'Download', key: 'download' }
];

const policyColumns = [
    { label: 'S. No', key: 'sno' },
    { label: 'Policy', key: 'name' },
    { label: 'Download', key: 'download' }
];

const codeOfConductData = [
    {
        sno: 1,
        name: 'Code of Conduct for (Director/Faculty/Staff) 2023-2024',
        download: (
            <a href="/downloads/code-of-conduct-2023-24.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 2,
        name: 'Code of Conduct for (Director/Faculty/Staff) 2022-2023',
        download: (
            <a href="/downloads/code-of-conduct-2022-23.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 3,
        name: 'Code of Conduct for (Director/Faculty/Staff) 2021-2022',
        download: (
            <a href="/downloads/code-of-conduct-2021-22.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 4,
        name: 'Code of Conduct for (Director/Faculty/Staff) 2020-2021',
        download: (
            <a href="/downloads/code-of-conduct-2020-21.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 5,
        name: 'Code of Conduct for (Director/Faculty/Staff) 2019-2020',
        download: (
            <a href="/downloads/code-of-conduct-2019-20.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 6,
        name: 'Code of Conduct for (Director/Faculty/Staff) 2018-2019',
        download: (
            <a href="/downloads/code-of-conduct-2018-19.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    }
];

const policyData = [
    {
        sno: 1,
        name: 'Academia Industry Interaction Policy',
        download: (
            <a href="/downloads/policy-academia.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 2,
        name: 'Academic Manual',
        download: (
            <a href="/downloads/policy-academic-manual.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 3,
        name: 'Admission Policy',
        download: (
            <a href="/downloads/policy-admission.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 4,
        name: 'Alumni Relations Policy',
        download: (
            <a href="/downloads/policy-alumni.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 5,
        name: 'Code of Conduct for Faculty and Staff Members',
        download: (
            <a href="/downloads/policy-conduct-faculty-staff.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 6,
        name: 'E-Governance Policy and ERP Manual',
        download: (
            <a href="/downloads/policy-egovernance.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 7,
        name: 'Equal Opportunity Policy',
        download: (
            <a href="/downloads/policy-equal-opportunity.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 8,
        name: 'Environment Management Policy',
        download: (
            <a href="/downloads/policy-environment.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 9,
        name: 'Energy Management Policy',
        download: (
            <a href="/downloads/policy-energy.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 10,
        name: 'Feedback Policy',
        download: (
            <a href="/downloads/policy-feedback.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 11,
        name: 'Gender Equality Policy',
        download: (
            <a href="/downloads/policy-gender-equality.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 12,
        name: 'HR and Welfare Policy',
        download: (
            <a href="/downloads/policy-hr-welfare.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 13,
        name: 'ICT Policy & Website',
        download: (
            <a href="/downloads/policy-ict.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 14,
        name: 'IDEA Lab Manual',
        download: (
            <a href="/downloads/policy-idea-lab.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 15,
        name: 'Infrastructure Manual & Maintenance Policy',
        download: (
            <a href="/downloads/policy-infrastructure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 16,
        name: 'IQAC-Handbook',
        download: (
            <a href="/downloads/policy-iqac.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 17,
        name: 'IT policy',
        download: (
            <a href="/downloads/policy-it.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 18,
        name: 'Library Manual',
        download: (
            <a href="/downloads/policy-library.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 19,
        name: 'Tutor Guardian (Mentor-Mentee) System Policy',
        download: (
            <a href="/downloads/policy-mentor-mentee.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 20,
        name: 'PIET Examination Policy',
        download: (
            <a href="/downloads/policy-exam.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 21,
        name: 'Policy for Beyond Classroom Learning and Value Added Courses',
        download: (
            <a href="/downloads/policy-beyond-classroom.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 22,
        name: 'Policy for e-Waste',
        download: (
            <a href="/downloads/policy-ewaste.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 23,
        name: 'Policy for Entrepreneurship & Business Incubation',
        download: (
            <a href="/downloads/policy-entrepreneurship.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 24,
        name: 'Policy for Ethics, Values, Women Empowerment & Inclusive Environment',
        download: (
            <a href="/downloads/policy-ethics-values.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 25,
        name: 'Grievances Redressal',
        download: (
            <a href="/downloads/policy-grievances.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 26,
        name: 'NEP Policy 2020',
        download: (
            <a href="/downloads/policy-nep2020.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 27,
        name: 'Purchase Policy',
        download: (
            <a href="/downloads/policy-purchase.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 28,
        name: 'Quality Policy',
        download: (
            <a href="/downloads/policy-quality.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 29,
        name: 'Research & Development Policy',
        download: (
            <a href="/downloads/policy-rnd.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 30,
        name: 'Scholorship Policy',
        download: (
            <a href="/downloads/policy-scholarship.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 31,
        name: 'Social Outreach Policy',
        download: (
            <a href="/downloads/policy-social-outreach.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 32,
        name: 'Student Activities Policy',
        download: (
            <a href="/downloads/policy-student-activities.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 33,
        name: 'Training and Placement & Higher Studies Policy',
        download: (
            <a href="/downloads/policy-placement.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 34,
        name: 'Transportation Policy',
        download: (
            <a href="/downloads/policy-transportation.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 35,
        name: 'Waste Management Policy',
        download: (
            <a href="/downloads/policy-waste-management.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 36,
        name: 'Water Management Policy',
        download: (
            <a href="/downloads/policy-water-management.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 37,
        name: 'Fee Refund Policy',
        download: (
            <a href="/downloads/policy-fee-refund.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    }
];


const RulesAndRegulations = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Rules and Regulations"
                description="Get access to institutional policies and codes of conduct at Poornima Institute."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Rules and Regulations', isCurrent: true },
                ]}
            />

            <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    Code of Conduct
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={codeOfConductColumns} data={codeOfConductData} />

                <h2 className="text-3xl text-primary font-bold mt-16 mb-8 text-center">
                    Policies
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={policyColumns} data={policyData} />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default RulesAndRegulations;
