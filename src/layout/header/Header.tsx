import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "./headerMenu/menu/Menu";
import {Home} from "../../components/logoOrHome/Home";
import {theme} from "../../styles/Theme";


export const items = ["Projects","Contact"];

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"stretch"}>
                   <Home/>
                    <Menu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  height: 100px;
  width: 100%;
  padding: 28px;
  font-weight: 500;
`
