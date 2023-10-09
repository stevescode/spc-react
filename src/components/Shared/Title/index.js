import React from 'react';
import { useTheme } from '../../../context/ThemeProvider';
import { TitleStyles } from "./styles"

const Title = ({title}) => {
  const { isDarkTheme } = useTheme();
  const { theme } = useTheme();

  return (
    <>
        <TitleStyles theme={theme} className={`${isDarkTheme ? 'dark' : 'light'}`}>
            {title}
        </TitleStyles>
    </>
  );
};

export default Title;
