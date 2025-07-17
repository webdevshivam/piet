import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,

} from '@/components/ui/breadcrumb'



import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";


const Recogniation = () => {


    const reports = [
        {
            year: "2025-26",
            title: "AICTE 2025-26 Report",
            pdfUrl: "/pdfs/aicte-2025-26.pdf",
        },
        {
            year: "2024-25",
            title: "AICTE 2024-25 Report",
            pdfUrl: "/pdfs/aicte-2024-25.pdf",
        },
        {
            year: "2023-24",
            title: "AICTE 2023-24 Report",
            pdfUrl: "/pdfs/aicte-2023-24.pdf",
        },
        {
            year: "2022-23",
            title: "AICTE 2022-23 Report",
            pdfUrl: "/pdfs/aicte-2022-23.pdf",
        },
        {
            year: "2021-22",
            title: "AICTE 2021-22 Report",
            pdfUrl: "/pdfs/aicte-2022-23.pdf",
        },

        {
            year: "2020-21",
            title: "AICTE 2020-21 Report",
            pdfUrl: "/pdfs/aicte-2022-23.pdf",
        },
        {
            year: "2019-20",
            title: "AICTE 2019-20 Report",
            pdfUrl: "/pdfs/aicte-2022-23.pdf",
        },
        {
            year: "2018-19",
            title: "AICTE 2018-19 Report",
            pdfUrl: "/pdfs/aicte-2022-23.pdf",
        },



    ];

    const rtu_affliation = [
        {
            year: "2024-25",
            title: "RTU Affiliation - 2024-25",
            pdfUrl: "/pdfs/aicte-2025-26.pdf",
        },
        {
            year: "2023-24",
            title: "RTU Affiliation - 2023-24",
            pdfUrl: "/pdfs/aicte-2024-25.pdf",
        },
        {
            year: "2022-23",
            title: "RTU Affiliation - 2022-23",
            pdfUrl: "/pdfs/aicte-2023-24.pdf",
        },
        {
            year: "2021-22",
            title: "RTU Affiliation - 2021-22",
            pdfUrl: "/pdfs/aicte-2022-23.pdf",
        },
        {
            year: "2020-21",
            title: "RTU Affiliation - 2020-21",
            pdfUrl: "/pdfs/aicte-2022-23.pdf",
        },

        {
            year: "2019-20",
            title: "RTU Affiliation - 2019-20",
            pdfUrl: "/pdfs/aicte-2022-23.pdf",
        },
        {
            year: "2018-19",
            title: "RTU Affiliation - 2018-19",
            pdfUrl: "/pdfs/aicte-2022-23.pdf",
        },
        {
            year: "2017-18",
            title: "RTU Affiliation - 2017-18",
            pdfUrl: "/pdfs/aicte-2022-23.pdf",
        },

    ];
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <div className="relative mb-12">
                <img
                    src="https://res.cloudinary.com/ddygzamv4/image/upload/v1747648404/gp8krjucihqxre0zs3jl.jpg"
                    alt="About Banner"
                    className="w-full h-[250px] object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/60  flex items-center px-8 md:px-16">
                    <div>
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="/" className="text-white">
                                        Home
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator>

                                </BreadcrumbSeparator>
                                <BreadcrumbItem>
                                    <BreadcrumbPage className="text-white">Recognisation and Apporvals</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">
                            Recognitions and Approvals
                        </h1>
                        <p className="text-white/80 mt-2 max-w-xl">
                            Explore the official recognitions, accreditations, and approvals that establish Poornima Institute as a trusted and accredited center for higher education excellence.
                        </p>

                    </div>
                </div>
            </div>
            {/* main page content started */}
            <main className='container mx-auto px-4 lg:px-0 relative z-10 my-10'>
                <div className="text-center animate-slideInDown">
                    <h2 className="text-3xl font-heading font-bold text-primary mb-6 leading-tight font-extrabold text-gray-900 pb-2 inline-block">
                        Recognition under section of UGC 2-F
                    </h2>
                    <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                </div>

                {/* Recognition Card */}
                <Card className="container mx-auto mt-10 shadow-md animate-slideInLeft">
                    <CardHeader>
                        <CardTitle>Recognition under UGC 2-F</CardTitle>
                        <CardDescription>
                            Certification of recognition under section 2-F of UGC Act.
                        </CardDescription>
                    </CardHeader>
                    <CardFooter>
                        <a
                            href="/path-to-your-pdf.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            <i className="fas fa-file-pdf mx-2"></i> View PDF
                        </a>
                    </CardFooter>
                </Card>

                <div className="flex flex-col lg:flex-row gap-12 mt-16">
                    {/* AICTE Approvals */}
                    <div className="flex-1 animate-slideInLeft">
                        <div className="text-center my-10">
                            <h2 className="text-3xl font-heading font-bold text-primary mb-6 leading-tight font-extrabold text-gray-900 pb-2 inline-block">
                                AICTE Approvals
                            </h2>
                            <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                        </div>
                        <div className="w-full max-w-3xl mx-auto">
                            {reports.map((report, index) => (
                                <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
                                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                        <time className="sm:absolute left-0 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-secondary bg-red-100 rounded-full">
                                            {report.year}
                                        </time>
                                        <div className="text-xl font-bold text-slate-900">{report.title}</div>
                                    </div>
                                    <a
                                        href={report.pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary btn-xs px-2 py-1 text-sm mt-2"
                                    >
                                        <i className="fas fa-file-pdf mr-1 text-xs"></i> View PDF
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RTU Affiliation */}
                    <div className="flex-1 animate-slideInRight">
                        <div className="text-center my-10">
                            <h2 className="text-3xl font-heading font-bold text-primary mb-6 leading-tight font-extrabold text-gray-900 pb-2 inline-block">
                                RTU Affiliation
                            </h2>
                            <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                        </div>
                        <div className="w-full max-w-3xl mx-auto">
                            {rtu_affliation.map((report, index) => (
                                <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
                                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-primary after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                        <time className="sm:absolute left-0 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-secondary bg-red-100 rounded-full">
                                            {report.year}
                                        </time>
                                        <div className="text-xl font-bold text-slate-900">{report.title}</div>
                                    </div>
                                    <a
                                        href={report.pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary btn-xs px-2 py-1 text-sm mt-2"
                                    >
                                        <i className="fas fa-file-pdf mr-1 text-xs"></i> View PDF
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <Cta />
            <Footer />
        </div>
    )
}

export default Recogniation
