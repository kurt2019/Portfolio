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
                    <Icon iconId={"arrowGoTop"} width={"16"} height={"16"} viewBox={"0 0 16 16"}/>
                </StyleMainButton>
            )}
        </>
    );
};

const StyleMainButton = styled.button`
  background-color: ${theme.colors.primaryBg};
  cursor: pointer;
  padding: 0;
  position: fixed;
  right: 40px;
  bottom: 40px;
  width: 40px;
  height: 40px;
  border: 0;

  @media ${theme.media.tablet} {
    display: none;
  }
`