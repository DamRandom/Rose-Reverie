import React from "react";

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
  return (
    <section className="p-10 bg-[color:var(--chocolate-cosmos)] bg-opacity-80 rounded-lg shadow-xl backdrop-blur-md">
      <h2 className="text-3xl font-bold text-[color:var(--rose-quartz)] text-center mb-8">
        Témoignages de nos clients
      </h2>
      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[color:var(--night)] bg-opacity-70 border border-white/20 p-6 rounded-lg shadow-md text-white"
          >
            <p className="italic text-lg">&apost;{testimonial.comment}&apost;</p>
            <p className="mt-4 text-right font-semibold text-[color:var(--rose-quartz)]">
              - {testimonial.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
