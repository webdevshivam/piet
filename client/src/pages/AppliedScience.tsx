import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import ProfileMessageSection from '@/components/ProfileMessageSection'
import OverviewSection from '@/components/OverviewSection'
import Checklist from '@/components/Checklist'
import { Check } from 'lucide-react'
import InfoCard from '@/components/InfoCard'
import Message from '@/components/Message'
import ProfileCard from '@/components/ProfileCard'
import { useState } from 'react'
import FacultySwiper from '@/components/FacultySwiper'
import LabInfoCard from '@/components/LabInfoCard'

import CourseOutcomeAccordion, { SubjectCO } from '@/components/CourseOutcomeAccordion'
import Cta from '@/components/Cta'
import DynamicTable from '@/components/DynamicTable '
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'


export const courseData: SubjectCO[] = [
    {
        subject: "Communication Skills & 1FY1-04",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Comprehend the fundamental Principles, Types, and Methods of good communication." },
            { coNumber: "CO2", coDefinition: "Apply the basic structural and grammatical knowledge of the constituents for technical writing." },
            { coNumber: "CO3", coDefinition: "Develop the competence in writing skills related to various forms of technical and business communication." },
            { coNumber: "CO4", coDefinition: "Understand the genre of prose by reading loudly with correct pronunciation, stress intonation, and articulation of voice along with identifying and describing the connection between Literature and reality." },
            { coNumber: "CO5", coDefinition: "Develop the creativity and imagination through value-based genre of poetry by enhancing aesthetic and verbal ability." },
        ]
    },
    {
        subject: "Human Values & 1FY1-05/2FY1-05",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Comprehend co-relationship between “Values”; and “skills” to ensure persistent happiness and prosperity." },
            { coNumber: "CO2", coDefinition: "Evaluate the coexistence of the Human Being - Harmony in Myself." },
            { coNumber: "CO3", coDefinition: "Identify the role of harmony in family, society and universal order." },
            { coNumber: "CO4", coDefinition: "Develop and evaluate the holistic perception of harmony at all levels of existence." },
            { coNumber: "CO5", coDefinition: "Create harmony in professional and personal lives by understanding Co-existence between human being with nature." },
        ]
    },
    {
        subject: "ENGINEERING MATHEMATICS I & 1FY2-01",
        semester: "I semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Learn the concept of calculus to appraise improper integral, surface area and volume of solid of revolution of various laminas." },
            { coNumber: "CO2", coDefinition: "Differentiate the different techniques for convergence of sequence and series." },
            { coNumber: "CO3", coDefinition: "Differentiate the different techniques for convergence of sequence and series." },
            { coNumber: "CO4", coDefinition: "Application of Partial differentiation, problem-solving using concepts and techniques from PDE's." },
            { coNumber: "CO5", coDefinition: "Apply the concept of calculus to support improper integral, surface area and volume of solid of revolution of various laminas." },
        ]
    },
    {
        subject: "ENGINEERING MATHEMATICS-II & 2FY2-01",
        semester: "II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Comprehend the computational techniques and algebraic skills essential for the study of systems of linear equations, matrix algebra, Eigen values, Eigen vectors, orthogonality and diagonalization." },
            { coNumber: "CO2", coDefinition: "Recognize ODEs and interpret the various methods for solving differential equation of first order and first degree." },
            { coNumber: "CO3", coDefinition: "Differentiate the various applications of function of one variable in ODE of higher order." },
            { coNumber: "CO4", coDefinition: "Evaluate the multivariable function using the concept of PDEs of first order." },
            { coNumber: "CO5", coDefinition: "Apply the various uses of multivariable function and solve by the partial differential equation of higher order." },
        ]
    },
    {
        subject: "Engineering Physics & 1FY2-02 /2FY2-02",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Comprehend the concepts of wave optics and phenomenon of interference and diffraction of light." },
            { coNumber: "CO2", coDefinition: "Recognize ODEs and interpret the various methods for solving differential equation of first order and first degree." },
            { coNumber: "CO3", coDefinition: "Apply the conceptual knowledge of coherence of light wave in different application of light wave and use in optical fiber communication." },
            { coNumber: "CO4", coDefinition: "Synthesize the scientific and engineering principles of materials science to identify the properties of material related to appropriate field of application." },
            { coNumber: "CO5", coDefinition: "Apply the laws of electromagnetic theory in propagation of wave and use in communication." },
        ]
    },
    {
        subject: "Engineering Chemistry & 1FY2-03 / 2FY2-03",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Describe the fundamental water quality for domestic and industrial purpose so that students will be able to describe impurities present in water, boiler troubles and removal of impurities." },
            { coNumber: "CO2", coDefinition: "Analyse the composition, characteristics and manufacturing methods of various types of solid, liquid and gaseous fuels and calculated calorific value of fuels for Industrial as well as domestic purposes." },
            { coNumber: "CO3", coDefinition: "Classify the dry and wet corrosion mechanisms and their protection methods. To investigate deterioration of metal through corrosion." },
            { coNumber: "CO4", coDefinition: "Understand the composition and manufacturing methods of engineering materials namely cement and glass and recognize and estimate various properties of lubricants in several engineering process." },
            { coNumber: "CO5", coDefinition: "Generating the generic drugs or medicines for various services in life long purpose by identifying the applications of organic reaction mechanism." },
        ]
    },
    {
        subject: "Programming for Problem Solving & 1FY3-06/2FY3-06",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the fundamental concepts of computers, algorithms, flowcharts and problem solving techniques." },
            { coNumber: "CO2", coDefinition: "Translate the algorithms and flowcharts into C programs." },
            { coNumber: "CO3", coDefinition: "Analyse the debug process in C programming language and to express in written form." },
            { coNumber: "CO4", coDefinition: "Formulate a problem into functions and create modular code that can be reused." },
            { coNumber: "CO5", coDefinition: "Develop C programs to demonstrate the applications of derived data types such as arrays, pointers, strings and functions." },
        ]
    },
    {
        subject: "Basic Mechanical Engineering & 1FY3-07/2FY3-07",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the concepts of thermodynamics, power plants, machine design, Manufacturing Engineering and Industrial Engineering." },
            { coNumber: "CO2", coDefinition: "Receive the basic knowledge of pump and IC engine." },
            { coNumber: "CO3", coDefinition: "Comprehend the concept, types and application of refrigerator and air conditioning system and Transmission of Power." },
            { coNumber: "CO4", coDefinition: "Explain the different Patterns, Molding, Casting, Forging and Extrusion of Primary Manufacturing Processes." },
            { coNumber: "CO5", coDefinition: "Describe the various process and uses of Welding, Brazing, Engineering materials and Heat treatment of steel." },
        ]
    },
    {
        subject: "Basic Electrical Engineering & 1FY3-08/2FY3-08",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Evaluate the concept and process of various AC and DC circuit related elements, sources, laws, methods and theorems." },
            { coNumber: "CO2", coDefinition: "Explore the knowledge of transformers and its uses in applying the acquired knowledge to solve electrical circuit problem." },
            { coNumber: "CO3", coDefinition: "Analyse the characteristics, significance, construction and working of various power electronic devices." },
            { coNumber: "CO4", coDefinition: "Understand electromechanical energy conversion process." },
            { coNumber: "CO5", coDefinition: "Explore knowledge of protective devices and energy consumption calculations." },
        ]
    },
    {
        subject: "Basic Civil Engineering & 1FY3-09/2FY3-09",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understanding the scope, specialization, and role of civil engineer with impact of infrastructural development on economy of country." },
            { coNumber: "CO2", coDefinition: "Explain the Object, Principles & Types of Surveying, Analyses the Linear Measurements of surveying and evaluates the angular measurement through compass and leveling process through the various leveling instrument." },
            { coNumber: "CO3", coDefinition: "Analyse the importance of site selection, type of building Layout and Plan with introduction and components of Buildings & their functions." },
            { coNumber: "CO4", coDefinition: "Understanding the traffic and road safety and evaluate the Modes of Transportation, Causes of Accidents and Create the Road Safety Measures." },
            { coNumber: "CO5", coDefinition: "Classify the different types of pollutions, understand the Rainwater Harvesting, Global warming, Climate Change and solid Waste Management, Analyse the Primary and Secondary air pollutants." },
        ]
    },
    {
        subject: "Engineering Chemistry Lab & 1/2FY2-21",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Evaluate the strength of CuSO4.5H2O solution with the help of Hypo solution, Ferrous Ammonium Sulphate solution with the help of K2Cr2O7 solution and NaOH and Na2CO3 in an alkali." },
            { coNumber: "CO2", coDefinition: "Analyse different properties of lubricating oil." },
            { coNumber: "CO3", coDefinition: "Analyse quality of coal by proximate analysis." },
            { coNumber: "CO4", coDefinition: "Evaluate various quality parameters of water like harness, DO, Chlorine in water." },
            { coNumber: "CO5", coDefinition: "Understand about synthesis of generic drugs." },
        ]
    },
    {
        subject: "Engineering Physics Lab & 1/2FY2-20",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand the fundamental concepts of wave optics through the interference and diffraction experiment." },
            { coNumber: "CO2", coDefinition: "Analyse the concept of light in dispersive power of material and height of a celestial object." },
            { coNumber: "CO3", coDefinition: "Describe and demonstrate the behavior of semiconductor characteristics." },
            { coNumber: "CO4", coDefinition: "Applying the knowledge to show the charging and discharging behavior of capacitor with time in form of electrical energy." },
            { coNumber: "CO5", coDefinition: "Interpret the properties of Laser light and application in optical communication through optical fiber." },
        ]
    },
    {
        subject: "Human Values Activities and Sports & 1/2FY1-23",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Course Introduction - Need, Basic Guidelines, Content and Process for Value Education." },
            { coNumber: "CO2", coDefinition: "Understanding Harmony in the Human Being - Harmony in Myself." },
            { coNumber: "CO3", coDefinition: "Understanding Harmony in the Family and Society - Harmony in Human-Human Relationship." },
            { coNumber: "CO4", coDefinition: "Understanding Harmony in the Nature and Existence - Whole existence as Coexistence." },
            { coNumber: "CO5", coDefinition: "Implications of the above Holistic Understanding of Harmony on Professional Ethics. Natural acceptance of human values." },
        ]
    },
    {
        subject: "Language Lab & 1/2FY1-22",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "To understand Phonetic Symbols and Transcriptions." },
            { coNumber: "CO2", coDefinition: "To enable students to participate in Extempore." },
            { coNumber: "CO3", coDefinition: "To enable students to participate in Group Discussion." },
            { coNumber: "CO4", coDefinition: "To improve writing skills of students by Dialogue Writing." },
            { coNumber: "CO5", coDefinition: "To improve writing skills of students by Dialogue Writing." },
        ]
    },
    {
        subject: "Manufacturing Practices Workshop & 1/2FY3-25",
        semester: "I / II semester",
        outcomes: [
            { coNumber: "CO1", coDefinition: "Understand various tools, materials, instruments required for workshop operations." },
            { coNumber: "CO2", coDefinition: "Apply techniques to perform workshop operations with hand tools and power tools such as center lathe machine, drilling machine using given job drawing." },
            { coNumber: "CO3", coDefinition: "Understand application of the hand tools used in fitting, carpentry, foundry, welding shop, machine tools and sheet metal shop." },
            { coNumber: "CO4", coDefinition: "Write a report related to hand tools and machine tools description referring to library books and laboratory manuals." },
            { coNumber: "CO5", coDefinition: "Apply safety consciousness along with team work." },
        ]
    }
];


