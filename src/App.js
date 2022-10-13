import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { WebsocketProvider } from "./context/WebsocketProvider";
import { Header } from "./components/Header";
import { Zone } from "./components/Zone";
import { Raw } from "./components/Raw";
import Clock from './components/Clock';

function App() {
  return (
    <>
    <Container>
      <Header />
      <Clock />
      <WebsocketProvider>
        <Raw />
         <Row>
          <Col lg={3} md={6}>
            <Zone description="Upstairs Landing¦ZONE¦2¦FIRST FLOOR" friendlyName="Upstairs Landing" />
          </Col>
          <Col lg={3} md={6}>
            <Zone description="Front Bedroom¦ZONE¦2¦FIRST FLOOR" friendlyName="Front Bedroom" />
          </Col>
          <Col lg={3} md={6}>
            <Zone description="Nursery¦ZONE¦2¦FIRST FLOOR" friendlyName="Nursery" />
          </Col>
          <Col lg={3} md={6}>
            <Zone description="Garage¦ZONE¦1¦GROUND FLOOR" friendlyName="Garage" />
          </Col>
        </Row>
        <Row>
          <Col lg={3} md={6}>
            <Zone description="Downstairs Hall¦ZONE¦1¦GROUND FLOOR" friendlyName="Downstairs Hall" />
          </Col>
          <Col lg={3} md={6}>
            <Zone description="Lounge¦ZONE¦1¦GROUND FLOOR" friendlyName="Lounge" />
          </Col>
          <Col lg={3} md={6}>
            <Zone description="Kitchen Left¦ZONE¦1¦GROUND FLOOR" friendlyName="Kitchen Left" />
          </Col>
          <Col lg={3} md={6}>
            <Zone description="Kitchen Right¦ZONE¦1¦GROUND FLOOR" friendlyName="Kitchen Right" />
          </Col>
        </Row>
      </WebsocketProvider>
    </Container>
    </>
  )
}

export default App;
