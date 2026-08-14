import React, { createContext, useState } from 'react';

export const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [layout, setLayout] = useState('sidebar'); // 'sidebar' or 'topbar'

  const toggleLayout = () => {
    setLayout((prev) => (prev === 'sidebar' ? 'topbar' : 'sidebar'));
  };

  return (
    <LayoutContext.Provider value={{ layout, toggleLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};
