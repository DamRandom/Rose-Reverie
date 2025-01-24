import Navbar from "@/components/Navbar";
import Carousel from "@/components/HeroImage";
import AboutUs from "./modules/AboutUs";
import SalonHistory from "./modules/SalonHistory";
import Footer from "@/components/Footer";
import HairServices from "./modules/HairServices";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      <Carousel />

      <Navbar />

      {/* About Us Section */}
      <section className="pt-16 pb-32">
        <AboutUs />
      </section>

      {/* Combined Salon History and Hair Services with Parallax Effect */}
      <section
        className="relative bg-cover bg-center bg-fixed parallax"
        style={{
          backgroundImage: "url('/images/ta-focando-i3x4Bjmt-Js-unsplash.jpg')",
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

      <Footer />
    </div>
  );
}
