import Navbar from "@/components/Navbar";
import HeroImage from "@/components/HeroImage";
import AboutUs from "./modules/AboutUs";
import SalonHistory from "./modules/SalonHistory";
import Footer from "@/components/Footer";
import HairServices from "./modules/HairServices";
import VideoSection from "./modules/VideoSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0C1212] text-[#BFADB4] font-[family-name:var(--font-geist-sans)]">
      <HeroImage />
      <Navbar />

      {/* About Us Section */}
      <section className="pb-32">
        <AboutUs />
      </section>

      {/* Combined Salon History and Hair Services with Parallax Effect */}
      <section
        className="relative bg-cover bg-center bg-fixed parallax"
        style={{
          backgroundImage: "url('/images/Pink&White/girl-2189247.jpg')",
        }}
      >
        <div className="container mx-auto">
          {/* Salon History Section */}
          <SalonHistory />
        </div>

        <div className="container mx-auto">
          {/* Hair Services Section */}
          <HairServices />
        </div>
      </section>

      <section>
        <VideoSection />
      </section>

      <Footer />
    </div>
  );
}
