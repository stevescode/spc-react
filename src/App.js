import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

import { WebsocketProvider } from "./context/WebsocketProvider";
import { Header } from "./components/Header";
import { Zone } from "./components/Zone";
import { Raw } from "./components/Raw";

function App() {
  return (
    <>
    <Container>
      <Header />
      <WebsocketProvider>
        <Raw />
         <Stack direction="horizontal" gap={3}>
          <Zone description="Lounge¦ZONE¦2¦GROUND FLOOR" friendlyName="Lounge" />
          <Zone description="Bedroom¦ZONE¦2¦FIRST FLOOR" friendlyName="Bedroom" />
          <Zone description="Downstairs Landing¦ZONE¦2¦GROUND FLOOR" friendlyName="Downstairs Landing" />
        </Stack>
      </WebsocketProvider>
    </Container>
    </>
  )
}

export default App;
