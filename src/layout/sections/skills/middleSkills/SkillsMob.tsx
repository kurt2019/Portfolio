import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {SkillMob} from "../skill/SkillMob";
import {SkillList} from "../SkillsOlder";
import {Fade} from "react-awesome-reveal";

export const SkillsMob: React.FC = () => {
    return (
        <FlexWrapper wrap={"wrap"} justify={"center"}>
            <Fade cascade={true} damping={0.1}>
            {SkillList.map((sl, index) => {
                return (
                    <SkillMob iconId={sl.iconId} key={index} title={sl.title}/>
                )
            })}
            </Fade>
        </FlexWrapper>
    );
};
