import TestimonialsSection from "./TestimonialsSection";
import CommentFormSection from "./CommentFormSection";

export default function Feedback() {
  return (
    <section className="flex flex-col lg:flex-row gap-10 p-10">
      {/* Sección de comentarios */}
      <div
        className="lg:w-1/2 flex items-center justify-center"
        data-aos="fade-right"
      >
        <TestimonialsSection />
      </div>

      {/* Sección del formulario */}
      <div
        className="lg:w-1/2 flex items-center justify-center"
        data-aos="fade-left"
      >
        <CommentFormSection />
      </div>
    </section>
  );
}
