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
    <section className="p-10 bg-[color:var(--night)] bg-opacity-90 rounded-lg shadow-xl backdrop-blur-md">
      <h2 className="text-3xl font-bold text-[color:var(--rose-quartz)] text-center mb-8">
        Laissez un commentaire
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[color:var(--rose-quartz)]"
          >
            Nom
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full mt-2 px-4 py-2 rounded-lg bg-white bg-opacity-10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--quinacridone-magenta)]"
            placeholder="Votre nom"
            required
          />
        </div>
        <div>
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-[color:var(--rose-quartz)]"
          >
            Commentaire
          </label>
          <textarea
            id="comment"
            value={formData.comment}
            onChange={(e) =>
              setFormData({ ...formData, comment: e.target.value })
            }
            className="w-full mt-2 px-4 py-2 h-32 rounded-lg bg-white bg-opacity-10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[color:var(--quinacridone-magenta)]"
            placeholder="Votre commentaire"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-[color:var(--quinacridone-magenta)] text-white font-bold rounded-lg shadow-md hover:bg-opacity-90 transition"
        >
          Soumettre
        </button>
      </form>
    </section>
  );
}
