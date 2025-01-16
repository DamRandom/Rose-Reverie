import AboutUs from './modules/AboutUs'; // Asegúrate de que la ruta sea correcta
import SalonHistory from './modules/SalonHistory'; // Asegúrate de que la ruta sea correcta

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-geist-sans)]">
      {/* Mostrar la primera sección: Quiénes somos */}
      <AboutUs />
      {/* Mostrar la segunda sección: Historia del salón */}
      <SalonHistory />
    </div>
  );
}
