"use client";

import { useState } from "react";
import Image from "next/image";

const posters = [
  { id: 1, src: "/posters/SIYETE_KINSE_POSTER_1_LAST_SUPPER_CONCEPT.png", title: "Siyete Kinse - Last Supper Concept", category: "Film" },
  { id: 2, src: "/posters/SIYETE_KINSE_POSTER_3_CLASS_PICTURE_CONCEPT.png", title: "Siyete Kinse - Class Picture Concept", category: "Film" },
  { id: 3, src: "/posters/Siyete Kinse Tarpaulin.png", title: "Siyete Kinse Tarpaulin", category: "Film" },
  { id: 4, src: "/posters/LET DOWN POSTER.png", title: "Let Down Poster", category: "Design" },
  { id: 5, src: "/posters/FAKER POSTER.png", title: "Faker Poster", category: "Design" },
  { id: 6, src: "/posters/Event poster.jpg", title: "Event Poster", category: "Event" },
  { id: 7, src: "/posters/Infographics.jpg", title: "Infographics", category: "Design" },
  { id: 8, src: "/posters/Acheron Poster.png", title: "Acheron Poster", category: "Gaming" },
  { id: 9, src: "/posters/Acheron Poster 2.png", title: "Acheron Poster 2", category: "Gaming" },
  { id: 10, src: "/posters/Aventurine Poster.png", title: "Aventurine Poster", category: "Gaming" },
  { id: 11, src: "/posters/Black Swan Poster.png", title: "Black Swan Poster", category: "Gaming" },
  { id: 12, src: "/posters/Blade Poster.png", title: "Blade Poster", category: "Gaming" },
  { id: 13, src: "/posters/Jingliu Poster.png", title: "Jingliu Poster", category: "Gaming" },
  { id: 14, src: "/posters/Kafka Poster.png", title: "Kafka Poster", category: "Gaming" },
  { id: 15, src: "/posters/1.png", title: "Design 1", category: "Design" },
  { id: 16, src: "/posters/2.png", title: "Design 2", category: "Design" },
  { id: 17, src: "/posters/3.png", title: "Design 3", category: "Design" },
  { id: 18, src: "/posters/4.png", title: "Design 4", category: "Design" },
  { id: 19, src: "/posters/5.png", title: "Design 5", category: "Design" },
];

const categories = ["All", "Film", "Gaming", "Design", "Event"];

export default function Posters() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPoster, setSelectedPoster] = useState<typeof posters[0] | null>(null);

  const filteredPosters = activeCategory === "All" 
    ? posters 
    : posters.filter(poster => poster.category === activeCategory);

  return (
    <section id="posters" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Graphic <span className="text-gradient">Designs</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
          A collection of my poster designs, promotional materials, and visual artwork
          for films, events, and personal projects.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                  : "bg-slate-800/50 border border-slate-700 text-gray-300 hover:border-blue-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Poster Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredPosters.map((poster) => (
            <div
              key={poster.id}
              onClick={() => setSelectedPoster(poster)}
              className="relative aspect-[3/4] bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden cursor-pointer card-hover group"
            >
              <Image
                src={poster.src}
                alt={poster.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-medium text-sm">{poster.title}</p>
                  <span className="text-xs text-blue-400">{poster.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPoster && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPoster(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
              onClick={() => setSelectedPoster(null)}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
              <Image
                src={selectedPoster.src}
                alt={selectedPoster.title}
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <p className="text-white font-medium">{selectedPoster.title}</p>
              <span className="text-sm text-blue-400">{selectedPoster.category}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
