export const responseData = {
  "status": "success",
  "data": {
    "zone": [
      {"id": "1", "type": "0", "zone_name": "Lounge", "area": "1", "area_name": "GROUND FLOOR", "input": "0", "logic_input": "0", "status": "0", "proc_state": "0", "inhibit_allowed": "1", "isolate_allowed": "1"},
      {"id": "2", "type": "0", "zone_name": "Front Bedroom", "area": "2", "area_name": "FIRST FLOOR", "input": "0", "logic_input": "0", "status": "0", "proc_state": "0", "inhibit_allowed": "1", "isolate_allowed": "1"},
      {"id": "3", "type": "0", "zone_name": "Nursery", "area": "2", "area_name": "FIRST FLOOR", "input": "0", "logic_input": "0", "status": "0", "proc_state": "0", "inhibit_allowed": "1", "isolate_allowed": "1"},
      {"id": "4", "type": "0", "zone_name": "Kitchen Right", "area": "1", "area_name": "GROUND FLOOR", "input": "0", "logic_input": "0", "status": "0", "proc_state": "0", "inhibit_allowed": "1", "isolate_allowed": "1"},
      {"id": "5", "type": "0", "zone_name": "Kitchen Left", "area": "1", "area_name": "GROUND FLOOR", "input": "0", "logic_input": "0", "status": "0", "proc_state": "0", "inhibit_allowed": "1", "isolate_allowed": "1"},
      {"id": "6", "type": "0", "zone_name": "Downstairs Hall", "area": "1", "area_name": "GROUND FLOOR", "input": "0", "logic_input": "0", "status": "0", "proc_state": "0", "inhibit_allowed": "1", "isolate_allowed": "1"},
      {"id": "7", "type": "0", "zone_name": "Upstairs Landing", "area": "2", "area_name": "FIRST FLOOR", "input": "0", "logic_input": "0", "status": "0", "proc_state": "0", "inhibit_allowed": "1", "isolate_allowed": "1"},
      {"id": "8", "type": "0", "zone_name": "Garage", "area": "1", "area_name": "GROUND FLOOR", "input": "0", "logic_input": "0", "status": "0", "proc_state": "0", "inhibit_allowed": "1", "isolate_allowed": "1"}
    ]
  }
};

const zones = responseData.data.zone.map(zone => {
  const description = `${zone.zone_name}¦ZONE¦${zone.area}¦${zone.area_name}`;
  const friendlyName = zone.zone_name;
  return { description, friendlyName };
});

export default zones;
