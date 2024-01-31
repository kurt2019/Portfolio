import React from "react";
import styled from "styled-components";


// const menuItem = [
//     {
//         title: "Projects",
//         href: "projects"
//     },
//     {
//         title: "Contact",
//         href: "contact"
//     }
// ];

export const Menu = () => {
    return (
        <StyleMenu>
            <ul>
                <li>
                    <a href="/">Projects</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
            </ul>
        </StyleMenu>
    )
};

const StyleMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`