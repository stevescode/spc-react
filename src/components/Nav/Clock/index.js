import { useState, useEffect } from 'react';
import { useTheme } from '../../../context/ThemeProvider';
import { ClockStyle } from './styles';

export const Clock = () => {
  const [date, setDate] = useState(new Date());
  const { isDarkTheme } = useTheme();
  const { theme } = useTheme();
  
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
    <ClockStyle className={`${isDarkTheme ? 'dark' : 'light'}`} theme={theme}>
      {date.toLocaleTimeString()}
    </ClockStyle>
  );
}
export default Clock;