import React from 'react';
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";
import {Icon} from "../../../components/icon/Icon";
import {theme} from "../../../styles/Theme";

export const MainButton: React.FC = () => {
    return (
        <StyleMainButton onClick={()=>{scroll.scrollToBottom()}}>
            <Icon iconId={"Arrow"} width={"18"} height={"28"} viewBox={"0 0 18 28"}/>
        </StyleMainButton>
    );
};

const StyleMainButton = styled.button`
  width: 18px;
  height: 28px;
  background-color: inherit;
  border: none;
  outline: 0;
  cursor: pointer;

  position: absolute;
  bottom: -100px;
  right: 0;

  @media ${theme.media.tablet} {
    display: none;
  }
`