import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import Cta from '@/components/Cta'
import Message from '@/components/Message'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'


const CoE = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Controller of Examination Message"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    {
                        label: 'Controller of Examination Message', isCurrent: true
                    },
                ]}

            />
            <Message
                title="Message from the Controller of Examination"
                content="Dr. Nitin Mukesh Mathur is driven by the vision of contributing to organizational and personal growth through the application of his knowledge and skills. His career goal is to excel in a dynamic environment that values innovation and academic excellence.

As the Controller of Examination at Poornima Institute of Engineering & Technology, Dr. Mathur is responsible for overseeing all examination-related activities, ensuring the integrity and efficiency of the evaluation process. His commitment to excellence and continuous improvement makes him a valuable asset to the institution and the academic community.

Dr. Mathur's leadership and expertise in examination management contribute significantly to maintaining high academic standards and ensuring fair and transparent evaluation processes for all students at PIET."
                imageUrl="https://www.piet.poornima.org/images/faculty1styr/NitinMukesh.png"
                imageAlt="Photo of Dr. Nitin Mukesh Mathur"
            />
            <Cta />
            <Footer />
        </div>
    )
}

export default CoE
```