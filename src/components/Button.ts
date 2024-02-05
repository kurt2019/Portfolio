import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const Button = styled.button`
  background: ${theme.lineGrad};
  height: 45px;
  width: 135px;
  ${font({weight: 500, lineHeight: "20px", Fmax: 16, Fmin: 16})};
  color: ${theme.colors.secondaryFont};
  border-radius: 6px;
  cursor: pointer;
  

  &:hover {
    background: linear-gradient(90.00deg, rgb(44, 204, 204), rgb(159, 35, 201) 100%);
    border: 1px solid white;
    //padding: 12px 20px;
    color: ${theme.colors.secondaryFont};
    font-weight: 600;
  }

  &:active {
    color: rgba(169, 153, 167, 0.7);
    font-weight: bold;
    border: 2px solid rgba(169, 153, 167, 0.7);
  }
`