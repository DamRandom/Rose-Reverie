import TestimonialsSection from "./TestimonialsSection";
import CommentFormSection from "./CommentFormSection";

export default function Feedback() {
  return (
    <section className="flex flex-col lg:flex-row gap-10 p-10">
      <div className="lg:w-1/2" data-aos="fade-right">
        <TestimonialsSection />
      </div>
      <div className="lg:w-1/2" data-aos="fade-left">
        <CommentFormSection />
      </div>
    </section>
  );
}