const labData = [
    {
        image: "https://stock.adobe.com/274385444", // computer lab
        title: "Computer Programming Lab",
        facultyInCharge: "Ms. Reshma Kala",
        labAssistant: "Mr. Hansraj Mourya",
        roomNumber: "AB‑02",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://pixabay.com/photos/181083", // language/computer cubicle lab
        title: "Language Lab",
        facultyInCharge: "Dr. Prince Dawar",
        labAssistant: "Mr. Hansraj Mourya",
        roomNumber: "AB‑02",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://stock.adobe.com/274385444", // reuse for Manufacturing Workshop temporarily
        title: "Manufacturing Practices Workshop",
        facultyInCharge: "Mr. Ram Mohan",
        labAssistant: "Mr. Vimal Jain",
        roomNumber: "AB‑04",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://stock.adobe.com/274385444",
        title: "Engineering Physics Lab",
        facultyInCharge: "Dr. Prince Dawar",
        labAssistant: "Mr. Hansraj Mourya",
        roomNumber: "AB‑02",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://stock.adobe.com/274385444",
        title: "Engineering Physics Lab",
        facultyInCharge: "Dr. Mukesh Chandra",
        labAssistant: "Ms. Neha Nigam",
        roomNumber: "AB‑02",
        syllabusLink: "https://example.com/syllabus.pdf",
    },
    {
        image: "https://pixabay.com/photos/181083",
        title: "Basic Electrical Engineering",
        facultyInCharge: "Dr. Amit Shrivastava",
        labAssistant: "Mr. Hansraj Mourya",
        roomNumber: "AG‑02",
        syllabusLink: "https://example.com/syllabus.pdf",
    },


];
const points = [
    'Teachers play a foundational role in shaping students’ lives by inspiring, motivating, and making learning interesting and creative.',
    'PIET is a reputed institution in Jaipur, ranked No. 3 in RTU QIV rankings.',
    'Offers an ideal learning environment with cultural exposure and value-based education.',
    "Teachers not only teach but also inspire students to embrace creativity and strive for excellence.",
];

