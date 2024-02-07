import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Link} from "react-scroll";


export const Home: React.FC = () => {
    return (
        <LinkToHome to = "home" smooth={true}>Home</LinkToHome>
    );
};

const LinkToHome = styled(Link)`
  display: flex;
  padding: 12px 0;
  
  &:hover {
    background: ${theme.lineGrad.first};
    border-radius: 6px;
    color: ${theme.colors.secondaryFont};
    padding: 1% 1%;
  }
`