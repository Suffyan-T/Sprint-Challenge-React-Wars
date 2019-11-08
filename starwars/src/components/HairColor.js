import React from "react";
import styled from "styled-components";

const HairColorStyle = styled.h3`
  color: white;
`;

export default function HairColor(props) {
  return <HairColorStyle>Hair Color: {props.haircolor}</HairColorStyle>;
}