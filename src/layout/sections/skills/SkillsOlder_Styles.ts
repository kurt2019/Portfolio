import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {SectionTitle} from "../../../components/SectionTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";

const Skills = styled.section`
  padding: 140px 0;
  color: ${theme.colors.mainFont};

  ${SectionTitle} {
    padding-bottom: 28px;
    
    @media ${theme.media.mobile} {
      padding-bottom: 47px;
    }
  }

  ${FlexWrapper} {
    column-gap: 112px;
    row-gap: 105px;
    
    @media ${theme.media.mobile} {
      column-gap: 48px;
      row-gap: 80px;
    }
  }
  
  @media ${theme.media.mobile} {
    padding: 100px 0;
  }
`

export const SS = {
    Skills
}