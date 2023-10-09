import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { useTheme } from '../../context/ThemeProvider';

import { ContentStyles } from '../Pages/Home/styles';
import Home from '../Pages/Home';
import About from '../Pages/About';
import ThemeButton from '../ThemeButton';
import '../../global.css';
import ZonesConfig from '../Pages/ZonesConfig';

const Main = () => {
    const { isDarkTheme } = useTheme();
    const { theme } = useTheme();

  return (
    <>
      <ContentStyles className={`MainContent ${isDarkTheme ? 'dark' : 'light'}`} theme={theme}>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/zones-config" element={<ZonesConfig />} />
          </Routes>
          <ThemeButton />
        </Container>
      </ContentStyles>
    </>
  );
};

export default Main;
