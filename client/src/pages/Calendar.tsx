import React from 'react'
import Tabs, { TabItem } from '@/components/Tabs'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadCrumb from '@/components/BreadCrumb';
import Cta from '@/components/Cta';
import LazyImage from '@/components/LazyImage';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';


const tabItems: TabItem[] = [
    {
        id: "2024-25",
        label: "2024-25",
        iconClass: "fas fa-clock",
        content: (
            <div>
                <h3 className="text-xl font-semibold mb-2">Odd</h3>
                <LazyImage
                    src="https://www.piet.poornima.org/images/academic%20calender/PIET_Academic_Calendar_ODD_2024-25.jpg"
                    alt="Even"
                    className="w-full h-auto"
                />

                <h3 className="text-xl font-semibold mb-2">Even</h3>
                <LazyImage
                    src="https://www.piet.poornima.org/images/academic%20calender/EVEN%202024-25.jpg"
                    alt="Even"
                    className="w-full h-auto"
                />
            </div>
        ),
    },
    {
        id: "2023-24",
        label: "2023-24",
        iconClass: "fas fa-clock",
        content: (
            <div>
                <h3 className="text-xl font-semibold mb-2">Odd</h3>
                <LazyImage
                    src="https://www.piet.poornima.org/images/academic%20calender/PIET_Academic_Calendar_ODD_2024-25.jpg"
                    alt="Even"
                    className="w-full h-auto"
                />

                <h3 className="text-xl font-semibold mb-2">Even</h3>
                <LazyImage
                    src="https://www.piet.poornima.org/images/academic%20calender/EVEN%202024-25.jpg"
                    alt="Even"
                    className="w-full h-auto"
                />
            </div>
        ),
    },
    {
        id: "2022-23",
        label: "2022-23",
        iconClass: "fas fa-clock",
        content: (
            <div>
                <h3 className="text-xl font-semibold mb-2">Odd</h3>
                <LazyImage
                    src="https://www.piet.poornima.org/images/academic%20calender/PIET_Academic_Calendar_ODD_2024-25.jpg"
                    alt="Even"
                    className="w-full h-auto"
                />

                <h3 className="text-xl font-semibold mb-2">Even</h3>
                <LazyImage
                    src="https://www.piet.poornima.org/images/academic%20calender/EVEN%202024-25.jpg"
                    alt="Even"
                    className="w-full h-auto"
                />
            </div>
        ),
    },
    {
        id: "2021-22",
        label: "2021-22",
        iconClass: "fas fa-clock",
        content: (
            <div>
                <h3 className="text-xl font-semibold mb-2">Odd</h3>
                <LazyImage
                    src="https://www.piet.poornima.org/images/academic%20calender/PIET_Academic_Calendar_ODD_2024-25.jpg"
                    alt="Even"
                    className="w-full h-auto"
                />

                <h3 className="text-xl font-semibold mb-2">Even</h3>
                <LazyImage
                    src="https://www.piet.poornima.org/images/academic%20calender/EVEN%202024-25.jpg"
                    alt="Even"
                    className="w-full h-auto"
                />
            </div>
        ),
    },
];
const Calendar = () => {
    return (
        <div>
            <AccessibilityFeatures />
            <Header />
            <BreadCrumb
                title="Academic Calendar"
                description="Discover who we are and what makes Poornima Institute a center of excellence."
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    {
                        label: 'Academic Calendar', isCurrent: true
                    },
                ]}
            />
            <div className="container mx-auto">
                <Tabs items={tabItems} />;
            </div>
            <Cta />
            <Footer />
        </div>
    )
}

export default Calendar
