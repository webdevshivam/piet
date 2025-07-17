import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'
import OverviewSection from '@/components/OverviewSection'
import { Head } from 'react-day-picker'
import BreadCrumb from '@/components/BreadCrumb'
import InfoCard from '@/components/InfoCard'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'
const SponseringBody = () => {
    const items = [
        {
            title: "Vision",
            iconClass: "fas fa-lightbulb text-indigo-600",
            content: (
                <p>
                    To be a beacon of educational excellence, fostering innovation, inclusivity, and integrity while shaping future leaders and professionals who will inspire positive change in the world.
                </p>
            ),
        },
        {
            title: "Mission",
            iconClass: "fas fa-flag text-emerald-600",
            content: (
                <p>
                    Shanti Education Society strives to empower youth through holistic education that blends academic rigor with ethical values and leadership qualities. Our mission is to create learning environments that nurture critical thinking, creativity, and a strong sense of social responsibility.
                </p>
            ),
        },
        {
            title: "Institutions Under SES",
            iconClass: "fas fa-school text-purple-600",
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>
                        <strong>Poornima College of Engineering (PCE):</strong> Established in 2000, PCE is known for its strong academic programs and industry-linked initiatives in engineering.
                    </li>
                    <li>
                        <strong>Poornima Institute of Engineering & Technology (PIET):</strong> Founded in 2007, PIET delivers quality technical education aligned with global standards.
                    </li>
                    <li>
                        <strong>Poornima University (PU):</strong> A UGC-recognized private university established in 2012, offering programs in engineering, management, design, architecture, hospitality, and science.
                    </li>
                </ul>
            ),
        },
        {
            title: "Scholarships and Financial Assistance",
            iconClass: "fas fa-hand-holding-usd text-green-600",
            content: (
                <div className="space-y-3">
                    <p>
                        SES is deeply committed to rewarding academic excellence and encouraging merit through a variety of <b>scholarship programs</b>, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Shanti Education Scholarship</li>
                        <li>President’s Scholarship</li>
                        <li>Sports Scholarship</li>
                        <li>Entrance Exam Score-Based Scholarships <b>(NATA, NCHMCT JEE, etc.)</b> </li>
                    </ul>
                    <p>
                        Through these initiatives, SES ensures that deserving students can pursue their dreams without financial barriers.
                    </p>
                </div>
            ),
        },
    ];
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Sponsering Body"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Sponsering Body', isCurrent: true },
                ]}
            />
            <OverviewSection
                title="Shanti Education Society"
                subtitle="An Insight into PIET"
                reverse={true}
                image={{
                    src: "https://internationalbudget.org/wp-content/uploads/https___www.imagesofempowerment.org_wp-content_uploads_packard_pb_india_11.14_fullrelease003a.jpg",
                    alt: "College Overview Image",
                    caption: "Accredited with Grade 'A' by NAAC",
                }}
            >
                <p>Founded in 1999, <b>Shanti Education Society (SES)</b> is a renowned non-profit organization based in Jaipur, Rajasthan, dedicated to promoting excellence in education. SES was established with the vision of transforming young minds into responsible citizens and skilled professionals who can contribute meaningfully to society.

                </p>
                <br />
                <p>
                    Under the leadership of visionary educationists, SES has emerged as a driving force in higher education, setting benchmarks for quality, innovation, and commitment. The Society is best known for founding some of Jaipur's most reputed educational institutions, such as <b>Poornima College of Engineering (PCE)</b> established in 2000, <b>Poornima Institute of Engineering & Technology (PIET)</b> established in 2007 and <b>Poornima University (PU)</b> established in 2012.
                </p>
                <div className='my-3'>
                    <a href="" className="btn btn-primary">
                        Read More <i className="fas fa-arrow-right ml-2"></i>
                    </a>

                </div>
            </OverviewSection>

            <div className="container mt-3 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch my-5">
                    {items.map((item, index) => (
                        <InfoCard
                            key={index}
                            title={item.title}
                            iconClass={item.iconClass}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
            <Cta />
            <Footer />
        </div>
    )
}

export default SponseringBody
