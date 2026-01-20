const skills = [
  { name: "Video Editing", level: 95, category: "Production" },
  { name: "Film Directing", level: 90, category: "Production" },
  { name: "Visual Effects (VFX)", level: 85, category: "Production" },
  { name: "Sound Design", level: 80, category: "Production" },
  { name: "Color Grading", level: 85, category: "Production" },
  { name: "Adobe Premiere Pro", level: 95, category: "Software" },
  { name: "Adobe After Effects", level: 90, category: "Software" },
  { name: "DaVinci Resolve", level: 80, category: "Software" },
  { name: "Adobe Photoshop", level: 85, category: "Software" },
  { name: "Graphic Design", level: 85, category: "Design" },
  { name: "Poster Design", level: 90, category: "Design" },
  { name: "Visual Branding", level: 80, category: "Design" },
  { name: "Cinematography", level: 75, category: "Technical" },
  { name: "Shot Composition", level: 85, category: "Technical" },
  { name: "Storytelling", level: 90, category: "Technical" },
  { name: "Basic Web Design", level: 70, category: "Other" },
  { name: "Team Collaboration", level: 90, category: "Other" },
  { name: "Creative Planning", level: 85, category: "Other" },
];

const categories = ["Production", "Software", "Design", "Technical", "Other"];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                {category}
              </h3>
              <div className="space-y-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Always expanding my creative toolkit...
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Blender 3D", "Motion Graphics", "Audio Mixing", "Storyboarding", "Script Writing", "Event Coverage"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-gray-300 text-sm hover:border-blue-500 transition-colors duration-200"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
