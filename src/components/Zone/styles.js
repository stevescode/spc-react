import styled from "styled-components";

export const ZoneStyle = styled.div`
  //background-color: #ccc;
  padding: 1em;
  margin: 0 0 1em 0;
  border-radius: 0.5em;
  border: 6px solid ${props => props.bgColor || "palevioletred"};
  transition : border 700ms ease-out;
}`

export const ZoneName = styled.h2`
  font-weight:bold;
  font-size: 18px;
}`

export const Gap = styled.h3`
  font-weight:bold;
  font-size: 18px;
}`