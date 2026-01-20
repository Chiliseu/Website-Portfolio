const skills = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Languages" },
  { name: "JavaScript", level: 95, category: "Languages" },
  { name: "Node.js", level: 80, category: "Backend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Python", level: 75, category: "Languages" },
  { name: "PostgreSQL", level: 70, category: "Backend" },
  { name: "Git", level: 85, category: "Tools" },
  { name: "Docker", level: 65, category: "Tools" },
  { name: "AWS", level: 60, category: "Cloud" },
  { name: "Figma", level: 70, category: "Design" },
];

const categories = ["Frontend", "Backend", "Languages", "Tools", "Cloud", "Design"];

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
            And always learning more technologies...
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["GraphQL", "Redis", "MongoDB", "Rust", "Go", "Kubernetes"].map(
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
