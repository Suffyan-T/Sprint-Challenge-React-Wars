import React from "react";
import styled from "styled-components";

const BirthYearStyle = styled.h3`
color: white;
`;

export default function BirthYear(props) {
  return <BirthYearStyle>BirthYear: {props.birthyear}</BirthYearStyle>;
}
