import { useTheme } from '../../../context/ThemeProvider';
import { BrandStyles } from './styles';
import WebsocketStatus from '../WebsocketStatus';

export const Brand = () => {
  const { isDarkTheme } = useTheme();
  const { theme } = useTheme();

  return (
    <BrandStyles className={`${isDarkTheme ? 'dark' : 'light'}`} theme={theme}>
        <div href="#" className="brand">SPC Zone Monitor</div>
        <WebsocketStatus />
    </BrandStyles>
  );
}

export default Brand;