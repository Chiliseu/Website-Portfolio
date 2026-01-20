export default function About() {
  const awards = [
    "Best Picture - PUPQC Multimedia Film Festival",
    "Best Editing - PUPQC Multimedia Film Festival",
    "Best Sound Design - PUPQC Multimedia Film Festival",
    "Best Visual Effects - PUPQC Multimedia Film Festival",
    "Best Production Design - PUPQC Multimedia Film Festival",
    "Best Makeup and Hairstyling - PUPQC Multimedia Film Festival",
    "Best Teaser (2nd Place) - PUPQC Multimedia Film Festival",
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I&apos;m <strong className="text-white">Yuan Exequiel R. Evangelista</strong>, 
              a motivated Information Technology student at Polytechnic University of the 
              Philippines - Quezon City Campus, specializing in Multimedia, Video Editing, 
              and Creative Production.
            </p>
            <p className="text-gray-300 leading-relaxed">
              With experience in directing short films, video editing, and graphic design, 
              I&apos;ve developed a strong foundation in visual storytelling. My work has been 
              recognized with multiple awards at the PUPQC Multimedia Film Festival, including 
              Best Picture and Best Editing.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I&apos;m passionate about bringing creative visions to life through compelling 
              visual narratives. Whether it&apos;s crafting cinematic short films, designing 
              eye-catching promotional materials, or editing dynamic video content, I strive 
              to deliver high-quality work that resonates with audiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">📍</span>
                <span className="text-gray-300">Quezon City, Philippines</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">🎓</span>
                <span className="text-gray-300">BS Information Technology - PUPQC</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">💼</span>
                <span className="text-gray-300">Open for OJT opportunities</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center card-hover">
                <h3 className="text-3xl font-bold text-gradient mb-2">7</h3>
                <p className="text-gray-400">Film Festival Awards</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center card-hover">
                <h3 className="text-3xl font-bold text-gradient mb-2">3+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center card-hover">
                <h3 className="text-3xl font-bold text-gradient mb-2">10+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center card-hover">
                <h3 className="text-3xl font-bold text-gradient mb-2">🏆</h3>
                <p className="text-gray-400">Best Picture Winner</p>
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4 text-blue-400">🏆 Awards & Recognition</h3>
              <ul className="space-y-2">
                {awards.map((award, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-yellow-400 mt-1">★</span>
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
