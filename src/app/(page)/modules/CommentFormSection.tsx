import React, { useState } from "react";

export default function CommentFormSection() {
  const [formData, setFormData] = useState({ name: "", comment: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Comment submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", comment: "" });
  };

  return (
    <section className="relative min-h-screen py-16 px-8 bg-[#0C1212] flex items-center justify-center">
      {/* Contenedor de fondo con efecto cristal */}
      <div className="relative z-10 backdrop-blur-lg bg-[#0C1212]/60 px-8 py-10 rounded-xl shadow-2xl text-center text-[#BFADB4] max-w-xl border border-[#BFADB4]/20">
        <h2 className="text-3xl font-bold text-[#BFADB4] text-shadow-lg mb-8">
          Laissez un <span className="text-[#824E5F]">commentaire</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[#BFADB4] mb-2"
            >
              Votre Nom
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-[#BFADB4]/20 text-[#BFADB4] placeholder-[#D3B6B7] focus:outline-none focus:ring-2 focus:ring-[#824E5F] transition duration-300"
              placeholder="Entrez votre nom"
              required
            />
          </div>
          <div className="relative">
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-[#BFADB4] mb-2"
            >
              Votre Commentaire
            </label>
            <textarea
              id="comment"
              value={formData.comment}
              onChange={(e) =>
                setFormData({ ...formData, comment: e.target.value })
              }
              className="w-full px-4 py-3 h-32 rounded-lg bg-white/10 border border-[#BFADB4]/20 text-[#BFADB4] placeholder-[#D3B6B7] focus:outline-none focus:ring-2 focus:ring-[#824E5F] transition duration-300"
              placeholder="Partagez vos pensées"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#824E5F] text-[#BFADB4] font-semibold rounded-lg shadow-md hover:bg-[#501823] transition-colors duration-300"
          >
            Soumettre
          </button>
        </form>
      </div>

      {/* Decoración sutil detrás del formulario */}
      <div className="absolute inset-0 -z-10 bg-[url('/images/Pink&White/woman-2593366.jpg')] bg-cover bg-center opacity-20"></div>
    </section>
  );
}
