import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Skill} from "../skill/Skill";
import {SkillList} from "../SkillsOlder";


export const Skills: React.FC = () => {
    return (
        <FlexWrapper wrap={"wrap"} justify={"center"}>
            {SkillList.map((sl, index) => {
                return (
                    <Skill iconId={sl.iconId} key={index} title={sl.title}/>
                )
            })}
        </FlexWrapper>
    );
};