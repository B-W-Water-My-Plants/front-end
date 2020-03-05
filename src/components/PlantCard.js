import React from "react";

import styled from "styled-components";



const Plants = styled.div`
    font-size: 1.5rem;
    border:2px solid #97C6A5;
    text-align:center;
    border-radius:10px;
    padding:5px;
    margin: 15px;
    margin-top: 20%;
    color:black;
    background:#E8DEBD;
    padding:2%;
`;

export default function PlantCard(props) {

 

    return (
      
        
        <Plants key={props.id}>
            <h2>{props.plants}</h2>
            <p>Nickname: {props.nickname}</p>
            <p>Species: {props.species}</p>
            <p>H2o Frequency: {props.h2o}</p>

         
    
        </Plants>
        
      
        
    )


}