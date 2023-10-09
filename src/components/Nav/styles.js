import styled from "styled-components";
import OriginalContainer from 'react-bootstrap/Container';

export const Header = styled.div`
    &.dark {
        color: ${props => props.theme.dark.navText};
        background: ${props => props.theme.dark.navBackground};
        border-bottom: 1px dashed #1F1F1F;
    }
  
      &.light {
        color: ${props => props.theme.light.navText};
        background: ${props => props.theme.light.navBackground};
        border-bottom: 1px dashed #CCCCCC;
    }
`
export const NavContainer = styled(OriginalContainer)`
  &&& {
    /* Other styles as needed */
    display: flex;
    justify-content: space-between;
  }
`;

export const ClockContainer = styled.div`
  /* Add any additional styles for Clock container if needed */
`;