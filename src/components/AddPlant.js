import React, { useState } from "react";
import Drawer from "./Drawer";
import styled from "styled-components";


import { useDispatch } from "react-redux";

import { addPlant } from "../store/actions";




// Form
const StyledContainer = styled.div`
    border:2px solid #97C6A5;
    text-align:center;
    border-radius:10px;
    padding:10px;
    margin-left 15px;
    margin-right 20px;
    margin-top: 20%;
    color:black;
    background:#E8DEBD;
    padding:2%;
`;

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 2%;
    padding-right: 5%;
    padding-bottom: 5%;
`;

const StyledH1 = styled.h1`
    font-size: 2rem;
    text-align: center;
    padding-left: 6%;
    padding-top: 3%;
    padding-bottom: 3%;
    color: black;
`;

const StyledInput = styled.input`
    width: 70%;
    border-radius: 4px;
    height: 25px;
`;

const StyledLIDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1%;
    align-items: flex-start;
`;

const Styledlabel = styled.label`
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    color: black;
`;

const StyledAddbtn = styled.button`
    color: black;
    background: #97C6A5;
    border: 1px solid #7D695F;
    font-size: 13px;
    border-radius: 3px;
    outline: none;
    padding: 10px 30px 10px 30px;
    margin-top: 10px;
    margin-right: 5px;
    margin-bottom: 15px;
    cursor: pointer;
`;

const StyledCancelbtn = styled.button`
    color: black;
    background: #97C6A5;
    border: 1px solid #7D695F;
    font-size: 13px;
    border-radius: 3px;
    outline: none;
    padding: 10px 25px 10px 25px;
    margin-top: 10px;
    margin-right: 5px;
    margin-bottom: 15px;
    cursor: pointer;
`;

const StyledBtnDiv = styled.div`
    margin-left: 115px;
`;


const AddPlant = props => {

    const dispatch =useDispatch();

    const [input, setInput] = useState({
        nickname: "",
        species: "",
        h2o_frequency: "",
        image: '',
    });

    // Form Handlers

    const inputHandler = event => {
        //add this
        event.preventDefault();
        setInput({ ...input, [event.target.name]: event.target.value });
        console.log(event.target.name)
    };

    const submitHandler = event => {

        event.preventDefault();
        dispatch(addPlant(input));
        setInput({ nickname: "", species: "", h2o_frequency: "", image:"" });
        console.log(input)
    };

    return (
      <>
      <Drawer />
        <StyledContainer>
            <form onSubmit={submitHandler} className="form">
                <StyledH1>Add Plant</StyledH1>

                <StyledInputContainer className="input-container">
                    {/* Name of plant input */}
                    <StyledLIDiv>
                        <Styledlabel htmlFor="nickname">Nickname: </Styledlabel> 
                        <StyledInput
                        type="text"
                        value={input.nickname}
                        onChange={(event)=> inputHandler(event)}
                        name="nickname"    
                        />
                        
                    </StyledLIDiv>

                    {/* Species of plant input */}
                    
                    <StyledLIDiv>
                        <Styledlabel htmlFor="species">Species: </Styledlabel>
                        <StyledInput
                            type="text"
                            value={input.species}
                            onChange={inputHandler}
                            name="species"
                        />

                    </StyledLIDiv>
                    {/* H2oFrequency of plant */}
                    <StyledLIDiv>
                        <Styledlabel htmlFor="h2o_frequency">H2o Frequency: </Styledlabel>
                        <StyledInput
                            type="text"
                            value={input.h2o_frequency}
                            onChange={inputHandler}
                            name="h2o_frequency"
                        />
                    </StyledLIDiv>
                </StyledInputContainer>
            </form>

            <StyledBtnDiv>
                <StyledCancelbtn>Cancel</StyledCancelbtn>
                <StyledAddbtn onClick={submitHandler}>Add</StyledAddbtn>
            </StyledBtnDiv>
        </StyledContainer>
        </>
    );

};

export default AddPlant;
