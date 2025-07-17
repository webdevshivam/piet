import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'

import BreadCrumb from '@/components/BreadCrumb'
import ReportTimeline from '@/components/ReportTimeline'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

const reports = [
    {
        year: "2023-24",
        title: "Annual Report 2023-24",
        pdfUrl: "/pdfs/aicte-2025-26.pdf",
    },
    {
        year: "2022-23",
        title: "Annual Report 2022-23",
        pdfUrl: "/pdfs/aicte-2024-25.pdf",
    },
    {
        year: "2023-24",
        title: "AICTE 2023-24 Report",
        pdfUrl: "/pdfs/aicte-2023-24.pdf",
    },
    {
        year: "2021-22",
        title: "Annual Report 2021-22",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
    },
    {
        year: "2020-21",
        title: "Annual Report 2020-21",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
    },

    {
        year: "2019-20",
        title: "AICTE 2019-20 Report",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
    },
    {
        year: " 2018-19",
        title: "AICTE  2018-19 Report",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
    },



];



const AnnualReport = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Annual Reports"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Annual Reports', isCurrent: true },
                ]}
            />

            <main className='container mx-auto px-4 lg:px-0 relative z-10 my-10 flex items-center justify-center flex-col'>
                <div className="text-center">

                    <h2 className="text-3xl  font-heading font-bold text-primary mb-6 leading-tight font-extrabold text-gray-900 mb-4 pb-2  inline-block">
                        Annual Report
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                </div>

                <div className="px-4 py-8">
                    <ReportTimeline title="" data={reports} />
                </div>

            </main>
            <Cta />
            <Footer />

        </div>
    )
}

export default AnnualReport
