import React from "react";
import styled from "styled-components";

const EyeColorStyle = styled.h3`
  color: white;
`;

export default function EyeColor(props) {
  return <EyeColorStyle>EyeColor: {props.eyecolor}</EyeColorStyle>;
}