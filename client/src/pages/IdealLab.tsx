import React from 'react'
import SimpleImageSlider from '@/components/SimpleImageSlider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'
import BreadCrumb from '@/components/BreadCrumb'
import InfoCard from '@/components/InfoCard'
import Checklist from '@/components/Checklist'
import FacultySwiper from '@/components/FacultySwiper'
import LazyImage from '@/components/LazyImage'
import DynamicTable from '@/components/DynamicTable '
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'
const images = [
    "https://www.piet.poornima.org/img_idealab/ud1.PNG",
    "https://www.piet.poornima.org/img_idealab/ud2.PNG",
    "https://www.piet.poornima.org/img_idealab/ud3.PNG",
    "https://www.piet.poornima.org/img_idealab/ud4.PNG",
];

const objectivePoints = [
    'Promotes innovation and entrepreneurship.',
    'For students in technical institutions.',
    'Provides a supportive environment. ',
    'Offers resources and guidance.',
    'Helps turn ideas into startups.',
];
const altTexts = [
    "Description for image 1",
    "Description for image 2",
    "Description for image 3",
];
const objectiveContent = (
    <Checklist items={objectivePoints} />
);

const visionContent = (
    <p>
        The IDEA Lab will be set up in technical education institutions across the country. It will be equipped with state-of-the-art facilities and resources to support the development of student ideas and projects. The lab will also provide students with access to mentors, experts, and industry leaders who can provide guidance and support throughout the development process.
        <br />




    </p>


);


