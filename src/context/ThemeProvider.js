import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const theme = {
    light: {
      mPrimary: '#6200EE',
      mPrimaryVariant: '#3700BC',
      mSecondary: '#03DAC6',
      mSecondaryVariant: '#018786',
      mBackground: '#FFFFFF',
      mError: '#B00020',
      mText: '#000000',

      navBackground: '#FEFBFE',
      navText: 'black',

      clockText: 'black',
      rawBackground: '#FEFBFE',
      rawText: 'black',
    },
    dark: {
      mPrimary: '#BB86FC',
      mPrimaryVariant: '#3700BC',
      mSecondary: '#03DAC6',
      mSecondaryVariant: '#018786',
      mBackground: '#121212',
      mError: '#CF6679',
      mText: '#FFFFFF',

      navBackground: '#1F1F1F',
      navText: 'white',

      clockText: 'white',
      rawBackground: '#1F1F1F',
      rawText: 'white;',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme, isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};