import { useContext, useState, useEffect } from "react";
import { WebsocketContext } from "../../context/WebsocketProvider";
import Alert from 'react-bootstrap/Alert';
import { Container } from "./styles";
import Emoji from "../Emoji";


export const Raw = () => {
    const [ready, val] = useContext(WebsocketContext);
    const [zone, setZone] = useState(0);
    const [timestamp, setTimestamp] = useState(0);
    const [cleanTimestamp, setCleanTimestamp] = useState(0);
  
    useEffect(() => {
      if (val) {
        setZone(JSON.parse(val).data.sia.description);
        setTimestamp(JSON.parse(val).data.sia.timestamp);
        const d = new Date(timestamp*1000);
        // Careful, the string output here can vary by implementation...
        const strDate = d.toLocaleString();
        setCleanTimestamp(strDate);

    }
    }, [val]);
  
    return (
      <Container> 
        <Alert key="dark" variant="dark">
          <Emoji symbol="💌 " label="message"/>
           Latest Websocket Message: <b>{zone}</b> received at: <b>{cleanTimestamp}</b>
        </Alert>
      </Container>
    );
  };