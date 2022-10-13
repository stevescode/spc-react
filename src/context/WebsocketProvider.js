// https://www.kianmusser.com/articles/react-where-put-websocket/
import React, { useState, useEffect, useRef, createContext } from 'react';

export const WebsocketContext = createContext(false, null);
//                                            ready, value

// STAGING
 const WEBSOCKET_IP = "127.0.0.1";
 const WEBSOCKET_PORT= "8999";

// PRODUCTION
// const WEBSOCKET_IP = "192.168.100.123";
// const WEBSOCKET_PORT= "8088/ws/spc";

export const WebsocketProvider = ({ children }) => {
    const [isReady, setIsReady] = useState(false);
    const [val, setVal] = useState(null);
  
    const ws = useRef(null);
  
    useEffect(() => {
      const socket = new WebSocket('ws://'+WEBSOCKET_IP+':'+WEBSOCKET_PORT);
  
      socket.onopen = () => setIsReady(true);
      socket.onclose = () => setIsReady(false);
      socket.onmessage = (msg) => setVal(msg.data);
  
      ws.current = socket;
  
      return () => {
        socket.close();
      };
    }, []);
  
    const ret = [isReady, val];
    
    return (
      <WebsocketContext.Provider value={ret}>
        {children}
      </WebsocketContext.Provider>
    );
  };