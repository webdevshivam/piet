import React from 'react'
import SimpleImageSlider from '@/components/SimpleImageSlider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Cta from '@/components/Cta'
import BreadCrumb from '@/components/BreadCrumb'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'
const images = [
    "https://www.piet.poornima.org/images/ramp1.jpg",
    "https://www.piet.poornima.org/images/ramp2.jpg",
    "https://www.piet.poornima.org/images/ramp3.jpg",
    "https://www.piet.poornima.org/images/facility1.jpg",
];

const altTexts = [
    "Description for image 1",
    "Description for image 2",
    "Description for image 3",
];
const Disables = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Disable Friendly Campus"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    {
                        label: 'Disable Friendly Campus', isCurrent: true
                    },
                ]}
            />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16 p-6 max-w-7xl mx-auto">

                {/* Left Column */}
                <div className="md:w-1/2">
                    <h1 className="text-4xl text-primary font-bold mb-4">
                        Details
                    </h1>
                    <p className="text-lg text-gray-700">
                        The campus of Poornima Institute of Engineering and Technology has been meticulously designed to ensure complete accessibility for individuals with disabilities. This includes a dedicated lab with assistive tools and technologies, accessible restrooms, ramps, and a range of wheelchairs. These facilities are aimed at facilitating smooth movement and fostering an inclusive learning environment for everyone.
                    </p>
                    <a href="#" className='btn btn-primary mt-4'>View More Details</a>
                </div>

                {/* Right Column */}
                <div className="md:w-1/2 w-full">
                    <SimpleImageSlider
                        images={images}
                        altTexts={altTexts}
                        autoPlayInterval={5000}
                        aspectRatio="4/3"
                    />
                </div>
            </div>

            <Cta />
            <Footer />
        </div>
    )
}

export default Disables
