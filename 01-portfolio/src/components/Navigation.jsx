const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">Portfolio</div>
        <ul className="flex space-x-8">
          <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
          <li><a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a></li>
          <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;