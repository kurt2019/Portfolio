import React from 'react';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";
import {ItemInProject} from "../sections/projects/project/ItemInProject";
import {items} from "../header/Header";
import {SF} from "./Footer_Styles";


const socialItemList = [
    {
        iconId: "GMAIL"
    },
    {
        iconId: "LINKEDIN"
    },
    {
        iconId: "GITHUB"
    }
]


export const Footer: React.FC = () => {
    return (
        <SF.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <SF.SocialGroup>
                    {socialItemList.map((il, index) => {
                        return (
                            <SF.SocialItem key={index}>
                                <SF.SocialLink href={"/"}>
                                    <Icon height={"38"} width={"38"} viewBox={"0 0 38 38"}
                                          iconId={il.iconId}/>
                                </SF.SocialLink>
                                <SF.SocialName>{il.iconId}</SF.SocialName>
                            </SF.SocialItem>
                        )
                    })}
                </SF.SocialGroup>
                <SF.HelperItem>
                    <ItemInProject instruments={items}/>
                </SF.HelperItem>
                <SF.Copyright>WEB DEVELOPER 2021</SF.Copyright>
            </FlexWrapper>
        </SF.Footer>
    );
};