import { useTheme } from '../../../context/ThemeProvider';
import { Link } from 'react-router-dom';
import { LinksStyles } from './styles';


export const Links = () => {
  const { isDarkTheme } = useTheme();
  const { theme } = useTheme();
  
  return (
    <LinksStyles className={`${isDarkTheme ? 'dark' : 'light'}`} theme={theme}>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/zones-config">Zones Config</Link></li>
    </ul>
  </LinksStyles>
  );
}
export default Links;