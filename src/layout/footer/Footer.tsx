import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";
import {ItemInProject} from "../sections/projects/project/ItemInProject";
import {items} from "../header/Header";


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


export const Footer = () => {
    return (
        <StyleFooter>
            <FlexWrapper direction={"column"} align={"center"}>
                <StyleSocialGroup>
                    {socialItemList.map((il, index) => {
                        return (
                            <SocialItem key={index}>
                                <SocialLink>
                                    <Icon height={"38"} width={"38"} viewBox={"0 0 38 38"}
                                          iconId={il.iconId}/>
                                </SocialLink>
                                <SocialName>{il.iconId}</SocialName>
                            </SocialItem>
                        )
                    })}
                </StyleSocialGroup>
                <ItemInProject instruments={items}/>
                <Copyright>WEB DEVELOPER 2021</Copyright>
            </FlexWrapper>
        </StyleFooter>
    );
};

const StyleFooter = styled.footer`
  height: 60vh;
  background-color: rgb(30, 30, 30);
`

const StyleSocialGroup = styled.ul`
  display: flex;
  gap: 15px;
  //margin-top: 50px;
  //margin-bottom: 40px;
`

const SocialItem = styled.li`
`

const SocialLink = styled.a`
  background: linear-gradient(90.00deg, rgb(0, 245, 160), rgb(0, 217, 245) 100%);
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Copyright = styled.small`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  margin-top: 25px;
`

const SocialName = styled.span`
  display: inline-block;
  margin-top: 9px;
`
