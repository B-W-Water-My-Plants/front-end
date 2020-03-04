import React from "react";

import styled from "styled-components";

import {useSelector} from 'react-redux';


const Plants = styled.div`
font-size:18px;
  border:1px solid black;
  text-align:center;
  border-radius:10px;
  padding:5px;
  margin: 15px;
  color:black;
  background:#E8DEBD;
  padding:2%;
`;

export default function PlantCard() {

    const plants = useSelector(state => state.plantList);

    return (
        <Plants>
            <h2>{plants.plants}</h2>
            <p>Nickname: {plants.nickname}</p>
            <p>Species: {plants.species}</p>
            <p>H2o Frequency: {plants.h2o}</p>
        </Plants>
    )
}