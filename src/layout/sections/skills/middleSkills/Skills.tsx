import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Skill} from "../skill/Skill";
import {SkillList} from "../SkillsOlder";
import {Rotate} from "react-awesome-reveal";
import Tilt from 'react-parallax-tilt';


export const Skills: React.FC = () => {
    return (
        <FlexWrapper wrap={"wrap"} justify={"center"}>
            <Rotate cascade={true} damping={0.2} >
                {SkillList.map((sl, index) => {
                    return (
                        <Skill iconId={sl.iconId} key={index} title={sl.title}/>
                    )
                })}
            </Rotate>
        </FlexWrapper>
    );
};