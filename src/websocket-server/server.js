const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();

// initialize a simple http server
const server = http.createServer(app);

// initialize the WebSocket server instance
const wss = new WebSocket.Server({ server });

Date.prototype.toUnixTime = function() { return this.getTime()/1000|0 };
Date.time = function() { return new Date().toUnixTime(); }

// Generate random int between 2 ints
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const motionMessageArr = [
    {"status":"success","data":{"sia":{"device_id":"1000","timestamp":"XXX","sia_code":"ZC","sia_address":"7","description":"Lounge¦ZONE¦1¦GROUND FLOOR","flags":"","verification_id":"0"}}},
    {"status":"success","data":{"sia":{"device_id":"1000","timestamp":"XXX","sia_code":"ZC","sia_address":"7","description":"Front Bedroom¦ZONE¦2¦FIRST FLOOR","flags":"","verification_id":"0"}}},
    {"status":"success","data":{"sia":{"device_id":"1000","timestamp":"XXX","sia_code":"ZC","sia_address":"7","description":"Nursery¦ZONE¦2¦FIRST FLOOR","flags":"","verification_id":"0"}}},
    {"status":"success","data":{"sia":{"device_id":"1000","timestamp":"XXX","sia_code":"ZC","sia_address":"7","description":"Kitchen Right¦ZONE¦1¦GROUND FLOOR","flags":"","verification_id":"0"}}},
    {"status":"success","data":{"sia":{"device_id":"1000","timestamp":"XXX","sia_code":"ZC","sia_address":"7","description":"Kitchen Left¦ZONE¦1¦GROUND FLOOR","flags":"","verification_id":"0"}}},
    {"status":"success","data":{"sia":{"device_id":"1000","timestamp":"XXX","sia_code":"ZC","sia_address":"7","description":"Downstairs Hall¦ZONE¦1¦GROUND FLOOR","flags":"","verification_id":"0"}}},
    {"status":"success","data":{"sia":{"device_id":"1000","timestamp":"XXX","sia_code":"ZC","sia_address":"7","description":"Upstairs Landing¦ZONE¦2¦FIRST FLOOR","flags":"","verification_id":"0"}}},
    {"status":"success","data":{"sia":{"device_id":"1000","timestamp":"XXX","sia_code":"ZC","sia_address":"7","description":"Garage¦ZONE¦1¦GROUND FLOOR","flags":"","verification_id":"0"}}}
];

function pickRandomMsg(msgArr) {
    return msgArr[randomIntFromInterval(0, msgArr.length-1)];
}

wss.on('connection', (ws) => {
    
    setInterval(() => {
        const msg = JSON.stringify(pickRandomMsg(motionMessageArr));
        const msgNow = msg.replace("XXX", Date.time());
        ws.send(msgNow);
        console.log(msg);
    }, 10000);
});

//start our server
server.listen(process.env.PORT || 8999, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});