export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="text-gradient">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              Hello! I&apos;m a passionate developer with a love for creating
              beautiful and functional web applications. With several years of
              experience in web development, I specialize in building modern,
              responsive, and user-friendly interfaces.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in tech started when I discovered the magic of turning
              ideas into interactive experiences. Since then, I&apos;ve been
              constantly learning and exploring new technologies to stay at the
              forefront of web development.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or sharing my
              knowledge with the developer community.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">📍</span>
                <span className="text-gray-300">Your City, Country</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-400">💼</span>
                <span className="text-gray-300">Open to opportunities</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center card-hover">
              <h3 className="text-3xl font-bold text-gradient mb-2">3+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center card-hover">
              <h3 className="text-3xl font-bold text-gradient mb-2">50+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center card-hover">
              <h3 className="text-3xl font-bold text-gradient mb-2">30+</h3>
              <p className="text-gray-400">Happy Clients</p>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center card-hover">
              <h3 className="text-3xl font-bold text-gradient mb-2">10+</h3>
              <p className="text-gray-400">Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
