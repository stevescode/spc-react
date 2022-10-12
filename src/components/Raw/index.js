import { useContext, useState, useEffect } from "react";
import { WebsocketContext } from "../../context/WebsocketProvider";
import Alert from 'react-bootstrap/Alert';


export const Raw = () => {
    const [ready, val] = useContext(WebsocketContext);
    const [zone, setZone] = useState(0);
    const [timestamp, setTimestamp] = useState(0);
  
    useEffect(() => {
      if (val) {
        setZone(JSON.parse(val).data.sia.description);
        setTimestamp(JSON.parse(val).data.sia.timestamp);
    }
    }, [val]);

  
    return (
      <Alert key="info" variant="info">
        Area Hit: {zone} received at: {timestamp}
      </Alert>
    );
  };