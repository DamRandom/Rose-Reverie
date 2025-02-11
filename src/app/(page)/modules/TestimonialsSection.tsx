import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Testimonials data
const testimonials = [
  {
    name: "Élodie Martin",
    comment: "Une expérience incroyable ! Mes cheveux n'ont jamais été aussi beaux.",
  },
  {
    name: "Luc Moreau",
    comment: "Le service est impeccable, et l'équipe est vraiment talentueuse.",
  },
  {
    name: "Claire Bernard",
    comment: "Je suis émerveillée par le professionnalisme et l'attention aux détails.",
  },
];

export default function TestimonialsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-8 lg:py-16 px-4 sm:px-6 lg:px-8">
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[color:var(--quinacridone-magenta)] text-center mb-6 lg:mb-12"
        data-aos="fade-up"
      >
        Témoignages de nos clients
      </h2>

      {/* Testimonials container */}
      <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex-1 min-w-[280px] max-w-[500px] p-4 lg:p-6 bg-[color:var(--night)] bg-opacity-70 rounded-lg shadow-lg border border-white/20"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            {/* Decorative top element */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 sm:w-8 sm:h-8 text-[color:var(--quinacridone-magenta)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 12H4"
                />
              </svg>
            </div>

            {/* Testimonial content */}
            <p className="italic text-sm sm:text-base lg:text-lg text-[color:var(--rose-quartz)]">
              &quot;{testimonial.comment}&quot;
            </p>
            <p className="mt-4 text-right font-semibold text-[color:var(--quinacridone-magenta)]">
              - {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
