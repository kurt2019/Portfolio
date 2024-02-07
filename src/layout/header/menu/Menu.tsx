import React from "react";
import {SH} from "../HeaderAndMenu_Styles";

const items = [
    {
        name: "Projects",
        href: "projects"
    },
    {
        name: "Contact",
        href: "contact"
    }
];

export const Menu: React.FC = () => {
    return (
        <SH.Menu>
            <ul>
                {items.map((item, index) => {
                    return (
                        <li key={index}>
                            <SH.MyLink to={item.href}
                                       smooth={true}
                            >
                                {item.name}
                            </SH.MyLink>
                        </li>
                    )
                })}
            </ul>
        </SH.Menu>
    )
};