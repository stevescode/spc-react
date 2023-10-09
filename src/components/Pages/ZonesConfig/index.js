import { responseData } from '../../../config/zones';
import Title from '../../Shared/Title';

const ZonesConfig = () => {
  const res = responseData;

  return (
    <div>
      <Title title="Zones Config"/>
      {res ? (
        <pre>{JSON.stringify(res, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default ZonesConfig;
