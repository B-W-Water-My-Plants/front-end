import React, { useState } from "react";

import styled from "styled-components";


import { useDispatch } from "react-redux";

import { addPlant } from "../store/actions";




const StyledContainer = styled.div`
    width: 475px;
    background-color: #E8DEBD;
    margin: 0 auto;
    border-radius: 15px;
    margin-top: 2.4%;
    margin-right: 5%;
    height: 600px;
`;

const StyledInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 2%;
    padding-right: 5%;
    padding-bottom: 5%;
`;

const StyledH1 = styled.h1`
    font-size: 1rem;
    text-align: left;
    padding-left: 6%;
    padding-top: 5%;
    padding-bottom: 3%;
    color: #198974;
  `;
const StyledInput = styled.input`
    width: 77%;
    border-radius: 4px;
    height: 20px;
  `;
const StyledLIDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1%;
    align-items: flex-end;
`;

const Styledlabel = styled.label`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    color: #7ea897;
`;

const StyledAddbtn = styled.button`
    color: white;
    background: #78c885;
    border: none;
    font-size: 13px;
    border-radius: 3px;
    outline: none;
    padding: 10px 30px 10px 30px;
    margin-top: 10px;
    margin-right: 5px;
    margin-bottom: 10px;
    cursor: pointer;
`;

const StyledCancelbtn = styled.button`
    color: white;
    background: #78c885;
    border: none;
    font-size: 13px;
    border-radius: 3px;
    outline: none;
    padding: 10px 25px 10px 25px;
    margin-top: 10px;
    margin-right: 5px;
    margin-bottom: 10px;
    cursor: pointer;
`;

const StyledBtnDiv = styled.div`
    margin-left: 110px;
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

    // Form
    

    return (
      <>
      
        <StyledContainer>
            <form onSubmit={submitHandler} className="form">
                <StyledH1>Add Plant</StyledH1>

                <StyledInputContainer className="input-container">
                    {/* Name of plant input */}
                    <StyledLIDiv>
                        <Styledlabel htmlFor="nickname">
                        Nickname: <StyledInput
                        type="text"
                        value={input.nickname}
                        onChange={(event)=> inputHandler(event)}
                        name="nickname" />

                        </Styledlabel>
                        
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
