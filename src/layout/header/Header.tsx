import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "./headerMenu/menu/Menu";
import {Home} from "../../components/logoOrHome/Home";


const items = ["Projects","Contact"];

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
  background-color: rgba(190, 209, 245, 0.63);
  height: 100px;
  padding: 40px;
`
