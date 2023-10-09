import styled from "styled-components";

export const But = styled.button`
position: fixed;
bottom: 20px;
right: 20px;
background: ${props => props.theme.dark.mPrimary};
font-size: 14px;
font-weight: bold;
border: none;
border-radius: 8px;
padding: 6px 12px;
cursor: pointer;
transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;

&:hover {
  background-color: ${({ theme }) => theme.buttonBackgroundHover};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  opacity:0.95;
}

&:active {
}

&.dark {
  background: ${props => props.theme.dark.mPrimary};
  color: ${props => props.theme.dark.mText}
}

&.light {
  background: ${props => props.theme.light.mPrimary};
  color: ${props => props.theme.dark.mText}
}

`;