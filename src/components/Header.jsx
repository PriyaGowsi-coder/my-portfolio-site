import React from 'react';

const Header = ({ setActiveSection }) => {
  return (
    <header className="w-full flex items-center justify-between p-6 bg-white shadow-md">
      <div className="flex flex-col">
        <div className="flex items-baseline gap-2">
          <h1 className="text-2xl font-bold text-gray-900">Portfolio</h1>
          <p className="text-sm text-gray-600">Priyanka.G</p>
        </div>
      </div>
      <nav className="flex gap-6">
        <button
          onClick={() => setActiveSection('home')}
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Home
        </button>
        <button
          onClick={() => setActiveSection('projects')}
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Projects
        </button>
        <a
  href="/resume/Priyanka_Resume.pdf"
  download
  className="text-gray-700 hover:text-blue-600 transition"
>
  Resume
</a>
   
        <button
          onClick={() => setActiveSection('contact')}
          className="text-gray-700 hover:text-blue-600 transition"
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
