import React from "react";
import styled from 'styled-components';

const H1SignIn = styled.h1`
  text-align: center;
`;

export default function Header() {


    return (
        <header className="ui centered">
            <H1SignIn>Water My Plants</H1SignIn>
        </header>
    );
}
