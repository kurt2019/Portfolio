import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {theme} from "../../../styles/Theme";
import {Skills} from "./middleSkills/Skills";
import {SkillsMob} from "./middleSkills/SkillsMob";


export const SkillList = [
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


export const SkillsOlder: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <StyleSkills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                    {width < breakpoint ? <SkillsMob/> : <Skills/>}
            </Container>
        </StyleSkills>
    );
};

const StyleSkills = styled.section`
  padding: 140px 0;
  color: ${theme.colors.mainFont};

  ${SectionTitle} {
    padding-bottom: 28px;
    
    @media ${theme.media.mobile} {
      padding-bottom: 47px;
    }
  }

  ${FlexWrapper} {
    column-gap: 112px;
    row-gap: 105px;
    
    @media ${theme.media.mobile} {
      column-gap: 48px;
      row-gap: 80px;
    }
  }
  
  @media ${theme.media.mobile} {
    padding: 100px 0;
  }
  
`