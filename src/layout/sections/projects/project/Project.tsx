import React from 'react';
import styled from "styled-components";
import {font} from "../../../../styles/Common";
import {ItemInProject} from "./ItemInProject";
import {theme} from "../../../../styles/Theme";


type ProjectPropsType = {
    src: string
    title: string
    text: string
    tools: Array<string>
}

export const Project = (props: ProjectPropsType) => {
    return (
        <ProjectCard>
            <ProjectPhoto src={props.src}/>
            <ProjectTitle>{props.title}</ProjectTitle>
            <ItemInProject instruments={props.tools}/>
            <DescriptionProject>{props.text}</DescriptionProject>
        </ProjectCard>
    );
};



const ProjectCard = styled.div`
  max-width: 522px;
  width: 100%;
  height: 100%;
  background-color: #222525;
  border-radius: 6px;
`

const ProjectPhoto = styled.img`
  max-width: 522px;
  width: 100%;
  min-height: 388px;
  height: 100%;
  object-fit: cover;
  border-radius: 6px 6px 0 0;
  
  @media ${theme.media.mobile} {
    max-width: 363px;
    min-height: 300px;
  }
`

const ProjectTitle = styled.h3`
  ${font({color: "#D9F2F2", lineHeight: "1.14"})};
  padding: 29px 0 11px 26px;
`

const DescriptionProject = styled.p`
  ${font({ weight: 400 ,lineHeight: "24px", Fmax: 16, Fmin: 16})};
  padding: 19px 9px 32px 26px ;
`






