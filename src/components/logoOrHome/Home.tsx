import React from 'react';
import styled from "styled-components";

export const Home = () => {
    return (
        <LinkToHome href="/">Home</LinkToHome>
    );
};

const LinkToHome = styled.a`
  display: flex;
  flex-grow: 1;
`