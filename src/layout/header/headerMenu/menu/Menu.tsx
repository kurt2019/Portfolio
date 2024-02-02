import React from "react";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";



export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={""}>{item}</a>
                        </li>
                    )
                })}
            </ul>
        </StyledMenu>
    )
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;

    li {
      padding: 12px 20px;
    }

    li:hover {
      background: ${theme.lineGrad};
      border-radius: 6px;
      a {
        color: ${theme.colors.secondaryFont};
      }
    }

    li:last-child {
      background: ${theme.lineGrad};
      border-radius: 6px;
      a {
        color: ${theme.colors.secondaryFont};
      }
    }

    li:last-child:hover {
      background: linear-gradient(90.00deg, rgb(225, 221, 16), rgb(14, 44, 134) 100%);
      border: 1px solid white;
      padding: 12px 25px;
        a {
          color: ${theme.colors.mainFont};
        }
    }
    
  }
`