import React from 'react';
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


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
  flex-wrap: wrap;
  gap: 12px;
  padding-left: 26px;
  
  @media ${theme.media.mobile} {
    padding-left: 10px;
  }

  li {
    padding: 8px 16px;
    border-radius: 4px;
    background: ${theme.lineGrad};
}
`