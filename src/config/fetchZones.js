/* THIS DOESN'T WORK BECAUSE IHATECORS */

import config from '../config/environment';

console.log(process.env.REACT_APP_ENV);

const HTTP_IP = config.WEBSOCKET_IP; // Use the configuration
const HTTP_PORT = '8088/spc/zone';

function fetchZones() {
    return new Promise((resolve, reject) => {
      fetch('http://'+HTTP_IP+':'+HTTP_PORT)
        .then(response => {
          // Check if the response is successful (status code 200)
          if (response.ok) {
            // Parse the JSON response
            return response.json();
          }
          // Handle non-200 response (error)
          throw new Error('Network response was not ok.');
        })
        .then(data => {
          // Process responseData or perform other operations here
          const zones = data.data.zone.map(zone => {
            const description = `${zone.zone_name}¦ZONE¦${zone.area}¦${zone.area_name}`;
            const friendlyName = zone.zone_name;
            return { description, friendlyName };
          });
          resolve(zones); // Resolve the promise with zones data
        })
        .catch(error => {
          // Handle errors that occurred during the fetch operation
          reject(error); // Reject the promise with the error
        });
    });
  }
  
  export default fetchZones;  