import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Section = styled.section`
  padding-top: 265px;
  
  ${FlexWrapper} > div {
    position: relative;
  }
  
  h2 {
    padding-left: 2.5%;
  }
  
  @media ${theme.media.mobile} {
    padding-top: 73px;
  }
  
  @media ${theme.media.tablet} {
    padding-top: 18%;
  }
`

const Item = styled.p`
  ${font({weight: 400, lineHeight: "26px", Fmax: 18, Fmin: 18})};
  max-width: 845px;
  min-width: 325px;
  width: 100%;
  padding: 20px 27px 0 27px;
  position: relative;
  
  &::before {
    content: "";
    display: inline-block;
    background: ${theme.lineGrad.first};
    border-radius: 2px;
    height: 116px;
    width: 5px;
    margin-top: 10px;
    position: absolute;
    left: 0;
  }
`


export const SA = {
    Section,
    Item
}