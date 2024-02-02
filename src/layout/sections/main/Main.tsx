import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import photo from "../../../assets/images/logo_me.png"

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <MainTitle>WEB DEVELOPER</MainTitle>
                <MainName>John Doe</MainName>
                <MainDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
                </MainDescription>
                <button>Contact Me</button>
                <Photo src={photo} alt=""/>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 80vh;
  background-color: rgba(54, 73, 194, 0.91);
  padding-top: 207px;
`

const MainTitle= styled.h1`
  font-family: 'Tinos', sans-serif;
  font-size: 20px;
  font-weight: 400;
`

const MainName = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 78px;
  font-weight: 600;
`

const MainDescription = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; /* 150% */
  letter-spacing: 0.64px;
`

const Photo = styled.img`
  width: 500px;
  height: 500px;
  object-fit: cover;
`