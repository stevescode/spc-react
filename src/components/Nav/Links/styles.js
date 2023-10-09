import styled from 'styled-components';

export const LinksStyles = styled.div`
font-family: 'Orbitron', sans-serif;

&.dark li a {
  color: ${props => props.theme.dark.clockText};
}

&.light li a {
  color: ${props => props.theme.light.clockText};
}
ul {
    list-style: none;
    padding: 0;
    display: flex;
    align-items: center;
    margin:0;
}
li {
    margin: 0;
    padding: 10px;
    font-size: 12px;
    align-items: center;
}
li a {
    text-decoration: none;
}

ul li:first-child {
    padding-left: 0;
  }
`;