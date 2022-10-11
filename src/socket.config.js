const WEBSOCKET_IP = "127.0.0.1";
const WEBSOCKET_PORT= "8999";

export const wsclient = new WebSocket('ws://'+WEBSOCKET_IP+':'+WEBSOCKET_PORT);
