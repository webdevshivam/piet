import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Link } from 'wouter'
import MissionVision from '@/components/MissionVision'
import DirectorMessage from '@/components/DirectorMessage'
import FacilitiesSection from '@/components/FacilitiesSection'
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,

} from '@/components/ui/breadcrumb'

import Cta from '@/components/Cta'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'
type StatProps = {
    number: string;
    label: string;
};

const Stat = ({ number, label }: StatProps) => (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md border border-neutral-200 hover:shadow-lg hover:border-primary transition-all duration-300 hover:-translate-y-1">
        <span className="text-primary font-bold text-4xl mb-2">{number}</span>
        <span className="text-neutral-700 text-center font-medium">{label}</span>
    </div>
);

const About = () => {
    const stats: StatProps[] = [
        { number: "20+", label: "Years of Excellence" },
        { number: "50+", label: "Faculty Members" },
        { number: "2000+", label: "Students" },
        { number: "95%", label: "Placement Rate" },
    ];
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            {/* Breadcrumb with background image */}
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
                                    <BreadcrumbPage className="text-white">About Us</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>

                        <h1 className="text-3xl md:text-4xl font-bold text-white mt-4">
                            About Us
                        </h1>
                        <p className="text-white/80 mt-2 max-w-xl">
                            Discover who we are and what makes Poornima Institute a center of excellence.
                        </p>
                    </div>
                </div>
            </div>
            {/* about us page */}

            <div className="container mx-auto px-4 lg:px-0 relative z-10 my-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="animate-slideInLeft">
                        <div className="mb-8">
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 leading-tight">
                                College OverView
                            </h2>
                            <div className="w-24 h-1 bg-secondary mb-6"></div>
                        </div>
                        <div className="flex flex-col items-stretch">
                            <p className="text-neutral-700 mb-6 leading-relaxed text-lg">
                                PIET is the <b>first institute in India</b> to offer B.Tech in Computer Engineering in Hindi, supporting NEP 2020 and promoting accessible, language-inclusive education.
                            </p>

                            <p className="text-neutral-700 mb-6 leading-relaxed text-lg">
                                The institute offers NEP-aligned programs in <b>AI, Data Science, IoT, and core engineering</b> fields with flexible learning paths like certificates, diplomas, and honors.
                            </p>

                            <p className="text-neutral-700 mb-6 leading-relaxed text-lg">
                                Academic quality is driven by the <b>Internal Quality Assurance Cell (IQAC)</b> through audits, reviews, and Outcome Based Education (OBE) practices.
                            </p>

                            <p className="text-neutral-700 mb-6 leading-relaxed text-lg">
                                Holistic development is fostered through <b>UHV-based student and faculty programs,</b> focusing on ethics, well-being, and responsibility.
                            </p>

                            <p className="text-neutral-700 mb-6 leading-relaxed text-lg">
                                Indian Knowledge Systems are integrated via courses on regional computing, yoga, disaster management, and cultural activities like Arohan.
                            </p>

                            <p className="text-neutral-700 mb-6 leading-relaxed text-lg">
                                PIET supports blended learning through platforms like <b>SWAYAM, NPTEL, and AICTE Virtual Labs,</b> ensuring students are future-ready.
                            </p>
                        </div>






                    </div>

                    <div className="relative animate-slideInRight">
                        <img
                            src="https://res.cloudinary.com/ddygzamv4/image/upload/v1747648404/gp8krjucihqxre0zs3jl.jpg"
                            alt="NAAC Accreditation"
                            className="rounded-xl shadow-xl w-full h-auto z-10 relative"
                        />
                        <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary rounded-lg -z-10 opacity-70"></div>
                        <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary rounded-lg -z-10 opacity-70"></div>

                        {/* Photo caption */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                            <p className="text-primary font-medium">
                                Accredited with Grade 'A' by NAAC
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto   relative z-10 my-12  bg-indigo-50 py-16 px-16 ">
                <div className="text-center ">
                    <h2 className="text-3xl  font-heading font-bold text-primary mb-6 leading-tight font-extrabold text-gray-900 mb-4 pb-2  inline-block">
                        Vision And Mission
                    </h2>

                    <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                </div>
                <MissionVision />
            </div>

            <div className="container mx-auto px-4 lg:px-0 relative z-10 my-10">
                <DirectorMessage />
            </div>
            <FacilitiesSection />
            <Cta />
            <Footer />



        </div>
    )
}

export default About