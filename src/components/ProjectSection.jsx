import React from 'react';

const experiences = [
  {
    year: '2035–2035',
    company: 'WISBOOM',
    role: 'Associate Design Director',
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click 'Edit Text' or double click me to add your own content and make changes to the font.",
  },
  {
    year: '2035–2035',
    company: 'Hop!',
    role: 'Creative Design Lead',
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click 'Edit Text' or double click me to add your own content and make changes to the font.",
  },
  {
    year: '2035–2035',
    company: 'Future Inc.',
    role: 'Product Strategist',
    description:
      "Another placeholder for the future — showcasing career milestones with clarity and structure.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-16 px-4 text-gray-900">
      <h2 className="text-3xl font-bold mb-16 text-center">Experience</h2>
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600"></div>

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`mb-16 flex flex-col md:flex-row ${
                isLeft ? '' : 'md:flex-row-reverse'
              } items-center justify-between relative`}
            >
              <div className="w-full md:w-1/2 px-4">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <p className="text-blue-600 font-semibold mb-1">{exp.year}</p>
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <p className="italic text-sm text-gray-600">{exp.role}</p>
                  <p className="mt-2 text-gray-700">{exp.description}</p>
                </div>
              </div>

              {/* Dot on the timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white z-10"></div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
