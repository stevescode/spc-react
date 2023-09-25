import styled from "styled-components";

import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    display: flex;
    justify-content: center;
    padding: 1.5em;
    margin: 0.5em 10em;
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;
export const lightTheme = {
  backgroundColor: '#121723',
  color:'white'
};

export const darkTheme = {
  backgroundColor: 'white',
  color:'black'
};


export const ZoneContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #121723;
  color:white;
  padding: 1.5em;
  margin: 0.5em 10em;
`