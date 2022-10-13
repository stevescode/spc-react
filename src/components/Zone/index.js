import { useContext, useState, useEffect } from "react";
import { WebsocketContext } from "../../context/WebsocketProvider";
import { ZoneStyle, ZoneName, Gap } from "./styles"

Date.prototype.toUnixTime = function() { return this.getTime()/1000|0 };
Date.time = function() { return new Date().toUnixTime(); }

export const Zone = ( {description, friendlyName}) => {
    //eslint-disable-next-line
    const [ready, val] = useContext(WebsocketContext);
    const [messageTimestamp, setMessageTimestamp] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState("green");
    const [nowEpoch, setNowEpoch] = useState(Math.floor(Date.now() / 1000));
  
    useEffect(() => {
      if (val) {
        if (JSON.parse(val).data.sia.description === description) {
          //let msgTime = JSON.parse(val).data.sia.timestamp;
          let msgTime = Math.floor(Date.now() / 1000); // using local time to avoid timesync issues
          setMessageTimestamp(msgTime);
          setBackgroundColor("rgb(210,34,45)"); //red
        }
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [val]);

    function refreshClock() {
      setNowEpoch(Math.floor(Date.now() / 1000));
    }
    useEffect(() => {
      const timerId = setInterval(refreshClock, 3000);
      if (nowEpoch - messageTimestamp >= 30) {
        setBackgroundColor("rgb(35,136,35)"); //green
      }
      else if (nowEpoch - messageTimestamp <=20 && nowEpoch - messageTimestamp >=10){
        setBackgroundColor("rgb(255,191,0)"); //amber
      }
      return function cleanup() {
        clearInterval(timerId);
      };
    }, [nowEpoch]);

    const sinceLastMsg = (messageTimestamp, nowEpoch) => {
      const gap = (messageTimestamp - nowEpoch)*-1;

      if (gap > 1660000000) {
        return "no motion";
      }
      else {
        return gap + " seconds ago";
      }
    }
  
    return (
      <div>
        <ZoneStyle bgColor={backgroundColor}>
          <ZoneName>{friendlyName}</ZoneName>
          <Gap>{sinceLastMsg(messageTimestamp, nowEpoch)}</Gap>
        </ZoneStyle>
      </div>
    );
  };