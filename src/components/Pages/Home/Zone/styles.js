import styled from "styled-components";

export const ZoneStyle = styled.div`
  padding: 1em;
  margin: 0 0 1em 0;
  border-radius: 0.5em;
  border: 4px solid ${props => props.border || "palevioletred"};
  transition: border 700ms ease-out;

  &.dark {
    background:  ${props => props.theme.dark.rawBackground};
    color:  ${props => props.theme.dark.mText};
  }

  &.light {
    background:  ${props => props.theme.light.rawBackground};
    color:  ${props => props.theme.light.mText};
  }
`;

export const ZoneName = styled.h2`
  font-size:14px;
  opacity:0.80;
`;

export const Gap = styled.h3`
  font-size:22px;

  &.dark {
    color:  ${props => props.theme.dark.mText};
  }

  &.light {
    color:  ${props => props.theme.light.mText};
  }
`;