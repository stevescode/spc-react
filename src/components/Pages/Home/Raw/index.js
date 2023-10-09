import { useContext, useState, useEffect } from "react";
import { WebsocketContext } from "../../../../context/WebsocketProvider";
import { RawContainer } from "./styles";
import { useTheme } from "../../../../context/ThemeProvider";
import config from '../../../../config/environment';

const { WEBSOCKET_IP, WEBSOCKET_PORT } = config; // Use the configuration

export const Raw = () => {
  const [ready, val] = useContext(WebsocketContext);
  const [zone, setZone] = useState("");
  const [cleanTimestamp, setCleanTimestamp] = useState("");
  const [valCount, setValCount] = useState(0);
  const { isDarkTheme } = useTheme();
  const { theme } = useTheme();

  useEffect(() => {
    if (ready && val) {
      const { description, timestamp } = JSON.parse(val).data.sia;
      const firstWord = description.split('¦')[0]; // Split and get the first part
      setZone(firstWord);

      const d = new Date(timestamp * 1000);
      const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
      const strDate = d.toLocaleString(undefined, options);
      setCleanTimestamp(strDate);

      setValCount(v => v + 1);
    }
  }, [ready, val]);

  return (
    <>
    {zone ? (
      // Display zone-related content when zone is set
      <RawContainer className={`${isDarkTheme ? 'dark' : 'light'}`} theme={theme}>
        <pre>Last motion detected in <b>{zone}</b> at <b>{cleanTimestamp}</b>. Total motion events since load <b>{ valCount }</b></pre>
      </RawContainer>
    ) : (
      // Display a message when zone is not set
      <RawContainer className={`${isDarkTheme ? 'dark' : 'light'}`} theme={theme}>
        <pre>Waiting for first Websocket message from {WEBSOCKET_IP}:{WEBSOCKET_PORT}</pre>
      </RawContainer>
    )}
  </>
  );
};
