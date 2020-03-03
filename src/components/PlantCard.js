import React from "react";
import styled from "styled-components";

const Plants = styled.div`
font-size:18px;
  border:1px solid black;
  text-align:center;
  border-radius:10px;
  padding:5px;
  margin: 15px;
  color:black;
  background #E8DEBD;
  padding:2%;
`;

export default function PlantCard(props) {
    return (
        <Plants>
            <h2>{props.plants}</h2>
            <p>Nickname: {props.species}</p>
            <p>Species: {props.species}</p>
            <p>H2o Frequency: {props.h2o_frequency}</p>
            <p>Species: {props.species}</p>
            <img src={props.image} alt="plant pic" />
        </Plants>
    )
}
