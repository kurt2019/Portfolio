import React from 'react';
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {SC} from "./Contacts_Styles";

export const Contacts: React.FC = () => {
    return (
        <SC.Contacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <SC.Form>
                    <SC.Mark id={"name"}>Name</SC.Mark>
                    <SC.Field id={"name"} placeholder={"Example"}/>
                    <SC.Mark id={"email"}>Email</SC.Mark>
                    <SC.Field id={"email"} typeof={"email"} placeholder={"Value"} required/>
                    <SC.SpanRequired>input required</SC.SpanRequired>
                    <SC.Mark id={"message"}>Message</SC.Mark>
                    <SC.HelperGradLine>
                        <SC.FieldText id={"message"} placeholder={"Hi, i will ..."} as={"textarea"}/>
                    </SC.HelperGradLine>
                    <Button>Submit</Button>
                </SC.Form>
            </Container>
        </SC.Contacts>
    );
};