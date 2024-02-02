import React from 'react';
import styled from "styled-components";
import {font} from "../../../../styles/Common";
import {ItemInProject} from "./ItemInProject";


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
  margin-bottom: 28px;
  
`

const ProjectPhoto = styled.img`
  max-width: 522px;
  width: 100%;
  min-height: 388px;
  height: 100%;
  object-fit: cover;
`

const ProjectTitle = styled.h3`
  ${font({lineHeight: "1.14"})}
`

const DescriptionProject = styled.p`
  
`






