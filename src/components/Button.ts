import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const Button = styled.button`
  background: ${theme.lineGrad.first};
  height: 45px;
  width: 135px;
  ${font({weight: 500, lineHeight: "20px", Fmax: 16, Fmin: 16})};
  color: ${theme.colors.secondaryFont};
  border-radius: 6px;
  cursor: pointer;
  outline: 0;
  border: 0;
  
  &:hover {
    background: ${theme.lineGrad.second};
    border: 1px solid white;
    color: ${theme.colors.mainFont};
    font-weight: 600;
  }

  &:active {
    color: rgba(169, 153, 167, 0.7);
    font-weight: bold;
    border: 2px solid rgba(169, 153, 167, 0.7);
  }
`