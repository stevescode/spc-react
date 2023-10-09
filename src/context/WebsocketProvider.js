// https://www.kianmusser.com/articles/react-where-put-websocket/
import React, { useState, useEffect, useRef, createContext } from 'react';
import config from '../config/environment';

export const WebsocketContext = createContext(false, null);
//                                            ready, value
console.log(config);

const { WEBSOCKET_IP, WEBSOCKET_PORT } = config;


export const WebsocketProvider = ({ children }) => {
    const [isReady, setIsReady] = useState(false);
    const [val, setVal] = useState(null);
  
    const ws = useRef(null);
  
    useEffect(() => {
      const socket = new WebSocket('ws://'+WEBSOCKET_IP+':'+WEBSOCKET_PORT);
  
      socket.onopen = () => {
        console.log('WebSocket connection opened');
        setIsReady(true);
      };
    
      socket.onclose = () => {
        console.log('WebSocket connection closed');
        setIsReady(false);
      };
    
      socket.onmessage = (msg) => {
        //console.log('Received message:', msg.data);
        setVal(msg.data);
      };
    
      socket.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
  
      ws.current = socket;
  
      return () => {
        if (socket.readyState === WebSocket.OPEN) {
          socket.close();
        }
      };
    }, []);
  
    const ret = [isReady, val];
    
    return (
      <WebsocketContext.Provider value={ret}>
        {children}
      </WebsocketContext.Provider>
    );
  };