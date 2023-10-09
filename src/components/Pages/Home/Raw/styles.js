import styled from "styled-components";

export const RawContainer = styled.div`
  padding: 16px;
  margin-bottom: 20px;
  display:block;
  background: white;
  color:  black;
  font-size:14px;
  border: 1px dashed #ccc;

  &.dark {
    color: ${props => props.theme.dark.rawText};
    background:  ${props => props.theme.dark.rawBackground};
    border: 1px solid ${props => props.theme.dark.rawBackground};
  }
  
  &.light {
    color: ${props => props.theme.light.rawText};
    background:  ${props => props.theme.light.rawBackground};
  }
`