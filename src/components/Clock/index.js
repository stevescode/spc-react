import { useState, useEffect } from 'react';
import { ClockStyle } from './styles';
import Emoji from "../Emoji";

export const Clock = () => {
  const [date, setDate] = useState(new Date());
  
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <ClockStyle>
      <Emoji symbol="⏰ " label="clock"/>
      {date.toLocaleTimeString()}
    </ClockStyle>
  );
}
export default Clock;