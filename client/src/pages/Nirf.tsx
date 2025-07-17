import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import BreadCrumb from '@/components/BreadCrumb';
import DynamicTable from '@/components/DynamicTable ';

interface NirfDataItem {
    sno: number;
    name: string;
    download: JSX.Element;
}

interface TableColumn {
    label: string;
    key: keyof NirfDataItem;
}

const nirfColumns: TableColumn[] = [
    { label: 'S. No', key: 'sno' },
    { label: 'Name', key: 'name' },
    { label: 'Download', key: 'download' }
];

const nirfData: NirfDataItem[] = [
    {
        sno: 1,
        name: 'NIRF_SDG_Institution_2025',
        download: (
            <a href="/downloads/nirf-sdg-institution-2025.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 2,
        name: 'NIRF_Engineering_2025',
        download: (
            <a href="/downloads/nirf-engineering-2025.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 3,
        name: 'NIRF College_2025',
        download: (
            <a href="/downloads/nirf-college-2025.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 4,
        name: 'NIRF_Innovation_2024',
        download: (
            <a href="/downloads/nirf-innovation-2024.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 5,
        name: 'NIRF_Engineering_2024',
        download: (
            <a href="/downloads/nirf-engineering-2024.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 6,
        name: 'NIRF Engineering_2023',
        download: (
            <a href="/downloads/nirf-engineering-2023.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    }
];

const NirfPage: React.FC = () => {
    return (
        <div>
            <Header />
            <BreadCrumb
                title="NIRF"
                description="Download NIRF submissions and rankings for various years and categories."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'NIRF', isCurrent: true },
                ]}
            />

            <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    NIRF Documents
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={nirfColumns} data={nirfData} />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default NirfPage;
