import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

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
  text-transform: uppercase;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
`