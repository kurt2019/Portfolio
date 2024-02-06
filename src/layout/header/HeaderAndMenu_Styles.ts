import styled from "styled-components";
import {theme} from "../../styles/Theme";


const Header = styled.header`
  height: 100px;
  width: 100%;
  padding: 28px;
  font-weight: 500;
`

const Menu = styled.nav`
  ul {
    display: flex;
    gap: 30px;

    li {
      padding: 12px 20px;
    }

    li:hover {
      background: ${theme.lineGrad};
      border-radius: 6px;

      a {
        color: ${theme.colors.secondaryFont};
      }
    }

    li:last-child {
      background: ${theme.lineGrad};
      border-radius: 6px;

      a {
        color: ${theme.colors.secondaryFont};
      }
    }

    li:last-child:hover {
      background: linear-gradient(90.00deg, rgb(44, 204, 204), rgb(159, 35, 201) 100%);
      border: 1px solid white;

      a {
        color: ${theme.colors.mainFont};
      }
    }
  }
`


export const SH = {
    Header,
    Menu,
}