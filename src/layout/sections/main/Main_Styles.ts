import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {font} from "../../../styles/Common";


const Main = styled.section`
  padding-top: 207px;

  @media ${theme.media.mobile} {
    padding-top: 29px;

    ${FlexWrapper} {
      flex-wrap: wrap-reverse;
      justify-content: center;
    }

    & > div {
      text-align: center;
    }
  }

  @media ${theme.media.tablet} {
    padding-top: 15%;

    ${FlexWrapper} {
      justify-content: center;
    }

    & > div {
      text-align: center;
    }
  }

  @media ${theme.media.desktop} {
    ${FlexWrapper} {
      justify-content: space-between;
    }

    & > div {
      text-align: left;
    }
  }
`

const Title = styled.h1`
  ${font({family: "'Tinos', sans-serif ", weight: 400, lineHeight: "23px", Fmax: 20, Fmin: 16})};

  @media ${theme.media.mobile} {
    padding-top: 70px;
    align-items: center;
  }
`

const Name = styled.h2`
  ${font({lineHeight: "88px", Fmax: 72, Fmin: 40})};
  background-image: ${theme.lineGrad.first};
  color: transparent;
  -webkit-background-clip: text;
`

const Description = styled.p`
  ${font({weight: 400, lineHeight: "24px", Fmax: 16, Fmin: 16})}
  letter-spacing: 0.64px;
  padding: 10px 0 30px;
  max-width: 540px;
  width: 100%;

  @media ${theme.media.mobile} {
    max-width: 329px;
    text-align: center;
  }
`

const Photo = styled.img`
  width: 422px;
  height: 303px;
  object-fit: cover;

  @media ${theme.media.mobile} {
    width: 320px;
    height: 240px;
  }
  @media ${theme.media.tablet} {
    margin-top: 10%;
  }
  @media ${theme.media.desktop} {
    margin: 0;
  }
`

export const SM = {
    Main,
    Title,
    Name,
    Description,
    Photo,
}