
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'

import BreadCrumb from '@/components/BreadCrumb'
import ReportTimeline from '@/components/ReportTimeline'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

const accounts = [
    {
        year: "2023-24",
        title: "2023-24 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2025-26.pdf",
    },
    {
        year: "2022-23",
        title: "2022-23 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2024-25.pdf",
    },
    {
        year: "2021-22",
        title: "2021-22 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2023-24.pdf",
    },
    {
        year: "2020-21",
        title: "2020-21 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
    },
    {
        year: "2019-20",
        title: "2019-20 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
    },

    {
        year: "2018-19",
        title: "2018-19 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
    },
    {
        year: " 2017-18",
        title: "2017-18 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
    },

    {
        year: " 2016-17",
        title: "2016-17 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
    },


    {
        year: " 2015-16",
        title: "2015-16 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
    },


    {
        year: " 2014-15",
        title: "2014-15 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
    },




];

const AnnualAccount = () => {
    return (
        <div>
            <Header />
            <AccessibilityFeatures />
            <BreadCrumb
                title="Annual Accounts"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Annual Accounts', isCurrent: true },
                ]}
            />

            <main className='container mx-auto px-4 lg:px-0 relative z-10 my-10 flex items-center justify-center flex-col'>
                <div className="text-center">

                    <h2 className="text-3xl  font-heading font-bold text-primary mb-6 leading-tight font-extrabold text-gray-900 mb-4 pb-2  inline-block">
                        Audited Financial Statements
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                </div>

                <div className="px-4 py-8">
                    <ReportTimeline title="" data={accounts} />
                </div>

            </main>
            <Cta />
            <Footer />

        </div>
    )
}

export default AnnualAccount