const facultyData = [
    {
        imageSrc: "https://www.piet.poornima.org/img_idealab/1_Dr._Dinesh_Goyal.jpg",
        name: "Prof (Dr.) Dinesh Goyal",
        gender: "Male",
        designation: "Chief Mentor, PIET-AICTE IDEA LAB, Principal & Director, PIET",
    },
    {
        imageSrc: "https://www.piet.poornima.org/img_idealab/2_Dr._Payal_Bansal.jpg",
        name: "Dr. Payal Bansal",
        gender: "Female",
        designation: "HoD, IDEA Lab Outreach & Research, Professor, Department of ECE",
    },
    {
        imageSrc: "https://www.piet.poornima.org/img_idealab/3_Reshma_Kala.jpg",
        name: "Ms. Reshma Kala",
        gender: "Female",
        designation: "Assistant Professor, Co-coordinator PIET AICTE IDEA LAB",
    },
    {
        imageSrc: "https://www.piet.poornima.org/img_idealab/4_Dr._Ritam_Dutta.jpg",
        name: "Dr. Ritam Dutta",
        gender: "Male",
        designation: "Professor, Department of IoT",
    },
    {
        imageSrc: "https://www.piet.poornima.org/img_idealab/5_Aniva_Sharma.JPG",
        name: "Ms. Aniva Sharma",
        gender: "Female",
        designation: "Assistant Professor, PIET AICTE IDEA LAB",
    },
    {
        imageSrc: "https://www.piet.poornima.org/img_idealab/6_Ashish_Ladda.jpg",
        name: "Mr. Ashish Laddha",
        gender: "Male",
        designation: "Technical Guru, PIET AICTE IDEA LAB",
    },
    {
        imageSrc: "https://www.piet.poornima.org/img_idealab/7_Lakshman_Singh.jpg",
        name: "Mr. Lakshman Singh Chauhan",
        gender: "Male",
        designation: "Technical Officer, PIET AICTE IDEA LAB",
    },
    {
        imageSrc: "https://www.piet.poornima.org/img_idealab/8_Sanjeev_Rishi.jpg",
        name: "Mr. Sanjeev Rishi",
        gender: "Male",
        designation: "Technical Assistant, PIET AICTE IDEA LAB",
    },
    {
        imageSrc: "https://www.piet.poornima.org/img_idealab/9_Divya_Rostogi.jpg",
        name: "Ms. Divya Rastogi",
        gender: "Female",
        designation: "Technical Assistant, PIET AICTE IDEA LAB",
    },
    {
        imageSrc: "https://www.piet.poornima.org/img_idealab/10_Sumit_Lunia.jpg",
        name: "Mr. Sumit Lunia",
        gender: "Male",
        designation: "Technical Assistant, PIET AICTE IDEA LAB",
    }
];
const columns = [
    { label: 'S.No', key: 'sno' },
    { label: 'Participants', key: 'participants' },
    { label: 'Venue', key: 'venue' },
    { label: 'Outcomes', key: 'outcome' },
];
const data = [
    {
        sno: 1,
        participants: "Team Name - Parksphere: Sudhanshu Tiwari, Kunal Sharma, Megh Shah, Dev Tekwani",
        venue: "Panipat Institute Of Engineering and Technology (National Innovation Challenge), Dec 2022, 1 day",
        outcome: "National Innovation Challenge"
    },
    {
        sno: 2,
        participants: "Team Name - Error: Kunal Sharma, Dev Tekwani",
        venue: "Abes Engineering College (Idea Lab Innovation Challenge), 2 days",
        outcome: "2nd winner"
    },
    {
        sno: 3,
        participants: "Team Name - Error: Kunal Sharma",
        venue: "LNMIIT (LNM HACKS), Jan 2023, 3 days",
        outcome: "3rd position"
    },
    {
        sno: 4,
        participants: "Team Name - Error: Kunal Sharma, Dev Tekwani",
        venue: "VGU (Hackathon), 3 days",
        outcome: "Top 10"
    },
    {
        sno: 5,
        participants: "Team Name - Error: Kunal Sharma, Dev Tekwani",
        venue: "VIT (Project Exhibition), 1 day",
        outcome: "2nd Position"
    },
    {
        sno: 6,
        participants: "Team Name - Web3 Wizards: Megh Shah, Mitushi Yadav, Arun Joseph",
        venue: "JIET Jodhpur (Hackathon), Mar 2023",
        outcome: "2nd prize"
    },
    {
        sno: 7,
        participants: "Team Name - Bug Squashers: Aditya Pareek, Kartik Mehta, Abhay Kumar Mittal",
        venue: "DU (Hackathon), Feb 2023, 2 days",
        outcome: "Top 15"
    },
    {
        sno: 8,
        participants: "Team Name - netWork: Rhythm Verma, Kartik Mehta, Sahaj Jain, Mayank Arora",
        venue: "SKIT (Start-up Expo), Apr 2023, 1 day",
        outcome: "Invited to work in their incubation cell"
    },
    {
        sno: 9,
        participants: "Team Name - Bug Squashers: Aditya Pareek, Kartik Mehta, Abhay Kumar Mittal",
        venue: "Thapar Institute of Engineering and Technology (Hackathon), Mar 2023, 2 days",
        outcome: "Built NFT games"
    },
    {
        sno: 10,
        participants: "Team Name - Bit-4-Byte: Hiya Gurbani, Lavina Sevani, Harshit Verma, Jatin Nama",
        venue: "Bharati Vidyapeeth's College, 15–16 June 2023, 2 days",
        outcome: "Top 7 in Software category"
    },
    {
        sno: 11,
        participants: "Team Name - The Errors: Kartikey Sharma, Gauri Singhal, Garvit Arora, Arpita Garg",
        venue: "Bharati Vidyapeeth's College, 15–16 June 2023, 2 days",
        outcome: "Top 5 in Hardware category"
    },
    {
        sno: 12,
        participants: "Team Name - Error 404: Harshvardhan Sharma, Mahendra Kumawat, Anurag Dadhich",
        venue: "Bharati Vidyapeeth's College, 15–16 June 2023, 2 days",
        outcome: "Learned about the latest technologies and gained practical knowledge"
    },
    {
        sno: 13,
        participants: "Aditya Pareek, Kartik Mehta, Abhay Kumar Mittal",
        venue: "Bharati Vidyapeeth's College, 15–16 June 2023, 2 days",
        outcome: "Learned about the latest technologies and gained practical knowledge"
    },
    {
        sno: 14,
        participants: "Burhanuddin Bohra, Kinana Bohra, Paawan Sharma, Diksha Kanwar",
        venue: "Bharati Vidyapeeth's College, 15–16 June 2023, 2 days",
        outcome: "Learned about the latest technologies and gained practical knowledge"
    },
    {
        sno: 15,
        participants: "Pranav Agrawal, Lakshay Singh Chouhan, Chaitanya Sharma, Kashish Aggarwal",
        venue: "Bharati Vidyapeeth's College, 15–16 June 2023, 2 days",
        outcome: "Learned about the latest technologies and gained practical knowledge"
    },
];


