import TestimonialsSection from "./TestimonialsSection";
import CommentFormSection from "./CommentFormSection";

export default function Feedback() {
  return (
    <section className="flex flex-col lg:flex-row gap-6 lg:gap-10 p-4 lg:p-10">
      {/* Comments Section */}
      <div className="lg:w-1/2" data-aos="fade-right">
        <TestimonialsSection />
      </div>

      {/* Form Section */}
      <div className="lg:w-1/2" data-aos="fade-left">
        <CommentFormSection />
      </div>
    </section>
  );
}
