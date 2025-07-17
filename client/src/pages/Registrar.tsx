import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import Cta from '@/components/Cta'
import Message from '@/components/Message'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

const Registrar = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Registrar Message"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    {
                        label: 'Registrar Message', isCurrent: true
                    },
                ]}

            />
            <Message
                heading="Message from the Director"
                name="Dr. Balwan (Registrar)"
                title="Registrar PIET"
                imageSrc="https://www.piet.poornima.org/images/Registrar_piet.JPG"
                imageAlt="Photo of Ms. Aarti Sharma"
                shortBio="Poornima Institute of Engineering & Technology,registrar.piet@poornima.org"
                messageExcerpt={
                    <>
                        <p>
                            Dr. Balwan is a distinguished academician and administrator with extensive experience in civil engineering education and institutional leadership. Currently serving as the Registrar at Poornima Institute of Engineering & Technology, Jaipur, he is known for his commitment to academic excellence, research innovation, and administrative efficiency. His expertise in advanced concrete technology and structural engineering highlights his strong foundation in technical knowledge and professional practice.




                        </p>
                        <br />
                        <p>
                            Dr. Balwan earned his Ph.D. in Advanced Concrete Technology from Poornima University in 2024. He completed his M.Tech. in Structural Engineering from Maharshi Dayanand University, Rohtak, in 2016. He holds a B.Tech. degree in Civil Engineering from Kurukshetra University.



                        </p>
                        <p>
                            Dr. Balwan’s research primarily focuses on the use of sustainable materials in construction. His Ph.D. dissertation titled "An Experimental Investigation to Substitute Copper Tailing in Mortar with Fine Aggregate and Its Impact on Mechanical, Durability, and Rheological Properties of Mortar" is a significant contribution to eco-friendly construction practices. He has published multiple research papers in reputed national and international journals, including SCOPUS-indexed publications, on topics such as earthquake vibration control, mining waste utilization in concrete, and machine learning applications in material strength prediction.




                        </p>
                        <br />
                        <p>
                            With nearly a decade of teaching experience, Dr. Balwan began his career as a Teaching Associate at Dr. K. N. Modi University, Newai, Rajasthan, and later joined Poornima College of Engineering, Jaipur, as an Assistant Professor in 2017. Over the years, he has taught core civil engineering subjects such as Design of Concrete Structures, Concrete Technology, Building Materials, Structural Analysis, and Design of Steel Structures. His expertise in delivering complex technical content with clarity has been highly appreciated by students and peers alike.


                        </p>
                        <p>
                            In addition to his academic roles, Dr. Balwan has held significant administrative positions. Since January 2025, he has been serving as the Registrar at Poornima Institute of Engineering & Technology, Jaipur. Prior to this, he contributed to Poornima College of Engineering as the Head of the Department, Alumni Cell Coordinator, Project In-charge, Dy. Head of Department, and In-charge of the Concrete Technology Laboratory. His administrative leadership also extends to managing academic timetables, alumni engagement activities, and mentoring students, demonstrating a holistic contribution to institutional development.

                        </p>
                        <p>
                            Throughout his career, Dr. Balwan has been honored with several accolades, including a Certificate of Appreciation for UTOPIA 2K15 at Dr. K. N. Modi University and recognition as the Head Coordinator for civil engineering bridge design workshops. His consistent contributions to academic and extracurricular activities have earned him a reputation for excellence and leadership.


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

export default Registrar
