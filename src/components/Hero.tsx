export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
              <span className="text-4xl">🎬</span>
            </div>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I&apos;m{" "}
          <span className="text-gradient">Yuan Exequiel</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-8">
          Video Editor | Film Director | Multimedia Artist
        </p>

        <p className="text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
          Award-winning multimedia artist with expertise in video editing, film directing,
          and visual storytelling. Passionate about bringing creative visions to life
          through compelling visual narratives.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:opacity-90 transition-opacity duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-gray-500 rounded-full font-semibold hover:bg-slate-800 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>

        <div className="mt-16 flex justify-center space-x-6">
          <a
            href="https://www.youtube.com/@yuanexequiel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-red-500 transition-colors duration-200"
            aria-label="YouTube"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/yuan.evangelista"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
            aria-label="Facebook"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="mailto:yuanexequielevangelista03@gmail.com"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Email"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
