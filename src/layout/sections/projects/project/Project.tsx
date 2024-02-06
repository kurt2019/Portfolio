import React from 'react';
import {ItemInProject} from "./ItemInProject";
import {SPmin} from "./Project_Styles";


type ProjectPropsType = {
    src: string
    title: string
    text: string
    tools: Array<string>
}

export const Project = (props: ProjectPropsType) => {
    return (
        <SPmin.Card>
            <SPmin.Photo src={props.src}/>
            <SPmin.Title>{props.title}</SPmin.Title>
            <ItemInProject instruments={props.tools}/>
            <SPmin.Description>{props.text}</SPmin.Description>
        </SPmin.Card>
    );
};