import React from "react";
import styled from "styled-components";

const HeightStyle = styled.h3`
  color: white;
`;

export default function Height(props) {
  return <HeightStyle>Height: {props.height}</HeightStyle>;
}