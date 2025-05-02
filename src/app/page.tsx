
import {AboutSection} from "@/app/landing-page/components/ui/AboutSection";
import {ContactSection} from "@/app/landing-page/components/ui/ContactSection";
import {Footer} from "@/app/landing-page/components/ui/Footer";
import {HeroSection} from "@/app/landing-page/components/ui/HeroSection";
import {ServicesSection} from "@/app/landing-page/components/ui/ServicesSection";
// import TestimonialsSection from "@/app/landing-page/components/ui/TestimonialsSection";
import {AppointmentForm} from "./landing-page/components/ui/AppointmentForm";



export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AppointmentForm />
      <ContactSection />
      <Footer />
    </div>
  );
}
