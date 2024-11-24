import AboutSection from "@/components/landing/AboutSection";
import Achievements from "@/components/landing/Achievements";
import ClientList from "@/components/landing/clients/ClientList";
import HeroSection from "@/components/landing/HeroSection";
import ImageGallary from "@/components/landing/image-gallery/ImageGallary";
import ServeList from "@/components/landing/serve/ServeList";
import ServicesList from "@/components/landing/services/ServicesList";
import StatsList from "@/components/landing/stats/StatsList";
import TestimonialsList from "@/components/landing/testimonial/TestimonialsList";
import WhoWeAre from "@/components/landing/whoweare/WhoWeAre";
import WhyChooseUs from "@/components/landing/whychoose/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <StatsList />
      <ServicesList />
      <Achievements />
      <ServeList />
      <WhyChooseUs />
      <WhoWeAre />
      <ClientList />
      <TestimonialsList />
      <ImageGallary />
    </main>
  );
}
