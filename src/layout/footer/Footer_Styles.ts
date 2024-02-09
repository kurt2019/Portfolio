import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";


const Footer = styled.footer`
  padding: 80px 0 100px 0;
  backdrop-filter: blur(5px);
  position: relative;
`

const HelperItem = styled.div`
  ul {
    gap: 48px;
    padding: 50px 0;
  }

  ul > li {
    background: inherit;
    color: ${theme.colors.mainFont};
    padding: 0;
  }
`

const SocialGroup = styled.ul`
  display: flex;
  gap: 73px;
  color: ${theme.colors.mainFont};
`

const SocialItem = styled.li`

  &:hover {
    background-image: ${theme.lineGrad.second};
    color: transparent;
    -webkit-background-clip: text;
  }
`

const SocialLink = styled.a`
  background: ${theme.lineGrad.first};
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: ${theme.animations.transition};

  &:hover {
    transform: translateY(-10px);
    background: ${theme.lineGrad.second};
  }
`

const Copyright = styled.small`
  ${font({weight: 400, lineHeight: "26px", Fmin: 14, Fmax: 14})};
  text-align: center;
  color: ${theme.colors.mainFont};
  letter-spacing: calc(1em / 20);
`

const SocialName = styled.span`
  display: inline-block;
  padding-top: 9px;
`


export const SF = {
    Footer,
    HelperItem,
    SocialGroup,
    SocialItem,
    SocialLink,
    Copyright,
    SocialName,
}