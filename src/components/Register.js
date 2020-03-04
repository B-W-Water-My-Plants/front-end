import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { registerUser } from '../store/actions/index';

import styled from "styled-components";
import { useHistory } from 'react-router-dom';

//Components


const StyledFieldset = styled.fieldset`
  border-radius: 4px;
  border: 0 solid white;
  width: 23rem;
  margin: 0 auto;
  background-color: white;
  padding-top: 0;
  margin-top: 8%;
  margin-bottom: 10%;
  padding-left: 0%;
  padding-right: 0;
`;


const StyledH2 = styled.h2`
   color: rgb(11, 139, 139);
  font-size: 1.2rem;
  font-weight: bolder;
  font-family: "Roboto";
  margin-top: 20px;
  text-align: center;
`;

const StyledP = styled.p`
  font-size: 12px;
  margin-left: 20px;
  margin-top: 3px;
  margin-bottom: 3px;
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
  margin-bottom: 10px;
  margin-left: 80px;
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


const Register = () => {
    // console.log("props in register", props);
    const dispatch = useDispatch();
    const history = useHistory();

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = (event) => {
        console.log("NewUser in handle", user);
        event.preventDefault();
        dispatch(registerUser(user));
        setUser({
            username: '',
            password: ''
        })
        console.log(user)
        history.push('/dashboard')
       
    }

    const handleChange = (event) => {
       event.preventDefault();
       setUser({...user, [event.target.name]: event.target.value });
    };

    return (
        <div>
            {/* <form onSubmit={event => handleSubmit(event)}> */}
            {/* <Header /> */}
            <form onSubmit={handleSubmit}>
                <StyledFieldset>
                    
                    <StyledH2>Sign up</StyledH2>
                    <StyledInputDiv>
                        <StyledLabel>Name</StyledLabel>
                        <StyledInput
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleChange}
                        />
                    </StyledInputDiv>


                    <StyledInputDiv>
                        <StyledLabel>Password</StyledLabel>
                        <StyledInput
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange}
                        />
                    </StyledInputDiv>

                    {/* <StyledInputDiv>
                        <StyledLabel>Phone number</StyledLabel>
                        <StyledInput
                            type="phone number"
                            name="phone"
                            value={newUser.phone}
                            onChange={handleChange}
                        />
                    </StyledInputDiv> */}

                    <StyledButton>Sign Up</StyledButton>

                    <RegisterFooterDiv>
                        <input type="checkbox"  required/>
                        <StyledP> I accept terms of service available here.</StyledP>
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
