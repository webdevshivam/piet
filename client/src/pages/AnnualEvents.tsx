
import React from 'react';
import { motion } from 'framer-motion';
import { AccessibilityFeatures } from '../components/AccessibilityFeatures';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import Footer from '../components/Footer';
import Cta from '../components/Cta';

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  highlights: string[];
  when: string;
  venue: string;
}

const EventCard = ({ title, description, image, highlights, when, venue }: EventCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <div className="relative h-64 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
    </div>
    
    <div className="p-6">
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="flex items-center text-sm text-gray-500">
          <i className="fas fa-calendar-alt mr-2 text-primary"></i>
          <span>{when}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <i className="fas fa-map-marker-alt mr-2 text-primary"></i>
          <span>{venue}</span>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-lg font-semibold text-primary mb-2">Event Highlights:</h4>
        <ul className="space-y-1">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start">
              <i className="fas fa-star text-secondary mr-2 mt-1 text-sm"></i>
              <span className="text-sm text-gray-600">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const StatsCard = ({ icon, number, label }: { icon: string; number: string; label: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-center bg-gradient-to-br from-primary to-secondary text-white rounded-xl p-6 shadow-lg"
  >
    <i className={`${icon} text-4xl mb-3`}></i>
    <div className="text-3xl font-bold mb-1">{number}</div>
    <div className="text-sm opacity-90">{label}</div>
  </motion.div>
);

const AnnualEvents = () => {
  const events: EventCardProps[] = [
    {
      title: "Aarohan",
      description: "The grand annual technical festival of PIET that showcases innovation, creativity, and technical prowess. A platform where students from various disciplines come together to participate in competitions, workshops, and exhibitions.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      highlights: [
        "Technical competitions and coding challenges",
        "Innovation exhibitions and project displays",
        "Expert talks and industry interactions",
        "Cultural performances and entertainment",
        "Inter-college competitions"
      ],
      when: "February - March",
      venue: "PIET Campus"
    },
    {
      title: "Ojas",
      description: "The vibrant annual cultural festival that celebrates art, creativity, and talent. Ojas brings together students to showcase their artistic abilities through various cultural competitions and performances.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      highlights: [
        "Dance and music competitions",
        "Drama and theatre performances",
        "Art and craft exhibitions",
        "Fashion shows and talent hunts",
        "Celebrity performances and entertainment"
      ],
      when: "October - November",
      venue: "PIET Auditorium & Campus"
    },
    {
      title: "Freshers Party",
      description: "A warm welcome celebration for new students joining the PIET family. An opportunity for freshers to interact with seniors, participate in fun activities, and begin their journey with memorable experiences.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      highlights: [
        "Welcome ceremony and orientation",
        "Fun games and ice-breaking activities",
        "Mr. & Miss Fresher competitions",
        "Cultural performances by seniors",
        "Networking and interaction sessions"
      ],
      when: "August - September",
      venue: "Main Auditorium"
    },
    {
      title: "Farewell Party",
      description: "A heartfelt send-off celebration for graduating students. A memorable evening filled with emotions, memories, and best wishes for the future endeavors of our departing students.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      highlights: [
        "Emotional farewell speeches and memories",
        "Awards and recognition ceremony",
        "Photo sessions and memory sharing",
        "Entertainment and cultural programs",
        "Networking with alumni and faculty"
      ],
      when: "April - May",
      venue: "PIET Auditorium"
    },
    {
      title: "Dandiya Night",
      description: "A spectacular celebration of traditional Gujarati culture during Navratri. Students come together to enjoy the vibrant dandiya and garba dance forms in a festive atmosphere filled with music, colors, and joy.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400&q=80",
      highlights: [
        "Traditional dandiya and garba dancing",
        "Colorful ethnic attire and decorations",
        "Live music and DJ performances",
        "Best dressed competitions",
        "Food stalls with traditional delicacies"
      ],
      when: "September - October",
      venue: "College Grounds"
    }
  ];

  const stats = [
    { icon: "fas fa-calendar-check", number: "5+", label: "Annual Events" },
    { icon: "fas fa-users", number: "2000+", label: "Participants" },
    { icon: "fas fa-trophy", number: "50+", label: "Competitions" },
    { icon: "fas fa-heart", number: "100%", label: "Memorable Moments" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <AccessibilityFeatures />
      <Header />
      
      <BreadCrumb
        title="Annual Events"
        description="Celebrating life, culture, and achievements through our vibrant annual events"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Student Life', href: '/student-life' },
          { label: 'Annual Events', isCurrent: true },
        ]}
      />

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Celebrate Life at PIET
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              From technical festivals to cultural celebrations, our annual events create memories that last a lifetime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Signature Events
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the vibrant campus life through our carefully curated annual events that bring together 
              students, faculty, and the wider community in celebration of learning, culture, and achievement.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </div>
      </section>

      {/* Participation Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Join the Celebration
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our annual events are more than just celebrations – they're opportunities for personal growth, 
              skill development, and building lifelong friendships. Whether you're interested in technology, 
              arts, culture, or simply want to have fun, there's something for everyone at PIET.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Network</h3>
                <p className="text-gray-600">Connect with peers, seniors, and industry professionals</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-lightbulb text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Learn</h3>
                <p className="text-gray-600">Gain new skills through workshops and competitions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-trophy text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Excel</h3>
                <p className="text-gray-600">Showcase your talents and win exciting prizes</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  );
};

export default AnnualEvents;
