import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";

export const AboutMe = () => {
    return (
        <AboutMeSection>
            <SectionTitle>About me</SectionTitle>
            <ItemAboutMe> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. Exercitation veniam consequat sunt.
            </ItemAboutMe>
        </AboutMeSection>

    );
};

const AboutMeSection = styled.section`
  height: 60vh;
  background-color: rgba(239, 77, 77, 0.68);
`

const ItemAboutMe = styled.p`

`