const missionPoints = [
    'Foster an environment that develops skills for creating and implementing new ideas',
    'Enhance questioning, observation, testing, analysis, and communication abilities.',
    'Deliver quality education integrating emerging technologies and research.',
    'Promote high standards of ethics, transparency, and accountability.',

];

const objectivePoints = [
    'Better Results & Attendance',
    'More Student driven activity',
    'Outcome oriented academic & non- academic activities',
    'Better Communication Skills',
]

const visionContent = (
    <p>
        To create knowledge based society with scientific temper through cutting-edge
        technologies, innovative research and to become valuable resource for enriching mankind.
    </p>
);



const projects = [
    { name: "Web Tool Kit" },
    {
        name: "FLY BUY"
    },
    { name: "Music Player Website" },
    { name: "MovieBazzar" },
    {
        name: "Dreams Travel"
    },
    { name: "E-commerce website" },
    { name: "Samachar.com" },
    { name: "LIBRARY MANAGEMENT" },
    { name: "5 MIN TAXI" },
    { name: "Flexstart" },
    { name: "Task management system" },
    { name: "WeatherHub" },
    { name: "React Weather" },
    { name: "To-Do List, Calculator" },
    { name: "MusicBee" },
    { name: "Flexstart" },
    { name: "SPOTIFY CLONE" },
    { name: "AnCrypt" },
    { name: "Havenly" },
    { name: "Restaurant website" },
    { name: "Interior product website" },

    // Add more...
];



