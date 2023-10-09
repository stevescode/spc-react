# SPC Motion Monitor
React based app for monitoring the status of zones in an [Vanderbilt SPC system](https://www.lundix.se/smarta-losningar/). Each zone is displayed with a counter showing when motion was last detected.

(https://raw.githubusercontent.com/stevescode/spc-react/main/sample.png)

## Pre-reqs
Lindux Gateway

## Local testing with dummy data
A dummy websocket server is provided in `src/websocket-server/server.js`

Create a `.env` file in the root directory with the following configuration:

```javascript
REACT_APP_ENV=STAGING
REACT_APP_STAGING_WEBSOCKET_IP='127.0.0.1'
REACT_APP_STAGING_WEBSOCKET_PORT='8999'
REACT_APP_PRODUCTION_WEBSOCKET_IP=IP-OF-YOUR-LINDUX-GATEWAY
REACT_APP_PRODUCTION_WEBSOCKET_PORT='8088/ws/spc'
```

Set `REACT_APP_ENV` to `STAGING` to point the react app to the dummy websocket server. Set `REACT_APP_ENV` to `PRODUCTION` to point to your Lindux Gateway.

## Configuration
You'll need to add your zones configuration to the `src/config/zones.js` file.

Visit the following URL: `http://<LINDUX GATEWAY IP>:8088/spc/zone` and save the response within the `responseData` const in `src/config/zones.js`

## Running
From the root directory

`npm start`