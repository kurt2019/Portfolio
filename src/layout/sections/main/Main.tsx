import React from 'react';
import {Container} from "../../../components/Container";
import photo from "../../../assets/images/logo_me.png"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {SM} from "./Main_Styles";
import {MainButton} from "./MainButton";
import {Bounce} from "react-awesome-reveal";
import Typewriter from 'typewriter-effect';


export const Main: React.FC = () => {
    return (
        <SM.Main id={"home"}>
            <Container>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                    <div>
                        <SM.Title>
                            <p>WEB DEVELOPER</p>
                            <Typewriter
                                options={{
                                    strings: ['WEB DEVELOPER', 'Frontend Developer', 'html coder'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 83,
                                    deleteSpeed: 100
                                }}
                            />
                        </SM.Title>
                        <SM.Name>John Doe</SM.Name>
                        <SM.Description>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                            officia consequat duis enim velit mollit. Exercitation veniam consequat sunt.
                        </SM.Description>
                        <Bounce damping={0.6}>
                            <Button>Contact Me</Button>
                        </Bounce>
                        <MainButton/>
                    </div>
                    <SM.Photo src={photo} alt="Avatar"/>
                </FlexWrapper>
            </Container>
        </SM.Main>
    );
};