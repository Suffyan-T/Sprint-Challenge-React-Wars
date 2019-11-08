import React from "react";
import CharacterGender from "./Gender";
import BirthYear from "./BirthYear";
import styled from "styled-components";
import CharacterEyeColor from "./EyeColor";
import CharacterHairColor from "./HairColor";
import Height from "./Height";

const StyledCards = styled.div`
  border: 5px solid #FFE81F;
  border-radius: 50px;
  width: 400px;
  margin: 20px;
  background: rgba(0, 0, 0, 0.8);
`;
const StyledNames = styled.h1`
  color: #FFE81F;
`;

export default function Card(props) {
  // console.log("card: props: ", props);
  return (
    <StyledCards>
      <StyledNames>{props.people.name}</StyledNames>
      <CharacterGender gender={props.people.gender} />
      <BirthYear birthyear={props.people.birth_year} />
      <CharacterHairColor haircolor={props.people.hair_color} />
      <CharacterEyeColor eyecolor={props.people.eye_color} />
      <Height height={props.people.height} />
    </StyledCards>
  );
}