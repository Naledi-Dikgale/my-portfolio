import React, { useEffect, useRef } from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-4 text-white font-lobster text-xl">
      <div>
        <p>&copy; Naledi Dikgale {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;