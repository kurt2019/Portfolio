import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {font} from "../../../styles/Common";

const Projects = styled.section`
  padding-top: 130px;
  
  ${FlexWrapper} {
    gap: 28px;
  }

  ${Container} {
    padding: 0 10px;
  }

  ${SectionTitle} {
    padding: 0 0 32px 2%;
  }
  
  ${Button} {
    
    @media ${theme.media.mobile} {
      display: flex;
      justify-content: center;
      align-items: center;
      width: calc(100% - 60px);
      max-width: 305px;
      margin: 23px auto 0;
      ${font({color: `${theme.colors.secondaryFont}`, weight: 500, Fmax: 16, Fmin: 16})};
      
      &:hover {
        color: ${theme.colors.mainFont};
      }
    }
    
  }

  @media screen and (min-width: 577px) and (max-width: 1100px) {
    ${FlexWrapper} {
      justify-content: center;
      align-items: center;
    }
  }

  @media ${theme.media.mobile} {
    padding-top: 100px ;
  }
`

export const SP = {
    Projects
}