import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import AnnouncementBar from "@/components/AnnouncementBar";
import QuickLinks from "@/components/QuickLinks";
import AboutSection from "@/components/AboutSection";
import AcademicPrograms from "@/components/AcademicPrograms";
import FacilitiesSection from "@/components/FacilitiesSection";
import NewsEventsSection from "@/components/NewsEventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PlacementSection from "@/components/PlacementSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-100 font-body">
      <Header />
      <HeroSlider />
      <AnnouncementBar />
      <QuickLinks />
      <AboutSection />
      <AcademicPrograms />
      <FacilitiesSection />
      <NewsEventsSection />
      <TestimonialsSection />
      <PlacementSection />
      <ContactSection />
      <MapSection />
      <Footer />
    </div>
  );
}
