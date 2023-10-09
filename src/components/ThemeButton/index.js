import React from 'react';
import { useTheme } from '../../context/ThemeProvider';
import { But } from "./styles"


const ThemeButton = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const { theme } = useTheme();

  return (
    <But onClick={toggleTheme} theme={theme} className={`${isDarkTheme ? 'dark' : 'light'}`}>
      {isDarkTheme ? <span>Light mode</span> : <span>Dark Mode</span>}
    </But>
  );
};

export default ThemeButton;
