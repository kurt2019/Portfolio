import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {theme} from "../../../styles/Theme";


const SkillList = [
    {
        iconId: "javascript",
        title: "JAVACRIPT"
    },
    {
        iconId: "typeScript",
        title: "typescript"
    },
    {
        iconId: "mongodb",
        title: "mongo db"
    },
    {
        iconId: "postgrest",
        title: "PostgreSQL"
    },
    {
        iconId: "jest",
        title: "Jest"
    },
    {
        iconId: "express",
        title: "Express JS"
    },
    {
        iconId: "HTML",
        title: "HTML"
    },
    {
        iconId: "docker",
        title: "Docker"
    },
    {
        iconId: "react",
        title: "react js"
    },
    {
        iconId: "reactNative",
        title: "react nactive"
    },
    {
        iconId: "styledComponents",
        title: "Styled Components"
    },
    {
        iconId: "redus",
        title: "Redux"
    },
    {
        iconId: "git",
        title: "git"
    },
]


export const Skills = () => {
    return (
        <StyleSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"center"}>
                    {/*<GridContainer>*/}
                    {SkillList.map((sl, index) => {
                        console.log(sl.iconId, index, sl.title)
                        return (
                            <Skill iconId={sl.iconId} key={index} title={sl.title}/>
                        )
                    })}
                    {/*</GridContainer>*/}
                </FlexWrapper>
            </Container>
        </StyleSkills>
    );
};

const StyleSkills = styled.section`
  padding: 140px 0;
  color: ${theme.colors.mainFont};

  ${SectionTitle} {
    padding-bottom: 28px;
  }

  ${FlexWrapper} {
    column-gap: 112px;
    row-gap: 60px;
  }
`
