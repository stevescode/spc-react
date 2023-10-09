import styled from 'styled-components';

export const ContentStyles = styled.div`
padding: 20px 0;
display: flex;
flex-flow: column;
height: 100%;

&.dark {
    background: ${props => props.theme.dark.mBackground};
}

&.light {
    background: ${props => props.theme.light.mBackground};
}
`;