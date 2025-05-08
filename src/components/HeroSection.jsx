import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full flex flex-row items-center justify-center gap-12 p-8">
      {/* Left: Photo */}
      <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg flex-shrink-0">
        <img
          src="/images/hero.jpg"
          alt="Priyanka"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Name and About Me */}
      <div className="max-w-xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-1">Hello</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          I'm Priyanka Gowsigan
        </h2>
        <p className="text-gray-500 italic">A bit about me</p>
        <p className="text-gray-700 mb-2">
          I'm a passionate software engineer with a strong interest in frontend development,
          clean code, and creating intuitive user experiences. Open to relocating to Singapore
          and ready to tackle new challenges.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
