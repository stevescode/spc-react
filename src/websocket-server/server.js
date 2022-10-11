const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

// initialize a simple http server
const server = http.createServer(app);

// initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

// Send Message function
const sendMsg = (msg, ws) => {
    ws.send(msg);
    console.log('Send Message: ' + msg);
}

wss.on('connection', (ws) => {
    // Sample motion message
    const motionObject = {"status":"success","data":{"sia":{"device_id":"1000","timestamp":"1665517641","sia_code":"ZC","sia_address":"7","description":"Upstairs Landing¦ZONE¦2¦FIRST FLOOR","flags":"","verification_id":"0"}}};

    setInterval(() => {
        const msg = JSON.stringify(motionObject);
        ws.send(msg);
        console.log('Send Message: ' + msg);
    }, 4000);

    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {

        //log the received message and send it back to the client
        console.log('received: %s', message);
        ws.send(`Hello, you sent -> ${message}`);
    });

    //send immediatly a feedback to the incoming connection    
    ws.send('Hi there, I am a WebSocket server');
});

//start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});