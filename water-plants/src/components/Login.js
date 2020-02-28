import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from "./Header.js";
import styled from "styled-components";


const LoginCard = styled.div`
  background: white;
  border-radius: 3px;
  width: 23rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  color: #7D695F;
  margin-top: 10%;
  margin-bottom: 10%;
`;

const H1SignIn = styled.div`
  color: rgb(11, 139, 139);
  font-size: 1.2rem;
  font-weight: bolder;
  font-family: "Roboto";
  margin-top: 20px;
`;

const EmailAndPassword = styled.div`
  text-align: left;
  margin-bottom: 20px;
  margin-top: 20px;
  padding-left: 5%;
  padding-right:5%;
`;

const StyledSignInButton = styled.button`
  width: 65%;
  font-family: "Roboto";
  color: #7D695F;
  border-radius: 3px;
  font-size: 1rem;
  background: #97C6A5;
  padding: 8px 0 8px 0;
  border: none;
  cursor: pointer;
  margin-bottom: 20px;
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


const Login = props => {
    const [signIn, setSignIn] = useState({
        username: "",
        password: ""
    });

    function submitHandler(event) {
        event.preventDefault();
        console.log("sign in in handle", signIn);
        // setSignIn(signIn);
        props.postLogin(signIn).then(() => props.history.push("/"));
    }

    function changeHandler(event) {
        console.log(signIn);
        setSignIn({ ...signIn, [event.target.name]: event.target.value });
    }

    return (
        <LoginCard>
            <Header />
            <form onSubmit={submitHandler}>
                <H1SignIn>Sign in</H1SignIn>
                <br />
                <EmailAndPassword>
                    <label>
                        Email Address
            <br />
                        <StyledInput
                            type="text"
                            name="username"
                            value={signIn.email}
                            placeholder=""
                            onChange={changeHandler}
                        />
                        <StyledHr />
                    </label>
                </EmailAndPassword>
                <EmailAndPassword>
                    <label>
                        Password
            <br />
                        <StyledInput
                            type="password"
                            name="password"
                            value={signIn.password}
                            placeholder=""
                            onChange={changeHandler}
                        />
                        <StyledHr />
                    </label>
                    <Forgot>Forgot your password?</Forgot>
                    <br />
                </EmailAndPassword>
                <StyledSignInButton type="submit">Sign In</StyledSignInButton>
            </form>
            <BottomSignIn>
                <Need>Need an account?</Need>
                <Link to='/register'><SignUp>Sign up</SignUp></Link>
            </BottomSignIn>
        </LoginCard>
    );
};

export default Login;