const facultyData = [
    {
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
        name: "Dr. NITIN MUKESH MATHUR",
        gender: "Male",
        designation: "ASSOCIATE PROFESSOR",
    },
    {
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
        name: "Dr. BALWAN",
        gender: "Male",
        designation: "Assistant Professor",
    },
    {
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
        name: "Mr. NARENDRA KUMAR YADAV	",
        gender: "Male",
        designation: "Lecturer",
    },
    {
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
        name: "Dr. AISHA RAFI",
        gender: "Male",
        designation: "Lecturer",
    },

    {
        imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_FZR1-SNQItQMwECGXMp7MYCspr3Fm0R61Q&s",
        name: "Mr. Amit Sharma",
        gender: "Male",
        designation: "Lecturer",
    },





];






const missionContent = (
    <Checklist items={missionPoints} />
);

const objectiveContent = (
    <Checklist items={objectivePoints} />
);


const AppliedScience = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Department Of Applied Science"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Department of Applied Science', isCurrent: true },
                ]}
            />

            {/* overview sections start */}

            <OverviewSection
                title="Introduction"
                subtitle="An Insight into PIET"
                reverse={false}
                image={{
                    src: "https://www.piet.poornima.org/images/1styrdept.jpeg",
                    alt: "Deptartment of Applied Sciences",
                    caption: "Accredited with Grade 'A' by NAAC",
                }}
            >
                <p>
                    Established in 2007, it is the core department for first-year engineering students. It focuses on imparting fundamental scientific and technical knowledge in subjects like Physics, Chemistry, Mathematics, Communication Techniques, and Basic Engineering disciplines. Practical learning and skill development are emphasized to prepare students for advanced engineering education.

                </p>


                <Checklist items={points} />


                <br />

            </OverviewSection>



            {/* vision and mission section */}

            <div className=" container mx-auto my-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">

                <InfoCard
                    title="Vision"
                    iconClass="fas fa-eye"
                    content={visionContent}
                />

                <InfoCard
                    title="Mission"
                    iconClass="fas fa-bullseye"
                    content={missionContent}
                />
                <InfoCard
                    title="Objective of Department"
                    iconClass="fas fa-tasks"
                    content={objectiveContent}
                />
            </div>


            {/* hod message */}


            <div className="w-full bg-neutral-50 p-14 border">

                <Message
                    heading="Message from the HOD"
                    name="Dr. Sama Jain"
                    title="HOD, Department of Applied Sciences, PIET"
                    imageSrc="https://www.piet.poornima.org/images/hod1styr.jpg"
                    imageAlt="Photo of Ms. Aarti Sharma"
                    shortBio="With extensive experience in education and leadership..."
                    messageExcerpt={
                        <>
                            <i>  <b>“Scientific learning is best achieved by doing science”
                            </b></i>
                            <br />
                            <br />
                            <p>
                                This teaching philosophy enables student community to learn and simultaneously make scientific contribution to society. We are committed to deliver an excellent graduate program of study as well as provide an opportunity for cutting-edge research in all natural and applied sciences.

                            </p>
                            <br />
                            <p>
                                I feel elated to introduce you to the Department of Applied Sciences which is the foundation of Engineers that strives for increasing the knowledge, enhancing the critical thinking, ability to change information into knowledge and power of analyzing things technically.

                            </p>
                            <br />
                            <p>
                                Department of Applied Sciences plays a vital role in an engineering college catering to the teaching of basic Sciences and Humanities courses for engineering students of all branches. The purpose of applied sciences in Engineering study is to lay a strong foundation of basic principles of various disciplines such as Mathematics, Physics, Chemistry, Computers, Electronics, Mechanics and Communication Skills in the mind of the learners, so that they proceed to rest of their years of study with up to date knowledge and training of basic engineering skills.

                            </p>
                        </>
                    }

                    messageLink=""
                    buttonLabel="Read More"
                    showButton={false}
                    reverse={false}
                />

            </div>


            {/* faculty cards */}

            <section className="container py-12 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">Meet Our Faculty</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <FacultySwiper profiles={facultyData} />
            </section>



            {/* labs cards */}

            <section className="py-16 bg-neutral-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-primary mb-10">Our Laboratories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {labData.map((lab, index) => (
                            <LabInfoCard key={index} {...lab} />
                        ))}
                    </div>
                </div>
            </section>

            {/* student projects section */}
            <section className="py-16 bg-neutral-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-primary mb-4">Student Projects</h2>
                    <p className="text-center text-neutral-600 max-w-2xl mx-auto mb-10">
                        Explore innovative ideas and solutions created by our students across various disciplines.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-white border border-neutral-200 rounded-lg p-5 shadow hover:shadow-md transition-all group cursor-pointer"
                            >
                                <h3 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                                    <i className="fa-solid fa-hand-point-right text-secondary"></i>  {project.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CourseOutcomeAccordion data={courseData} />

            <Cta />
            <Footer />
        </div>
    )
}

export default AppliedScience
