import styled from 'styled-components';

export const ClockStyle = styled.div`
font-family: 'Orbitron', sans-serif;
font-size: 28px;
text-align: right;
border-radius: 5px;

&.dark {
  color: ${props => props.theme.dark.clockText};
}

&.light {
  color: ${props => props.theme.light.clockText};
}
`;