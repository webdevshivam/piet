import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cta from '@/components/Cta';
import BreadCrumb from '@/components/BreadCrumb';
import DynamicTable from '@/components/DynamicTable ';

interface NbaDataItem {
    sno: number;
    name: string;
    download: JSX.Element;
}

interface TableColumn {
    label: string;
    key: keyof NbaDataItem;
}

const nbaColumns: TableColumn[] = [
    { label: 'S. No', key: 'sno' },
    { label: 'Name', key: 'name' },
    { label: 'Download', key: 'download' }
];

const nbaData: NbaDataItem[] = [
    {
        sno: 1,
        name: 'NBA_ Electrical Engineering',
        download: (
            <a href="/downloads/nba-electrical-engineering.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 2,
        name: 'NBA_Civil Engineering',
        download: (
            <a href="/downloads/nba-civil-engineering.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 3,
        name: 'NBA_Computer Science Engineering_Phase - I',
        download: (
            <a href="/downloads/nba-cse-phase-1.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    },
    {
        sno: 4,
        name: 'NBA_Computer Science Engineering_Phase - II',
        download: (
            <a href="/downloads/nba-cse-phase-2.pdf" download target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-white px-4 py-1 rounded hover:bg-secondary transition inline-flex items-center gap-2">
                    <i className="fas fa-download" /> Download
                </button>
            </a>
        )
    }
];

const NbaPage: React.FC = () => {
    return (
        <div>
            <Header />
            <BreadCrumb
                title="NBA Accreditation"
                description="Download NBA Accreditation certificates for various departments at Poornima Institute."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'NBA Accreditation', isCurrent: true },
                ]}
            />

            <div className="container mt-10 mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">
                    NBA Accreditations
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={nbaColumns} data={nbaData} />
            </div>

            <Cta />
            <Footer />
        </div>
    );
};

export default NbaPage;
