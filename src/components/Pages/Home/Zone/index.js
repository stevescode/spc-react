import { useContext, useState, useEffect } from "react";
import { ZoneStyle, ZoneName, Gap } from "./styles"
import { WebsocketContext } from "../../../../context/WebsocketProvider";
import { useTheme } from "../../../../context/ThemeProvider";

//Date.prototype.toUnixTime = function() { return this.getTime()/1000|0 };
//Date.time = function() { return new Date().toUnixTime(); }

const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * 60;
const SECONDS_IN_DAY = SECONDS_IN_HOUR * 24;

export const Zone = ( {description, friendlyName }) => {
    //eslint-disable-next-line
    const [ready, val] = useContext(WebsocketContext);
    const [messageTimestamp, setMessageTimestamp] = useState(0);
    const [borderColor, setBorderColor] = useState("green");
    const [nowEpoch, setNowEpoch] = useState(Math.floor(Date.now() / 1000));
    const { isDarkTheme } = useTheme();
    const { theme } = useTheme();
  
    useEffect(() => {
      if (val) {
        if (JSON.parse(val).data.sia.description === description) {
          //let msgTime = JSON.parse(val).data.sia.timestamp;
          let msgTime = Math.floor(Date.now() / 1000); // using local time to avoid timesync issues
          setMessageTimestamp(msgTime);
          setBorderColor("rgb(210,34,45)"); //red
        }
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [val]);

    function refreshClock() {
      setNowEpoch(Math.floor(Date.now() / 1000));
    }
    useEffect(() => {
      const timerId = setInterval(refreshClock, 1000);
      if (nowEpoch - messageTimestamp >= 30) {
        setBorderColor("rgb(35,136,35)"); //green
      }
      else if (nowEpoch - messageTimestamp <=20 && nowEpoch - messageTimestamp >=10){
        setBorderColor("rgb(255,191,0)"); //amber
      }
      return function cleanup() {
        clearInterval(timerId);
      };
    }, [nowEpoch, messageTimestamp]);

    const sinceLastMsg = (messageTimestamp, nowEpoch) => {
      const gap = nowEpoch - messageTimestamp;

      if (gap > SECONDS_IN_DAY) {
        return "no motion";
      } else {
        // Temporary fix below - need to id why I'm getting -1h -1m -1s sometimes.
        let adjustedGap = gap+1;
        const secondsAgo = adjustedGap % SECONDS_IN_MINUTE;
        const minutesAgo = Math.floor(adjustedGap / SECONDS_IN_MINUTE) % SECONDS_IN_MINUTE;
        const hoursAgo = Math.floor(adjustedGap / SECONDS_IN_HOUR) % SECONDS_IN_HOUR;
        return `${hoursAgo}h ${minutesAgo}m ${secondsAgo}s ago`;
      }
    }
  
    return (
      <div>
        <ZoneStyle border={borderColor} className={`${isDarkTheme ? 'dark' : 'light'}`} theme={theme}>
          <ZoneName className={`${isDarkTheme ? 'dark' : 'light'}`} theme={theme}>{friendlyName}</ZoneName>
          <Gap className={`${isDarkTheme ? 'dark' : 'light'}`} theme={theme}>{sinceLastMsg(messageTimestamp, nowEpoch)}</Gap>
        </ZoneStyle>
      </div>
    );
  };