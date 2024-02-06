import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {SkillMob} from "../skill/SkillMob";
import {SkillList} from "../SkillsOlder";


export const SkillsMob: React.FC = () => {
    return (
                <FlexWrapper wrap={"wrap"} justify={"center"}>
                    {SkillList.map((sl, index) => {
                        return (
                            <SkillMob iconId={sl.iconId} key={index} title={sl.title}/>
                        )
                    })}
                </FlexWrapper>
    );
};
