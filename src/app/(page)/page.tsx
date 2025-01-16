import Navbar from '@/components/Navbar';
import Carousel from '@/components/HeroImage'; // Importamos el carousel
import AboutUs from './modules/AboutUs'; // Asegúrate de que la ruta sea correcta
import SalonHistory from './modules/SalonHistory'; // Asegúrate de que la ruta sea correcta
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      {/* Carousel antes del Navbar */}
      <Carousel />

      {/* Navbar con enlace de navegación */}
      <Navbar />

      {/* Sección de Quiénes somos */}
      <section className="pt-16 pb-32">
        <AboutUs />
      </section>

      {/* Sección de Historia del salón */}
      <section className="pb-32">
        <SalonHistory />
      </section>

      {/* Footer al final */}
      <Footer />
    </div>
  );
}
