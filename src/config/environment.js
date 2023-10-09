const ENVIRONMENT = process.env.REACT_APP_ENV || 'STAGING';
const STAGING_WEBSOCKET_IP = process.env.REACT_APP_STAGING_WEBSOCKET_IP;
const STAGING_WEBSOCKET_PORT = process.env.REACT_APP_STAGING_WEBSOCKET_PORT;
const PRODUCTION_WEBSOCKET_IP = process.env.REACT_APP_PRODUCTION_WEBSOCKET_IP;
const PRODUCTION_WEBSOCKET_PORT = process.env.REACT_APP_PRODUCTION_WEBSOCKET_PORT;

const config = {
  STAGING: {
    WEBSOCKET_IP: STAGING_WEBSOCKET_IP,
    WEBSOCKET_PORT: STAGING_WEBSOCKET_PORT,
  },
  PRODUCTION: {
    WEBSOCKET_IP: PRODUCTION_WEBSOCKET_IP,
    WEBSOCKET_PORT: PRODUCTION_WEBSOCKET_PORT,
  },
};

export default config[ENVIRONMENT];