import { Raw } from './Raw';
import { Zone } from './Zone';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import zones from '../../../config/zones'

export const Home = () => {  
  return (
    <>
          <Raw />
            <Row>
              {zones.map((zone, index) => (
                <Col lg={3} md={6} key={index}>
                  <Zone description={zone.description} friendlyName={zone.friendlyName} />
                </Col>
              ))}
            </Row>    
    </>
  );
}
export default Home;