import React from "react";

import styled from "styled-components";



const Plants = styled.div`
display: flex;
align-self: auto;
justify-content: space-around;
margin-top: 20px;
width: 60%;
margin: auto;
margin-top: 30px;
height: auto;

`;

export default function PlantCard(props) {



    return (
      
        
        <Plants >
            <div key={props.id}>
            <h2>{props.plants}</h2>
            <p>Nickname: {props.nickname}</p>
            <p>Species: {props.species}</p>
            <p>H2o Frequency: {props.h2o}</p>
            </div>
         
    
        </Plants>
        
      
        
    )


}