import React, { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection';
import ExperienceSection from './components/ExperienceSection'; // ⬅️ Add this line
import Footer from './components/Footer';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <Header setActiveSection={setActiveSection} />

      {/* Main content */}
      <main className="flex-grow px-4 py-10 sm:px-6 lg:px-24 bg-gray-50">
        {activeSection === 'home' && (
          <section id="home" className="space-y-16">
            <HeroSection />
            <ExperienceSection /> {/* ⬅️ Add Experience right after Hero */}
          </section>
        )}

        {activeSection === 'projects' && (
          <section id="projects" className="space-y-16">
            <ProjectSection />
          </section>
        )}

        {activeSection === 'contact' && (
          <section id="contact" className="space-y-16">
            <HeroSection />
            {/* Replace or add ContactSection here later */}
          </section>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
