import { useTheme } from '../../context/ThemeProvider';
import Navbar from 'react-bootstrap/Navbar';
import Clock from './Clock';
import { Header, NavContainer, ClockContainer } from "./styles";
import { Brand } from './Brand';
import Links from './Links';

function Nav() {
  const { isDarkTheme } = useTheme();
  const { theme } = useTheme();

  return (
    <Header className={`${isDarkTheme ? 'dark' : 'light'}`} theme={theme}>
      <Navbar className={`${isDarkTheme ? 'dark' : 'light'}`} theme={theme}>
        <NavContainer className={`${isDarkTheme ? 'dark' : 'light'}`} theme={theme}>
          <div>
            <Brand />
            <Links />
          </div>
          <ClockContainer>
            <Clock />
          </ClockContainer>
        </NavContainer>
      </Navbar>
    </Header>
  );
}

export default Nav;