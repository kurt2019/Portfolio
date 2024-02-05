import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";

export const AboutMe = () => {
    return (
        <AboutMeSection>
        <Container>
                <SectionTitle>About me</SectionTitle>
                <ItemAboutMe>The long barrow was built on land previously inhabited in the Mesolithic period. It consisted of a sub-rectangular earthen tumulus, estimated to have been 15 metres (50 feet) in length, with a chamber built from sarsen megaliths on its eastern end. Both inhumed and cremated human remains were placed within this chamber during the Neolithic period, representing at least nine or ten individuals.
                </ItemAboutMe>
        </Container>
        </AboutMeSection>
    );
};

const AboutMeSection = styled.section`
  padding-top: 385px;
  
  @media ${theme.media.mobile} {
    padding-top: 73px;
  }
  
  h2 {
    padding-left: 2.5%;
  }
`

const ItemAboutMe = styled.p`
  ${font({weight: 400, lineHeight: "26px", Fmax: 18, Fmin: 18})};
  max-width: 845px;
  min-width: 325px;
  width: 100%;
  padding: 20px 0 0 27px;
  position: relative;
  
  &::before {
    content: "";
    display: inline-block;
    background: ${theme.lineGrad};
    border-radius: 2px;
    height: 116px;
    width: 5px;
    margin-top: 10px;
    position: absolute;
    left: 0;
  }
`