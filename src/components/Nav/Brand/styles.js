import styled from 'styled-components';

export const BrandStyles = styled.div`
font-size:24px;
font-weight:bold;
display: flex;
align-items: center; /* Align items vertically in the center */

&.dark {
  color: ${props => props.theme.dark.clockText};
}

&.light {
  color: ${props => props.theme.light.clockText};
}
`;