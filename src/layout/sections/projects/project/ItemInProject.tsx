import React from 'react';
import styled from "styled-components";


export const ItemInProject = (props: {instruments: Array<string>}) => {
    return (
        <ItemProject>
            {props.instruments.map((item, index) => {
                return (
                    <li key={index}>
                        {item}
                    </li>
                )
            })}
        </ItemProject>
    );
};

const ItemProject = styled.ul`
  display: flex;
  gap: 30px;
`