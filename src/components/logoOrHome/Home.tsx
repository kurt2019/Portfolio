import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Home = () => {
    return (
        <LinkToHome href="/">Home</LinkToHome>
    );
};

const LinkToHome = styled.a`
  display: flex;
  padding: 12px 0;
  
  &:hover {
    background: ${theme.lineGrad};
    border-radius: 6px;
    color: ${theme.colors.secondaryFont};
    padding: 1% 1%;
  }
`