import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {animateScroll as scroll} from "react-scroll";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme";

export const GoTopButton: React.FC = () => {

    const [showBtn, setshowBtn] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 800) {
                setshowBtn(true)
            } else {
                setshowBtn(false)
            }
        })
    }, []);

    return (
        <>
            {showBtn && (
                <StyleMainButton onClick={()=>{scroll.scrollToTop()}}>
                    <Icon iconId={"Arrow"} width={"18"} height={"28"} viewBox={"0 0 18 28"}/>
                </StyleMainButton>
            )}
        </>
    );
};

const StyleMainButton = styled.button`
  background-color: inherit;
  cursor: pointer;
  padding: 0;
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 40px;
  height: 40px;
  border: 0;
  transform: rotate(180deg);

  @media ${theme.media.tablet} {
    display: none;
  }
`