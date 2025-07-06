import AboutSection from "@/components/AboutComponent";
import ContactSection from "@/components/ContactComponent";
import DonationSection from "@/components/DonationSection";
import HeroComponent from "@/components/HeroComponent";
import VisionComponent from "@/components/VisionComponent";
import Image from "next/image";

export default function Home() {
  return (
   <div>
      <HeroComponent />
      <AboutSection />
      <VisionComponent />
      <DonationSection />
      <ContactSection />
   </div>
  );
}
