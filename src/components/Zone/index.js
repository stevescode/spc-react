import { useContext, useState, useEffect } from "react";
import { WebsocketContext } from "../../context/WebsocketProvider";

Date.prototype.toUnixTime = function() { return this.getTime()/1000|0 };
Date.time = function() { return new Date().toUnixTime(); }

export const Zone = ( {description, friendlyName}) => {
    //eslint-disable-next-line
    const [ready, val] = useContext(WebsocketContext);
    const [timestamp, setTimestamp] = useState(0);
    const [now, setNow] = useState(0);
    const [gap, setGap] = useState(0);
  
    useEffect(() => {
      if (val) {
        const currTime = Date.time();
        setNow(currTime);
        let msgTime = JSON.parse(val).data.sia.timestamp;

        if (JSON.parse(val).data.sia.description === description) {
          setTimestamp(msgTime);
          setGap(0);
        }
        else {
            setGap(currTime - timestamp);
        }
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [val]);
  
    return (
      <div>
        {friendlyName}, Last Hit: {timestamp}, Gap: {gap}
      </div>
    );
  };