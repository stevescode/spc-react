import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ThemeProvider } from './context/ThemeProvider';
import { WebsocketProvider } from "./context/WebsocketProvider";
import Nav from './components/Nav';
import Main from './components/Main';

console.log(process.env.REACT_APP_ENV);

const App = () => {
  return (
    <ThemeProvider>
      <WebsocketProvider>
        <Router>
          <Nav />
          <Main />
        </Router>
      </WebsocketProvider>
    </ThemeProvider>
  );
}

export default App;
