import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'
import OverviewSection from '@/components/OverviewSection'
import InfoCard from '@/components/InfoCard'
import DynamicTable from '@/components/DynamicTable '
import Checklist from '@/components/Checklist'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'
const nepHighlights = [
    "Curriculum strengthening",
    "Skill Development",
    "Technology Integration",
    "Faculty Members Training",
    "Research and Innovation",
    "Inclusive Education",
    "Multiple Entry and Exit Points",
    "Global Collaborations",
    "Infrastructure Development",
    "Community Engagement",
    "Offering Program in Indian Regional Language",
    "Offering Program in Indian Knowledge System",
]

const nepCommittee2024 = [
    { name: "Dr.Dinesh Goyal", designation: "Chairman" },
    { name: "Dr. Sonia Kaur Bansal", designation: "Faculty Coordinator" },
    { name: "Dr. Anil Kumar", designation: "Member" },
    { name: "Dr. Sama Jain", designation: "Member" },
    { name: "Dr. Payal Bansal", designation: "Member" },
    { name: "Dr. Budesh Kanwar", designation: "Member" },
    { name: "Ms. Himani Agarwal", designation: "Student Member" },
    { name: "Mr. Davit Kumar Fadia", designation: "Student Member" },
    { name: "Mr. Mayank Singh", designation: "Student Member" }
]

const committeeColumns = [
    { label: "Name", key: "name" },
    { label: "Designation", key: "designation" }
]

const implementationColumns = [
    { label: "S. No", key: "sno" },
    { label: "Objective", key: "objective" },
    { label: "Timeline", key: "timeline" },
    { label: "Office Responsible", key: "office" }
]

const implementationData = [
    { sno: 1, objective: "Offering B.Tech in Regional Language", timeline: "2021-22", office: "Principal office" },
    { sno: 2, objective: "Technology in Education", timeline: "2021-22", office: "HoD's" },
    { sno: 3, objective: "Skill Development (VAC)", timeline: "2021-22", office: "HoD's" },
    { sno: 4, objective: "Activities under IKS", timeline: "2022-23", office: "NEP Coordinator" },
    { sno: 5, objective: "Quality Benchmarking", timeline: "2022-23", office: "Principal office" },
    { sno: 6, objective: "Internship Based Education", timeline: "2022-23", office: "HoD's" },
    { sno: 7, objective: "Holistic Education (JHV, Ethics, Life Skills)", timeline: "2022-23", office: "NEP Coordinator" },
    { sno: 8, objective: "Faculty Grooming & Internationalization", timeline: "2022-23", office: "IQAC" },
    { sno: 9, objective: "Outstanding Research to cater toward IKS & Society", timeline: "2022-23", office: "NEP Coordinator" },
    { sno: 10, objective: "Academic Bank of Credit", timeline: "2023-24", office: "Registrar office" },
    { sno: 11, objective: "Autonomous Institution Status", timeline: "2025", office: "Principal office" },
    { sno: 12, objective: "Academic Flexibility", timeline: "As per Affiliating University", office: "RTU Guideline" }
]

const NEPPage = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="PIET - NEP & IKS Initiatives"
                description="Driving holistic, flexible and inclusive education under NEP 2020."
                breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'NEP', isCurrent: true }]}
            />


            <OverviewSection
                title="National Education Policy (NEP) 2020"
                subtitle="Transforming Education at PIET"
                reverse={false}
                image={{
                    src: "https://www.piet.poornima.org/images/nep/NEP.png",
                    alt: "NEP at PIET",
                    caption: "Inclusive, Flexible & Forward-Thinking Education"
                }}
            >
                <p>PIET implements NEP 2020 through innovative curricula, regional language programs, and a focus on the Indian Knowledge System (IKS). With flexibility in learning and career-oriented structures, the goal is to ensure a learner-centric ecosystem blending traditional and modern values.</p>
            </OverviewSection>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-20">
                <InfoCard title="Why NEP 2020?" iconClass="fas fa-graduation-cap" content={<Checklist items={nepHighlights} />} />
                <InfoCard
                    title="What is IKS?"
                    iconClass="fas fa-lightbulb"
                    content="The Indian Knowledge System (IKS) is a vast, diverse, and well-structured body of indigenous knowledge that has evolved over thousands of years. It encompasses a wide range of disciplines, including astronomy, Ayurveda, yoga, mathematics, linguistics, computing, philosophy, arts, architecture, and more. These systems are rooted in centuries of intellectual tradition and are deeply embedded in India’s civilizational ethos. As a holistic and interdisciplinary framework, IKS offers timeless insights that are relevant not only for cultural preservation but also for the advancement of global science and knowledge diplomacy."
                />
                <InfoCard
                    title="NEP SAARTHI Role"
                    iconClass="fas fa-users"
                    content="Promotes NEP awareness, organizes events, collects feedback, and acts as a bridge between students, faculty, and UGC for successful policy implementation."
                />
                <InfoCard
                    title="Benefits to Students"
                    iconClass="fas fa-user-graduate"
                    content="Flexible learning pathways, skill certification, multidisciplinary opportunities, regional language education, IKS exposure, and career readiness."
                />
            </div>

            <div className="container mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-4 text-center transition-transform hover:scale-105 duration-300">NEP Implementation Timeline</h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                <DynamicTable columns={implementationColumns} data={implementationData} />
            </div>

            <div className="container mx-auto my-10">
                <h2 className="text-3xl text-primary font-bold mb-4 text-center transition-transform hover:scale-105 duration-300">Core Committee (2024-25)</h2>
                <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
                <DynamicTable columns={committeeColumns} data={nepCommittee2024} />
            </div>

            <Cta />
            <Footer />
        </div>
    )
}

export default NEPPage
