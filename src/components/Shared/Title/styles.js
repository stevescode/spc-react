import styled from "styled-components";

export const TitleStyles = styled.div`
font-size:24px;
font-weight:bold;
margin-bottom:20px;

&.dark {
  color: ${props => props.theme.dark.mText}
}

&.light {
  color: ${props => props.theme.light.mText}
}

`;