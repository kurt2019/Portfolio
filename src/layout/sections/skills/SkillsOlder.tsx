import React from 'react';
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skills} from "./middleSkills/Skills";
import {SkillsMob} from "./middleSkills/SkillsMob";
import {SS} from "./SkillsOlder_Styles";


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
        <SS.Skills>
            <Container>
                <SectionTitle>Skills</SectionTitle>
                    {width < breakpoint ? <SkillsMob/> : <Skills/>}
            </Container>
        </SS.Skills>
    );
};