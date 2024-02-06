import React from 'react';
import {SPmin} from "./Project_Styles";


export const ItemInProject = (props: {instruments: Array<string>}) => {
    return (
        <SPmin.ItemProject>
            {props.instruments.map((item, index) => {
                return (
                    <li key={index}>
                        {item}
                    </li>
                )
            })}
        </SPmin.ItemProject>
    );
};