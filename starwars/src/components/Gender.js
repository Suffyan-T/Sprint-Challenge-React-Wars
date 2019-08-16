import React from "react";
import styled from "styled-components";

const GenderStyle = styled.h3`
  color: white;
`;

export default function Gender(props) {
  return <GenderStyle>Gender: {props.gender}</GenderStyle>;
}