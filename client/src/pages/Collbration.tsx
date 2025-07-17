import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BreadCrumb from '@/components/BreadCrumb'
import Cta from '@/components/Cta'
const images = [
    { id: 1, src: "https://www.piet.poornima.org/images/partners/Aerophantom.PNG", alt: "Laser Cut Wall Clock" },
    { id: 2, src: "https://www.piet.poornima.org/images/partners/muscat.PNG", alt: "3D Printer Lithophane" },
    { id: 3, src: "https://www.piet.poornima.org/images/partners/asiauniversity.PNG", alt: "Reverse Engineering" },
    { id: 3, src: "https://www.piet.poornima.org/images/partners/ats.PNG", alt: "Reverse Engineering" },
    { id: 3, src: "https://www.piet.poornima.org/images/partners/machineautomation.PNG", alt: "Reverse Engineering" },
    { id: 3, src: "https://www.piet.poornima.org/images/partners/h2s.PNG", alt: "Reverse Engineering" },
    { id: 3, src: "https://www.piet.poornima.org/images/partners/zeetron.PNG", alt: "Reverse Engineering" },
    { id: 3, src: "https://www.piet.poornima.org/images/partners/Aippublishing.png", alt: "Reverse Engineering" },
    { id: 3, src: "https://www.piet.poornima.org/images/partners/geekster.png", alt: "Reverse Engineering" },
    // add your actual image URLs here
];
import GallerySection from '@/components/GallerySection'
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures'

const Collbration = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="OUR PARTNERS"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    {
                        label: 'OUR PARTNERS', isCurrent: true
                    },
                ]}
            />

            <GallerySection
                title="OUR PARTNERS"
                description="Click any image to enlarge."
                items={images}
                itemsPerLoad={6}
            />

            <Cta />
            <Footer />
        </div>
    )
}

export default Collbration