const facilitiesData = [
    {
        title: "CNC Router",
        description: "A CNC router is a computer-controlled cutting machine used to cut various materials like wood, metals, and plastics. It operates using CAD/CAM software to convert designs into G-code, guiding the machine's movements. CNC routers are versatile and can produce items such as furniture, signboards, and musical instruments with high precision and efficiency.",
        imageUrl: "https://via.placeholder.com/400x250?text=CNC+Router",
        linkUrl: "#"
    },
    {
        title: "3D Printer SLA",
        description: "Stereolithography (SLA) 3D printers use light to cure liquid resin into hardened plastic, making them ideal for creating detailed prototypes, medical models, and production parts. This technology helps businesses reduce outsourcing costs, accelerate development cycles, and optimize production processes.",
        imageUrl: "https://via.placeholder.com/400x250?text=3D+Printer+SLA",
        linkUrl: "#"
    },
    {
        title: "3D Printer FDM",
        description: "Fused Deposition Modeling (FDM) 3D printing involves extruding thermoplastic material layer by layer to create durable parts and prototypes. This method uses a heated nozzle to fuse material in precise patterns, forming strong objects. FDM is widely used for industrial applications, including prototyping and prosthetics.",
        imageUrl: "https://via.placeholder.com/400x250?text=3D+Printer+FDM",
        linkUrl: "#"
    },
    {
        title: "Vinyl Cutter",
        description: "A vinyl cutter is a computer-controlled machine that uses a sharp blade to cut shapes and letters from adhesive vinyl for signs, banners, and advertisements. It can also cut specialty papers and thin magnets.",
        imageUrl: "https://via.placeholder.com/400x250?text=Vinyl+Cutter",
        linkUrl: "#"
    },
    {
        title: "Laser Cutter",
        description: "Laser cutting uses a high-power laser to vaporize materials, resulting in precise cuts, commonly used in industrial manufacturing, small businesses, and hobbyist projects. It works by directing a focused laser beam through CNC-controlled optics.",
        imageUrl: "https://via.placeholder.com/400x250?text=Laser+Cutter",
        linkUrl: "#"
    },
    {
        title: "Reflow Oven",
        description: "A reflow oven is used for soldering surface mount components to PCBs. It heats PCBs using infrared, convection, or a combination of both methods to ensure precise temperature control.",
        imageUrl: "https://via.placeholder.com/400x250?text=Reflow+Oven",
        linkUrl: "#"
    },
    {
        title: "PCB Drilling",
        description: "PCB drilling creates holes and cavities in a circuit board for mounting components. The process involves mechanical drilling and chemical etching to achieve precise hole sizes.",
        imageUrl: "https://via.placeholder.com/400x250?text=PCB+Drilling",
        linkUrl: "#"
    },
    {
        title: "3D Scanner",
        description: "3D scanning captures the shape and appearance of real-world objects to create digital 3D models. Technologies like LIDAR, structured light, and computed tomography are used.",
        imageUrl: "https://via.placeholder.com/400x250?text=3D+Scanner",
        linkUrl: "#"
    },
    {
        title: "PCB Milling",
        description: "A PCB milling system creates prototype circuit boards by removing copper from a sheet. This non-chemical process is ideal for in-house fabrication, reducing PCB turnaround time.",
        imageUrl: "https://via.placeholder.com/400x250?text=PCB+Milling",
        linkUrl: "#"
    },
    {
        title: "Scroll Saw",
        description: "A scroll saw cuts intricate shapes in wood, metal, and other materials using a thin, vibrating blade. It's useful for making detailed items like jewelry and ornaments.",
        imageUrl: "https://via.placeholder.com/400x250?text=Scroll+Saw",
        linkUrl: "#"
    },
    {
        title: "Disc Sander",
        description: "A disc sander uses a rotating sanding disc to smooth and shape materials like wood, metal, and plastic. It's versatile for tasks like shaping, finishing, and polishing surfaces.",
        imageUrl: "https://via.placeholder.com/400x250?text=Disc+Sander",
        linkUrl: "#"
    },
    {
        title: "Multi-purpose Lathe/Drill/Mill Machine",
        description: "A multi-purpose lathe/drill/mill machine is versatile for turning, drilling, milling, and engraving various materials. It features a lathe bed, drill chuck, milling head, and engraving tool.",
        imageUrl: "https://via.placeholder.com/400x250?text=Lathe+Drill+Mill",
        linkUrl: "#"
    },
    {
        title: "Cone Pulley",
        description: "A cone pulley/belt-driven heavy-duty machine uses a cone pulley and belt to transmit power, making it ideal for heavy-duty tasks like turning metal and wood.",
        imageUrl: "https://via.placeholder.com/400x250?text=Cone+Pulley",
        linkUrl: "#"
    },
    {
        title: "Bench Grinder",
        description: "A bench grinder uses two abrasive wheels to grind, sharpen, polish, and clean metal and other materials. It's versatile for tasks like sharpening tools and shaping metal.",
        imageUrl: "https://via.placeholder.com/400x250?text=Bench+Grinder",
        linkUrl: "#"
    },
    {
        title: "Pratham 5.0",
        description: "Pratham 5.0 is an industrial 3D printer with a 500 x 500 x 500 mm build volume, capable of printing large and complex objects. It features fast print speeds, auto bed leveling, and filament detection.",
        imageUrl: "https://via.placeholder.com/400x250?text=Pratham+5.0",
        linkUrl: "#"
    },
    {
        title: "SMD Hot Air Gun",
        description: "An SMD hot air gun is designed for precise SMD soldering and desoldering, offering adjustable temperature settings and various nozzles for controlled heating.",
        imageUrl: "https://via.placeholder.com/400x250?text=Hot+Air+Gun",
        linkUrl: "#"
    },
    {
        title: "Analog Soldering Station",
        description: "Analog soldering stations use a mechanical thermostat for temperature control, with adjustments made via a knob. They are more affordable and user-friendly compared to digital models.",
        imageUrl: "https://via.placeholder.com/400x250?text=Analog+Soldering",
        linkUrl: "#"
    },
    {
        title: "Industrial Vacuum Cleaner",
        description: "Industrial vacuum cleaners are robust machines designed for heavy-duty cleaning in factories and warehouses. They feature powerful motors and HEPA filters for dust control.",
        imageUrl: "https://via.placeholder.com/400x250?text=Vacuum+Cleaner",
        linkUrl: "#"
    },
    {
        title: "Oscilloscope 2 Analogue",
        description: "Analog oscilloscopes display electrical signal waveforms using a cathode ray tube (CRT). They measure signal properties like amplitude and frequency.",
        imageUrl: "https://via.placeholder.com/400x250?text=Oscilloscope+2+Analogue",
        linkUrl: "#"
    },
    {
        title: "Oscilloscope Model EL 801",
        description: "The EL 801 is a general-purpose oscilloscope with 1 MHz bandwidth and various controls for signal analysis. Known for its reliability and versatility.",
        imageUrl: "https://via.placeholder.com/400x250?text=EL+801+Oscilloscope",
        linkUrl: "#"
    },
    {
        title: "Laser Cutter Machine",
        description: "A laser cutter is a precision machine tool that uses a high-powered laser beam to cut, engrave, and shape various materials. It accurately cuts complex designs and patterns with minimal waste.",
        imageUrl: "https://via.placeholder.com/400x250?text=Laser+Cutter+Machine",
        linkUrl: "#"
    },
    {
        title: "SMT Pick and Place",
        description: "An SMT pick-and-place machine places components on PCBs using precision nozzles and cameras. It's essential for high-speed electronics production.",
        imageUrl: "https://via.placeholder.com/400x250?text=SMT+Pick+and+Place",
        linkUrl: "#"
    },
    {
        title: "Robotic Arm",
        description: "A robotic arm mimics human arm movements and is used for gripping, lifting, and manipulating objects in industries like manufacturing and healthcare.",
        imageUrl: "https://via.placeholder.com/400x250?text=Robotic+Arm",
        linkUrl: "#"
    },

]


