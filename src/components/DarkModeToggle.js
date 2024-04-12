// DarkModeToggle.js
import React, { useContext } from 'react';
import { DarkModeContext } from '../utils/DarkModeContext';

const DarkModeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div   onClick={toggleDarkMode}>
      {isDarkMode ? <i className="bi bi-moon-stars-fill headLink_light"></i> : <i className="bi bi-brightness-high-fill headLink_dark"></i>}
    </div>
  );
};

export default DarkModeToggle;