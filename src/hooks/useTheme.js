import { useState, useEffect } from 'react';

export const useTheme = () => {
  // ✅ CHANGED 'night' to 'cupcake' to make the light theme the default
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'cupcake');

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'night' ? 'cupcake' : 'night'));
  };

  return [theme, toggleTheme];
};