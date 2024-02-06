import React from 'react';
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "./menu/Menu";
import {Home} from "../../components/logoOrHome/Home";
import {SH} from "./HeaderAndMenu_Styles";


export const items = ["Projects", "Contact"];

export const Header: React.FC = () => {
    return (
        <SH.Header>
            <Container>
                <FlexWrapper justify={"space-between"} align={"stretch"}>
                    <Home/>
                    <Menu menuItems={items}/>
                </FlexWrapper>
            </Container>
        </SH.Header>
    );
};