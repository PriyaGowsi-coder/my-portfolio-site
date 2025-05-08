import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-6 text-center">
         <h2 className="text-2xl font-bold mb-2">Contact</h2>
      <p className="text-gray-300 mb-6">Looking forward to hearing from you</p>

      <div className="flex flex-row flex-wrap justify-center items-center gap-6 text-gray-400 text-sm">
        <p>📞 123-456-7890</p>
        <p>✉️ info@mysite.com</p>
        <p>&copy; {new Date().getFullYear()} Priyanka Gowsigan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
