import React from 'react';
import {Container} from "../../../components/Container";
import photo from "../../../assets/images/logo_me.png"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {SM} from "./Main_Styles";

export const Main: React.FC = () => {
    return (
        <SM.Main>
            <Container>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                    <div>
                        <SM.Title>WEB DEVELOPER</SM.Title>
                        <SM.Name>John Doe</SM.Name>
                        <SM.Description>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
                        </SM.Description>
                            <Button>Contact Me</Button>
                    </div>
                    <SM.Photo src={photo} alt="Avatar"/>
                </FlexWrapper>
            </Container>
        </SM.Main>
    );
};