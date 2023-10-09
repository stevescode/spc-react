import React, { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import { WebsocketContext } from '../../../context/WebsocketProvider';
import { StyledWebsocketStatus } from './styles';

const WebsocketStatus = () => {
  const [isReady] = useContext(WebsocketContext);

  return (
    <StyledWebsocketStatus>
      {isReady ? (
      <Badge bg="success">Connected</Badge>
      ) : (
        <Badge bg="danger">Disconnected</Badge>
        )}
      {/* Display other content based on the WebSocket connection status */}

      </StyledWebsocketStatus>
  );
};

export default WebsocketStatus;