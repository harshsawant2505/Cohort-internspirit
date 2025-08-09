const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center px-6 pt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Hello, I'm <span className="text-gray-400">John Doe</span>
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed">
            Full-stack developer passionate about creating elegant solutions to complex problems. 
            I build modern web applications with clean code and intuitive design.
          </p>
          <div className="flex space-x-4">
            <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors">
              View Work
            </button>
            <button className="border border-gray-600 text-white px-6 py-3 rounded-lg hover:border-white transition-colors">
              Download CV
            </button>
          </div>
        </div>
        <div className="flex justify-center">
         <img className="w-[300px] rounded-xl" src="/images/deep.jpg" />
        </div>
      </div>
    </section>
  );
};


export default HeroSection 