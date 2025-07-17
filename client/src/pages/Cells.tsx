import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'
import BreadCrumb from '@/components/BreadCrumb'
import DynamicTable from '@/components/DynamicTable '
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'
const documentColumns = [
    { label: 'S. No', key: 'sno' },
    { label: 'Committee/Cell', key: 'name' },
    { label: 'Download', key: 'download' }
];

const documentData = [

    {
        sno: 1,
        name: 'Governing Council',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 2,
        name: 'Equal Opportunities Cell',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 3,
        name: 'Socio-Economically Disadvantaged Groups Cell',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 4,
        name: 'Anti-Ragging committee',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 5,
        name: 'Grievance Redressal committee',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 6,
        name: 'SC-ST-OBC Monitoring Cell for Redressal of Grievance',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 7,
        name: 'Minority Cell',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 8,
        name: 'Internal Complaint Committee (Redressal of Sexual Harassment) & Women Development cell for Working women',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 9,
        name: 'Examination Committee',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 10,
        name: 'Poornima Institute Alumni Society (PIAS)',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 11,
        name: 'Maintenance Committee',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 12,
        name: 'Purchase Committee',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 13,
        name: 'Library Committee',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 14,
        name: 'Internal Quality Assurance Cell (IQAC)',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 15,
        name: 'Institution’s Innovation Council (IIC)',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 16,
        name: 'Committee for NEP 2020 Implementation',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 17,
        name: 'Artist/Artisans in Residence Cell',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 18,
        name: 'Intellectual Property Right (IPR) Cell',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 19,
        name: 'Board of Studies (Department of Artificial Intelligence & Data Science)',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 20,
        name: 'Board of Studies (Department of Computer Science & Engineering)',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 21,
        name: 'Board of Studies (Department of Internet of Things)',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 22,
        name: 'Board of Studies (Department of Appiled Sciences)',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 23,
        name: 'Finance Committee',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 24,
        name: 'Admission Committee',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 25,
        name: 'Student Welface Committee',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    },
    {
        sno: 26,
        name: 'Academic Counsil',
        download: (
            <a href="/downloads/fdp-brochure.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download"></i> Download
                </button>
            </a>
        )
    }



];
const Cells = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Cells and Committees"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    {
                        label: 'Cells and Committees', isCurrent: true
                    },
                ]}
            />
            <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">Cells and Committees

                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={documentColumns} data={documentData} />

            </div>


            <Cta />
            <Footer />
        </div>
    )
}

export default Cells
