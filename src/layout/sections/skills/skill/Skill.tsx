import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {font} from "../../../../styles/Common";


type SkillPropsType = {
    iconId: string
    title: string
}


export const Skill = (props: SkillPropsType) => {
    return (
        <StyleSkill>
            <Icon iconId={props.iconId}/>
            <StyleTitle>{props.title}</StyleTitle>
        </StyleSkill>
    );
};

const StyleSkill = styled.div`
  width: 120px;
  height: 165px;
`

const StyleTitle = styled.h3`
  ${font({weight: 400, Fmax: 16, Fmin: 12})}
  text-transform: uppercase;
  text-align: center;
  padding-top: 22px;
`