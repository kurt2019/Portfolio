import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import photo from "../../../assets/images/logo_me.png"
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {StyledButtonMain} from "../../../components/Button";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                    <div>
                <MainTitle>WEB DEVELOPER</MainTitle>
                <MainName>John Doe</MainName>
                <MainDescription>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
                </MainDescription>
                        <StyledButtonMain>Contact Me</StyledButtonMain>
                    </div>
                        <Photo src={photo} alt=""/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  padding-top: 207px;
`

const MainTitle= styled.h1`
  ${font({family: "'Tinos', sans-serif ", weight: 400, lineHeight: "23px", Fmax: 20, Fmin: 16})} 
`

const MainName = styled.h2`
  ${font({lineHeight: "88px", Fmax: 72, Fmin: 40})}
  background-image: linear-gradient(130deg, rgb(0, 245, 160),rgb(0, 217, 245) 50%);
  color: transparent;
  -webkit-background-clip: text;
`

const MainDescription = styled.p`
  ${font({weight: 400, lineHeight: "24px", Fmax: 16, Fmin: 16})}
  letter-spacing: 0.64px;
  padding: 10px 0 30px;
  max-width: 540px;
  width: 100%;
`

const Photo = styled.img`
  width: 422px;
  height: 303px;
  object-fit: cover;
  
  @media ${theme.media.mobile} {
    width: 320px;
    height: 240px;
  }
`


