import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from './Header.js';
import styled from "styled-components";


const StyledFieldset = styled.fieldset`
  border-radius: 4px;
  border: 0 solid white;
  width: 23rem;
  margin: 0 auto;
  background-color: white;
  padding-top: 0;
  margin-top:10%;
  margin-bottom: 10%;
  padding-left: 0%;
  padding-right: 0;
`;


const StyledH2 = styled.h2`
    color: #198974
    font-size: 18px;
`;

const StyledP = styled.p`
  font-size: 12px;
`;

const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-left: 13%;
  padding-right: 5%;
  font-style: source sans pro;
`;
const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid grey;
  margin-bottom: 5%;
  height: 30px;
  width: 88%;
`;

const StyledLabel = styled.label`
  margin-bottom: 1%;
  text-align: left;
`;

const StyledButton = styled.button`
  width: 200px;
  height: 30px;
  background-color: #97C6A5;
  color: black;
  border-radius: 2px;
  margin-bottom: 2%;
  font-size: 15px;
`;

const RegisterFooterDiv = styled.div`
    border-top: 1px solid black;
    margin: 0 auto;
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Register = props => {
    console.log("props in register", props);
    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        password: "",
        phone: ""
    });

    function handleSubmit(event) {
        console.log("NewUser in handle", newUser);
        event.preventDefault();
        //
        // setNewUser(newUser);
        props.postRegister(newUser).then(() => props.history.push("/login"));
    }

    function handleChange(event) {
        const updatedUser = { ...newUser, [event.target.name]: event.target.value };
        console.log("user", event.target.name, event.target.value, updatedUser);
        setNewUser(updatedUser);
    }

    return (
        <div>
            {/* <form onSubmit={event => handleSubmit(event)}> */}
            <form onSubmit={handleSubmit}>
                <StyledFieldset>
                    <Header />
                    <StyledH2>Sign up</StyledH2>
                    <StyledInputDiv>
                        <StyledLabel>Name</StyledLabel>
                        <StyledInput
                            type="text"
                            name="username"
                            value={newUser.username}
                            onChange={handleChange}
                        />
                    </StyledInputDiv>


                    <StyledInputDiv>
                        <StyledLabel>Password</StyledLabel>
                        <StyledInput
                            type="password"
                            name="password"
                            value={newUser.password}
                            onChange={handleChange}
                        />
                    </StyledInputDiv>

                    <StyledInputDiv>
                        <StyledLabel>Phone number</StyledLabel>
                        <StyledInput
                            type="phone number"
                            name="phone"
                            value={newUser.phone}
                            onChange={handleChange}
                        />
                    </StyledInputDiv>
                    <StyledButton>Sign Up</StyledButton>

                    <RegisterFooterDiv>
                        <input type="checkbox" />
                        <StyledP>I accept terms of service available here.</StyledP>
                    </RegisterFooterDiv>
                    <div>
                        <StyledP>
                            Got accout? <Link to='/login'>Sign in</Link>
                        </StyledP>
                    </div>
                </StyledFieldset>
            </form>
        </div>
    ); 
}



export default Register;
