import React, { useState } from "react";
import { useDispatch} from 'react-redux';
import { Link  } from 'react-router-dom';


import styled from "styled-components";

// redux 
import { loginUser } from '../store/actions/index';

//Components






const H1SignIn = styled.div`
  color: rgb(11, 139, 139);
  font-size: 1.2rem;
  font-weight: bolder;
  font-family: "Roboto";
  margin-top: 20px;
  text-align: center;
`;

const UsernameAndPassword = styled.div`
  text-align: left;
  margin-bottom: 20px;
  margin-top: 20px;
  padding-left: 5%;
  padding-right:5%;
`;


const BottomSignIn = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const SignUp = styled.h5`
  cursor: pointer;
  color: black;
  margin: 0 0 0 5px;
`;

const Forgot = styled.p`
  font-size: 12px;
  cursor: pointer;
`;

const StyledInput = styled.input`
  border: none;
  width: 80%;
  padding-left: 5%;
  padding-right: 5%;
  outline: none;
`;

const StyledHr = styled.hr`
  width: 95%;
  color: #7D695F;
`;

const Need = styled.p`
  font-size: 14px;
  margin: 0 0 0 0;
`;


const Login = (props) => {
  const dispatch = useDispatch();

  // const history = useHistory();

  const [signIn, setSignIn] = useState({
      username: "",
      password: ""
  });

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(loginUser(signIn,props));
    setSignIn({
      username:'',
      password: '',
    })
    
  }

  const changeHandler = (event) => {
    console.log(signIn);
    setSignIn({ ...signIn, [event.target.name]: event.target.value });
  }

  return (
  
      <div className='loginbg'>
        <div>
        <div className='loginCard'>
            
            <form onSubmit={submitHandler}>
                <H1SignIn>Sign in</H1SignIn>
                <br />
                <UsernameAndPassword>
                    <label>
                        
                        <br />
                        <StyledInput
                            type="text"
                            name="username"
                            value={signIn.username}
                            placeholder="Username"
                            onChange={changeHandler} required
                        />
                        <StyledHr />
                    </label>
                </UsernameAndPassword>
                <UsernameAndPassword>
                    <label>
                        
                    <br />
                        <StyledInput
                            type="password"
                            name="password"
                            value={signIn.password}
                            placeholder="Password"
                            onChange={changeHandler} required
                        />
                        <StyledHr />
                    </label>
                    <Forgot>Forgot your password?</Forgot>
                    <br />
                </UsernameAndPassword>
                <button className='styledSignInButton'>Sign In</button>
            </form>
            <BottomSignIn>
                <Need>Need an account?</Need>
                <SignUp><Link to='/signup'>Sign up</Link></SignUp>
            </BottomSignIn>
        </div>
        </div>
        </div>
        
    );
};



export default Login;

