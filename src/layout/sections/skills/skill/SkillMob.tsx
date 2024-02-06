import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {font} from "../../../../styles/Common";

type SkillPropsType = {
    iconId: string
    title: string
}


export const SkillMob = (props: SkillPropsType) => {
    return (
        <StyleSkill>
            <Icon iconId={props.iconId} viewBox={"0 0 120 120"} height={"88"} width={"88"}/>
            <StyleTitle>{props.title}</StyleTitle>
        </StyleSkill>
    );
};

const StyleSkill = styled.div`
  width: 88px;
  height: 88px;
`

const StyleTitle = styled.h3`
  ${font({weight: 400, Fmin: 12, Fmax: 16})}
  text-transform: uppercase;
  text-align: center;
  padding-top: 22px;
`