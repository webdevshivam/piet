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
                heading="Message from the Controller of Examination"
                name="Dr. Nitin Mukesh Mathur"
                title="Controller of Examination PIET"
                imageSrc="https://www.piet.poornima.org/images/faculty1styr/NitinMukesh.png"
                imageAlt="Photo of Ms. Aarti Sharma"
                shortBio="Controller of Examination Poornima Institute of Engineering & Technology, nitinmukesh@poornima.org"
                messageExcerpt={
                    <>
                        <p>
                            Dr. Nitin Mukesh Mathur is driven by the vision of contributing to organizational and personal growth through the application of his knowledge and skills. His career goal is to excel in a dynamic environment that values innovation and academic excellence.

                        </p>
                        <br />
                        <p>
                            Dr. Mathur holds a Ph.D. degree awarded by Poornima University in 2024. He completed his M.Tech in 2018 and B.Tech in 2010 from Rajasthan Technical University, Kota. With 14 years of substantial experience in academics and administration, Dr. Mathur is presently working as an Associate Professor and Deputy Head of Department (Admin) at Poornima Institute of Engineering & Technology, Jaipur. He has significantly contributed to institutional processes related to NAAC, NBA, AQAR, SSR, and QS-I Gauge. In addition to his academic role, he has also served as a Technical Guru for the AICTE IDEA Lab
                        </p>
                        <p>
                            Dr. Mathur's primary research focuses on Polymer-Based Composite Materials, including partial green composites, fully green composites, and hybrid composite materials. His innovative work is evident in his patents, which include a novel resin-based dental composite filled with wollastonite and nano-alumina, and the manufacture of highly efficient, low-cost solar cells using perovskites based on TiO2 nanostructures.
                        </p>
                        <br />
                        <p>
                            Dr. Mathur has published several research papers in reputed SCI and SCOPUS-indexed journals. His notable work includes papers on the development and evaluation of PLA matrix composites reinforced with SCB/CF fiber, and studies on tribological properties using ANOVA and regression analysis. He has actively presented at National Conferences on Renewable Energy Sources and Sustainable Development, among others.
                        </p>



                    </>
                }

                messageLink=""
                buttonLabel="Read More"
                showButton={false}
                reverse={false}
            />
            <Cta />
            <Footer />
        </div>
    )
}

export default CoE
