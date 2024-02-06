import React from "react";
import {SH} from "../HeaderAndMenu_Styles";


export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <SH.Menu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={""}>{item}</a>
                        </li>
                    )
                })}
            </ul>
        </SH.Menu>
    )
};