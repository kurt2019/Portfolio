import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  
  @media screen and (max-width: 1130px) and (min-width: 769px) {
    padding: 0 15px;
  }
  
  
  @media ${theme.media.tablet} {
    padding: 0 25px;
  }
`
