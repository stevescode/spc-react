const environment = process.env.REACT_APP_ENV || 'STAGING';

const config = {
  STAGING: {
    WEBSOCKET_IP: '127.0.0.1',
    WEBSOCKET_PORT: '8999',
  },
  PRODUCTION: {
    WEBSOCKET_IP: '192.168.100.123',
    WEBSOCKET_PORT: '8088/ws/spc',
  },
};

export default config[environment];