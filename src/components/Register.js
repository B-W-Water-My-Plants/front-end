import React, { useState } from "react";
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { registerUser } from '../store/actions/index';

import styled from "styled-components";


//Components





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


// const RegisterFooterDiv = styled.div`
//     border-top: 1px solid black;
//     margin: 0 auto;
//     margin-top: 2%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;


const Register = (props) => {
    // console.log("props in register", props);
    const dispatch = useDispatch();
    // const history = useHistory();

    const [user, setUser] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = (event) => {
        console.log("NewUser in handle", user);
        event.preventDefault();
        dispatch(registerUser(user, props));
        setUser({
            username: '',
            password: ''
        })
        console.log(user)
        
       
    }

    const handleChange = (event) => {
       event.preventDefault();
       setUser({...user, [event.target.name]: event.target.value });
    };

    return (
        <div className='loginbg'>   
            <div>
            <div>
            <div id='signCard'>

                <form  onSubmit={handleSubmit}>

                    
                    <StyledH2>Sign up</StyledH2>
                    <StyledInputDiv>
                        <StyledLabel>Name</StyledLabel>
                        <StyledInput
                            type="text"
                            name="username"
                            value={user.username}
                            onChange={handleChange} required
                        />
                    </StyledInputDiv>


                    <StyledInputDiv>
                        <StyledLabel>Password</StyledLabel>
                        <StyledInput
                            type="password"
                            name="password"
                            value={user.password}
                            onChange={handleChange} required
                        />
                    </StyledInputDiv>
                    <button className='styledSignInButton'>Sign Up</button>
                </form>
                    

                
                    <div>
                        <StyledP>
                            Got accout? <Link to='/login'>Sign in</Link>
                        </StyledP>
                    </div>
           </div>
        </div>
        </div>
        </div>
    ); 
}



export default Register;
