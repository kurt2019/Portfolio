import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Link} from "react-scroll";


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
      background: ${theme.lineGrad.first};
      border-radius: 6px;

      a {
        color: ${theme.colors.secondaryFont};
      }
    }

    li:last-child {
      background: ${theme.lineGrad.first};
      border-radius: 6px;

      a {
        color: ${theme.colors.secondaryFont};
      }
    }

    li:last-child:hover {
      background: ${theme.lineGrad.second};
      border: 1px solid white;

      a {
        color: ${theme.colors.mainFont};
      }
    }
  }
`

const MyLink = styled(Link)`
`


export const SH = {
    Header,
    Menu,
    MyLink
}