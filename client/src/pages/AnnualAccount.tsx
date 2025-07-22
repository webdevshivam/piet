
import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'
import BreadCrumb from '@/components/BreadCrumb'
import StepwiseReportTimeline from '@/components/StepwiseReportTimeline'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

const accounts = [
    {
        year: "2023-24",
        title: "2023-24 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2025-26.pdf",
        description: "Comprehensive financial overview and audited statements for the academic year 2023-24",
        highlights: ["Financial Compliance", "Audit Excellence", "Transparency Standards"]
    },
    {
        year: "2022-23",
        title: "2022-23 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2024-25.pdf",
        description: "Detailed financial reporting and audit compliance for 2022-23",
        highlights: ["Revenue Growth", "Cost Optimization", "Regulatory Compliance"]
    },
    {
        year: "2021-22",
        title: "2021-22 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2023-24.pdf",
        description: "Financial accountability and audit documentation for 2021-22",
        highlights: ["Financial Stability", "Investment Returns", "Budget Management"]
    },
    {
        year: "2020-21",
        title: "2020-21 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
        description: "Financial resilience and management during challenging times in 2020-21",
        highlights: ["Crisis Management", "Financial Prudence", "Resource Allocation"]
    },
    {
        year: "2019-20",
        title: "2019-20 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
        description: "Foundational financial reporting and audit standards for 2019-20",
        highlights: ["Financial Framework", "Audit Standards", "Compliance Excellence"]
    },
    {
        year: "2018-19",
        title: "2018-19 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
        description: "Initial financial documentation and audit processes for 2018-19",
        highlights: ["Financial Setup", "Audit Implementation", "Transparency Initiative"]
    },
    {
        year: "2017-18",
        title: "2017-18 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
        description: "Early financial governance and audit compliance for 2017-18",
        highlights: ["Financial Governance", "Early Compliance", "Quality Standards"]
    },
    {
        year: "2016-17",
        title: "2016-17 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
        description: "Institutional financial foundation and audit establishment for 2016-17",
        highlights: ["Foundation Setup", "Audit Establishment", "Financial Planning"]
    },
    {
        year: "2015-16",
        title: "2015-16 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
        description: "Initial financial structure and audit framework for 2015-16",
        highlights: ["Financial Structure", "Audit Framework", "Initial Standards"]
    },
    {
        year: "2014-15",
        title: "2014-15 Consolidated Audited Financial Statements",
        pdfUrl: "/pdfs/aicte-2022-23.pdf",
        description: "Founding year financial documentation and audit initiation for 2014-15",
        highlights: ["Founding Finance", "Audit Initiation", "Quality Foundation"]
    },
];

const AnnualAccount = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Annual Accounts"
                description="Transparent financial reporting showcasing our commitment to accountability and fiscal responsibility."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Annual Accounts', isCurrent: true },
                ]}
            />

            <main className='container mx-auto px-4 lg:px-0 relative z-10 my-16'>
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-heading font-bold text-primary mb-4 leading-tight">
                        Audited Financial Statements
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Explore our comprehensive financial documentation ensuring transparency and accountability in our institutional operations.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <StepwiseReportTimeline data={accounts} />
                </div>
            </main>

            <Cta />
            <Footer />
        </div>
    )
}

export default AnnualAccount
