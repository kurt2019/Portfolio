import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Icon} from "../../components/icon/Icon";
import {ItemInProject} from "../sections/projects/project/ItemInProject";
import {items} from "../header/Header";
import {theme} from "../../styles/Theme";


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
                                <SocialLink href={"/"}>
                                    <Icon height={"38"} width={"38"} viewBox={"0 0 38 38"}
                                          iconId={il.iconId}/>
                                </SocialLink>
                                <SocialName>{il.iconId}</SocialName>
                            </SocialItem>
                        )
                    })}
                </StyleSocialGroup>
                <HelperItemInFooter>
                <ItemInProject instruments={items}/>
                </HelperItemInFooter>
                <Copyright>WEB DEVELOPER 2021</Copyright>
            </FlexWrapper>
        </StyleFooter>
    );
};

const StyleFooter = styled.footer`
    padding-bottom: 100px;
`

const HelperItemInFooter = styled.div`
  ul {
    gap: 48px;
    padding: 50px 0 ;
  }
  
    ul >  li {
      background: inherit;
      color: ${theme.colors.mainFont};
      padding: 0;
    }
`


const StyleSocialGroup = styled.ul`
  display: flex;
  gap: 73px;
  color: ${theme.colors.mainFont};
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
  color: ${theme.colors.mainFont};
  line-height: 26px;
  letter-spacing: calc(1em / 20);
`

const SocialName = styled.span`
  display: inline-block;
  padding-top: 9px;
`