const IdealLab = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="AICTE IDEA LAB"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    {
                        label: 'AICTE IDEA LAB', isCurrent: true
                    },
                ]}
            />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 p-6 max-w-7xl mx-auto">

                {/* Left Column */}
                <div className="md:w-1/2">
                    <h1 className="text-4xl text-primary font-bold mb-4">
                        About  IDEA Lab
                    </h1>
                    <p className="text-lg text-gray-700">
                        The All India Council for Technical Education (AICTE) has launched the IDEA (Innovation, Development, Entrepreneurship and Advancement) Lab to promote innovation and entrepreneurship among students in technical education institutions. The IDEA Lab is designed to provide a platform for students to conceptualize and develop their ideas into sustainable projects and startups.

                    </p>
                </div>

                {/* Right Column */}
                <div className="md:w-1/2 w-full border border-primary">
                    <SimpleImageSlider
                        images={images}
                        altTexts={altTexts}
                        autoPlayInterval={5000}
                        aspectRatio="16/9"
                    />
                </div>
            </div>

            <div className=" container mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                <InfoCard
                    title="Objective of Department"
                    iconClass="fas fa-tasks"
                    content={objectiveContent}
                />
                <InfoCard
                    title="Execution"
                    iconClass="fas fa-eye"
                    content={visionContent}
                />



            </div>
            <section className="container py-12 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-6 text-center">Faculties and Staff</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <FacultySwiper profiles={facultyData} />
            </section>
            <section className="container py-12 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">AICTE IDEA Lab Committee</h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <LazyImage
                    src={'https://www.piet.poornima.org/img_idealab/Idealab_Committee.jpeg'}
                    alt={'AICTE IDEA Lab Committee'}
                    className="rounded-xl shadow-xl w-full h-auto z-10 relative border border-primary"
                />
            </section>

            <div className="container mt-10 mx-auto">
                <h2 className="text-3xl text-primary font-bold mb-8 text-center">Achievements
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6 mx-auto"></div>
                <DynamicTable columns={columns} data={data} />

            </div>

            <section className="py-16 bg-neutral-100">
                <div className="container mx-auto px-4 lg:px-0">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4"> Facilities</h2>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    </div>
                </div>
            </section>

            <Cta />
            <Footer />
        </div>
    )
}

export default IdealLab
