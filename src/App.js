import React from 'react';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import zones from './config/zones';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './styles/theme';

import { WebsocketProvider } from "./context/WebsocketProvider";
import { Header } from "./components/Header";
import { Zone } from "./components/Zone";
import { Raw } from "./components/Raw";
import Clock from './components/Clock';

const App = () => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");
  return (
  <>  
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <GlobalStyles />
        <button onClick={toggleTheme}>
          {isDarkTheme ? <span>Light mode</span> : <span>Dark Mode</span>}
        </button>
    <WebsocketProvider>
    <Container>
      <Header />
      <Clock />
        <Raw />
        <Row>
            {zones.map((zone, index) => (
              <Col lg={3} md={6} key={index}>
                <Zone description={zone.description} friendlyName={zone.friendlyName} />
              </Col>
            ))}
          </Row>
    </Container>
    </WebsocketProvider>
    </ThemeProvider>
    </>
  )
}

export default App;
