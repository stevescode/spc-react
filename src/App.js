import { Zone } from "./components/Zone";
import React, { useState, useEffect } from 'react';
import { wsclient } from "./socket.config";

const A = () => {
  const [descriptionA, setDescriptionA] = useState(null);
  const [timestampA, setTimestampA] = useState(null);

  useEffect(() => {
    wsclient.onopen = () => {
    };
    
    wsclient.onmessage = (event) => {
          console.log(JSON.parse(event.data).data.sia.timestamp);
          setTimestampA(JSON.parse(event.data).data.sia.timestamp) 
        }
    
        wsclient.onerror = error => {
            console.log(`WebSocket error: ${error}`);
        };
    
        wsclient.onclose = () => {
            console.log("disconnected");
        }
    }, []);

    return timestampA
}

const B = () => {
  const [descriptionB, setDescriptionB] = useState(null);
  const [timestampB, setTimestampB] = useState(null);

  useEffect(() => {
    wsclient.onopen = () => {
    };
    
    wsclient.onmessage = (event) => {
          console.log(JSON.parse(event.data).data.sia.timestamp);
          setTimestampB(JSON.parse(event.data).data.sia.timestamp) 
        }
    
        wsclient.onerror = error => {
            console.log(`WebSocket error: ${error}`);
        };
    
        wsclient.onclose = () => {
            console.log("disconnected");
        }
    }, []);

    return timestampB
}

function App() {
  return (
    <>
    <Zone name="LOUNGE" />
    <A />
    <B />
    </>
  );
}

export default App;
