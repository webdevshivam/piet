
import React from 'react';
import { AccessibilityFeatures } from '@/components/AccessibilityFeatures';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadCrumb from '@/components/BreadCrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Users, Target, Heart } from 'lucide-react';

const Messages = () => {
    const messages = [
        {
            id: 1,
            title: "From the desk of Chairman (Emeritus)",
            name: "Late Dr. S.M. Seth",
            position: "Chairman (Emeritus), Former Director, National Institute of Hydrology, Roorkee",
            image: "https://www.piet.poornima.org/images/chairper.png",
            message: `Radical changes are being generated by Globalization, especially with regards to how national economies and transnational corporations around the Globe are designing, producing, distributing and consuming products and services. With a superbly well laid out landscape/campus that spans over 5.73 acres, Poornima Institute of Engineering & Technology offers a unique academic environment of continuous influence and interaction, considered essential for the enrichment of mind and the body with maximum of speed and minimum of cost.

The college recognizes the abilities of its students very well and enables them to harness their potential and to grow and evolve them into successful professionals. At this unique institution located in Pink City-Jaipur, we nurture the academic skills, tune the aesthetic senses and work towards building a holistic culture that values the individuality of each student.

To provide quality education, Poornima Institute of Engineering & Technology has a team of highly qualified and dedicated faculty members and has created a physical environment that supports teaching, learning, and research. I hope you will enjoy using the website and utilize the information available on it in a productive way.`,
            signature: "JAI JAI POORNIMA SANSTHAN\nJAI HIND"
        },
        {
            id: 2,
            title: "From the desk of Chairman",
            name: "Ar. Shashikant Singhi",
            position: "Chairman, Poornima Group",
            image: "https://www.piet.poornima.org/images/chairman.png",
            message: `A deep sense of appreciation, gratitude and joy surge through my heart as I greet you into the 16th year of existence of Poornima Institute of Engineering & Technology and its service to the nation. True to its motto "Gyanam Bina na kimapi Sadhyam" PIET always aspires to AIM HIGH, scaling great heights in its quest for EXCELLENCE in imparting human, intellectual, spiritual and moral formation to the students.

Having successfully crossed the various hurdles encountered on the way of its growth, PIET has grown in stature and strength today, and has become one of the finest educational institutions working dedicatedly in the pursuit of knowledge and excellence. Today PIET is not just a college but is a FAMILY in which the educational community, the management, staff, students, parents and alumni work together to foster this FAMILY SPIRIT.

In the words of our great visionary Hon'ble Ex. President of India Late Dr. APJ Abdul Kalam: "Learning gives creativity, Creativity leads to thinking, Thinking provides knowledge, and Knowledge makes you great."`,
            signature: "JAI JAI POORNIMA SANSTHAN\nJAI HIND"
        },
        {
            id: 3,
            title: "From the desk of Director",
            name: "Ar. Rahul Singhi",
            position: "Director, Poornima Group",
            image: "https://www.piet.poornima.org/images/director.png",
            message: `In the present times technology and innovation are not merely a demand or desire, but they have become the foundation for our lifestyle and society. With an impressive campus and well equipped infrastructure, Poornima Institute of Engineering and Technology provides an academic environment which is unique, amiable and interactive.

We here at Poornima, recognize the abilities of our students very well and adequately educate and prepare them to harness their potential to the most and to evolve into not only successful professionals but also ethical citizens. We continuously strive for disciplined learning, research, creation and innovation.

Our emphasis stays on advancing effective, certain and proficient technocrats and business visionaries with worldwide reasoning and cutting edge outlook that will add to country's progress with synchronous confidence in corporate morals.`,
            signature: "JAI JAI POORNIMA SANSTHAN\nJAI HIND"
        },
        {
            id: 4,
            title: "From the desk of Principal",
            name: "Dr. Dinesh Goyal",
            position: "Principal, Poornima Institute of Engineering & Technology",
            image: "https://www.piet.poornima.org/images/principle.png",
            message: `Engineers don't think the glass is half empty or half full. They just think the glass needs to be redesigned.

It gives me an abundant pleasure to welcome you all to the innovative & inventive world of Poornima Institute of Engineering and Technology, an eco-friendly campus coupled with the best infrastructure to help in attaining the highest standards in academic, research and professional excellence.

We are the only institute in Rajasthan for establishing IDEA Lab. We have also proved our excellence by recent Quality Index Value (QIV) rankings by Rajasthan Technical University (RTU) which placed Poornima Institute of Engineering & Technology among the top three out of 98 affiliated engineering colleges regularly since last 05 years.

Welcome to Poornima Family!`,
            signature: "JAI JAI POORNIMA SANSTHAN\nJAI HIND"
        }
    ];

    const highlights = [
        {
            icon: <Users className="h-6 w-6" />,
            title: "Student-Centric Approach",
            description: "Recognizing and nurturing the unique abilities of each student"
        },
        {
            icon: <Target className="h-6 w-6" />,
            title: "Excellence in Education",
            description: "Committed to providing quality education with global standards"
        },
        {
            icon: <Heart className="h-6 w-6" />,
            title: "Family Spirit",
            description: "Creating a collaborative environment of peace and harmony"
        }
    ];

    return (
        <div className="min-h-screen bg-neutral-50">
            <AccessibilityFeatures />
            <Header />
            
            {/* Hero Section with Featured Image */}
            <div className="relative mb-12 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="/attached_assets/image_1753091151890.png"
                        alt="Messages from Pillars"
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
                </div>
                
                <div className="relative z-10 container mx-auto px-4 lg:px-0 py-20">
                    <BreadCrumb
                        title="Messages from Leadership"
                        description="Inspiring words from the pillars of Poornima Institute"
                        breadcrumbs={[
                            { label: 'Home', href: '/' },
                            { label: 'About', href: '/about' },
                            { label: 'Messages', isCurrent: true }
                        ]}
                    />
                </div>
            </div>

            {/* Introduction Section */}
            <div className="container mx-auto px-4 lg:px-0 mb-16">
                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-primary mb-6">
                        Words of <span className="text-secondary">Wisdom</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
                    <p className="text-xl text-neutral-600 leading-relaxed mb-12">
                        Discover the vision, values, and aspirations that guide Poornima Institute through the inspiring messages from our esteemed leadership. These words reflect our commitment to excellence, innovation, and holistic development.
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        {highlights.map((highlight, index) => (
                            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-neutral-200 hover:border-primary">
                                <CardContent className="p-6 text-center">
                                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-xl mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                        {highlight.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                                        {highlight.title}
                                    </h3>
                                    <p className="text-neutral-600 text-sm">
                                        {highlight.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Messages Section */}
            <div className="container mx-auto px-4 lg:px-0 mb-20">
                <div className="space-y-16">
                    {messages.map((message, index) => (
                        <div key={message.id} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-neutral-50 to-white'} rounded-2xl shadow-lg border border-neutral-200 overflow-hidden`}>
                            <div className="p-8 lg:p-12">
                                {/* Header */}
                                <div className="flex items-start gap-6 mb-8">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={message.image}
                                            alt={message.name}
                                            className="w-20 h-20 lg:w-24 lg:h-24 rounded-xl object-cover border-2 border-primary/20 shadow-md"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-start gap-3 mb-2">
                                            <Quote className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                                            <h3 className="text-2xl lg:text-3xl font-bold text-primary leading-tight">
                                                {message.title}
                                            </h3>
                                        </div>
                                        <h4 className="text-xl font-semibold text-secondary mb-2">
                                            {message.name}
                                        </h4>
                                        <p className="text-neutral-600 text-sm lg:text-base">
                                            {message.position}
                                        </p>
                                    </div>
                                </div>

                                {/* Message Content */}
                                <div className="prose prose-lg max-w-none">
                                    <div className="text-neutral-700 leading-relaxed space-y-4">
                                        {message.message.split('\n\n').map((paragraph, idx) => (
                                            <p key={idx} className="text-justify">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* Signature */}
                                <div className="mt-8 pt-6 border-t border-neutral-200">
                                    <div className="text-right">
                                        <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg font-semibold text-sm">
                                            {message.signature.split('\n').map((line, idx) => (
                                                <div key={idx}>{line}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary to-secondary py-16 mb-20">
                <div className="container mx-auto px-4 lg:px-0 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                        Join the Poornima Family
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Be part of our legacy of excellence, innovation, and holistic development. Your journey towards becoming a successful professional starts here.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/about"
                            className="inline-block px-8 py-3 bg-white text-primary hover:bg-neutral-100 transition-colors rounded-lg font-semibold shadow-lg"
                        >
                            Learn More About Us
                        </a>
                        <a
                            href="/"
                            className="inline-block px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-colors rounded-lg font-semibold"
                        >
                            Explore Our Programs
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Messages;
