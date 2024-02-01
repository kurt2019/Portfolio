import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Project} from "./project/Project";
import project1Img from './../../../assets/images/proj_1.png';
import project2Img from './../../../assets/images/proj_2.png';


const instrumentsOne = ["JavaScript", "PostGreSQL", "React", "Redux"];
const instrumentsTwo = ["JavaScript", "ReactNative", "Redux"];

export const Projects = () => {
    return (
        <StyleProjects>
            <Container>
                <SectionTitle>Projects</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Project src={project1Img}
                             title={'TITLE PROJECT'}
                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                             tools={instrumentsOne}/>
                    <Project src={project2Img}
                             title={'I N S I G H T G R A M'}
                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                             tools={instrumentsTwo}/>
                    <Project src={project1Img}
                             title={'TITLE PROJECT'}
                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                             tools={instrumentsOne}/>
                    <Project src={project2Img}
                             title={'I N S I G H T G R A M'}
                             text={'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'}
                             tools={instrumentsTwo}/>
                </FlexWrapper>

            </Container>
        </StyleProjects>
    );
};

const StyleProjects = styled.section`
  min-height: 90vh;
  background-color: #dc3bee;
`

