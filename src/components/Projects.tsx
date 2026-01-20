import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Siyete Kinse (Short Film)",
    description:
      "Award-winning short film that won Best Picture, Best Editing, Best Sound Design, Best Visual Effects, Best Production Design, and Best Makeup at PUPQC Multimedia Film Festival.",
    tags: ["Film", "Directing", "Editing", "VFX", "Award-Winning"],
    emoji: "🏆",
    liveUrl: "https://www.youtube.com/watch?v=aDWiGH37jzo",
    category: "Film",
  },
  {
    id: 2,
    title: "Siyete Kinse - Official Trailer",
    description:
      "The official trailer for Siyete Kinse, showcasing the visual style and narrative tension of the award-winning short film.",
    tags: ["Trailer", "Editing", "Promotion"],
    emoji: "🎬",
    liveUrl: "https://www.youtube.com/watch?v=PUpaSBtCeMQ",
    category: "Film",
  },
  {
    id: 3,
    title: "Siyete Kinse - Teaser",
    description:
      "Award-winning teaser (2nd Place Best Teaser) for the short film Siyete Kinse at PUPQC Multimedia Film Festival.",
    tags: ["Teaser", "Editing", "Award-Winning"],
    emoji: "🎥",
    liveUrl: "https://www.youtube.com/watch?v=tcUAa98VaX8",
    category: "Film",
  },
  {
    id: 4,
    title: "Floodchild (Short Film)",
    description:
      "A compelling short film exploring dramatic themes with cinematic storytelling and professional production quality.",
    tags: ["Film", "Directing", "Storytelling"],
    emoji: "🌊",
    liveUrl: "https://www.youtube.com/watch?v=iDwmwe0P-tQ",
    category: "Film",
  },
  {
    id: 5,
    title: "/Confess (Short Film)",
    description:
      "A narrative short film featuring engaging storytelling, creative direction, and polished post-production.",
    tags: ["Film", "Directing", "Editing"],
    emoji: "🎭",
    liveUrl: "https://www.youtube.com/watch?v=kLJwotblzCo&t=929s",
    category: "Film",
  },
  {
    id: 6,
    title: "Honkai Star Rail Edit",
    description:
      "A dynamic video edit featuring gameplay and cinematic moments from Honkai Star Rail with creative visual effects.",
    tags: ["Gaming", "Edit", "VFX", "Motion Graphics"],
    emoji: "🎮",
    liveUrl: "https://www.youtube.com/watch?v=HPYksfkoVqM&t=5s",
    category: "Edit",
  },
];

const facebookEdits = [
  { id: 1, url: "https://www.facebook.com/reel/573600078400161" },
  { id: 2, url: "https://www.facebook.com/reel/1476643279857464" },
  { id: 3, url: "https://www.facebook.com/reel/956277386668028" },
  { id: 4, url: "https://www.facebook.com/reel/1203152064851087" },
  { id: 5, url: "https://www.facebook.com/reel/1058282313005775" },
  { id: 6, url: "https://www.facebook.com/reel/311992995154783" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Works</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A showcase of my video editing, film directing, and multimedia production work.
          From award-winning short films to creative video edits.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden card-hover group"
            >
              <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-6xl">{project.emoji}</span>
                {project.id === 1 && (
                  <div className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                    🏆 Best Picture
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-red-400 hover:text-red-300 transition-colors duration-200"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    Watch on YouTube
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook Edits Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            Social Media <span className="text-gradient">Edits</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {facebookEdits.map((edit) => (
              <a
                key={edit.id}
                href={edit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 flex flex-col items-center justify-center card-hover group"
              >
                <span className="text-4xl mb-2">📱</span>
                <span className="text-sm text-gray-400 group-hover:text-blue-400 transition-colors duration-200">
                  Edit #{edit.id}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@yuanexequiel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full font-semibold transition-colors duration-200"
          >
            View More on YouTube
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
