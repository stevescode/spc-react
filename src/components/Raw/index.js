import { useContext, useState, useEffect } from "react";
import { WebsocketContext } from "../../context/WebsocketProvider";
import Alert from 'react-bootstrap/Alert';
import { Container } from "./styles";
import Emoji from "../Emoji";

export const Raw = () => {
  const [ready, val] = useContext(WebsocketContext);
  const [zone, setZone] = useState("");
  const [cleanTimestamp, setCleanTimestamp] = useState("");

  useEffect(() => {
    if (ready && val) {
      const { description, timestamp } = JSON.parse(val).data.sia;
      const firstWord = description.split('¦')[0]; // Split and get the first part
      setZone(firstWord);

      const d = new Date(timestamp * 1000);
      const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
      const strDate = d.toLocaleString(undefined, options);
      setCleanTimestamp(strDate);
    }
  }, [ready, val]);

  return (
    <Container>
      <Alert key="dark" variant="dark">
        <Emoji symbol="💌 " label="message"/>
         Latest Websocket Message: <b>{zone}</b> received at: <b>{cleanTimestamp}</b>
      </Alert>
    </Container>
  );
};
