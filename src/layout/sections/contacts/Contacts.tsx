import React, {ElementRef, useRef} from 'react';
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {SC} from "./Contacts_Styles";
import emailjs from '@emailjs/browser';


export const Contacts: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs.sendForm('service_mz5oran', 'template_fdqkd2a', form.current, 'XQSSPvXmPvHGC-SkP')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <SC.Contacts id={"contact"}>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <SC.Form ref={form} onSubmit={sendEmail}>
                    <SC.Mark id={"name"}>Name</SC.Mark>
                    <SC.Field required id={"name"} placeholder={"Example"} name={"name"}/>
                    <SC.Mark id={"email"}>Email</SC.Mark>
                    <SC.Field required id={"email"} typeof={"email"} placeholder={"Value"} name={"email"}/>
                    <SC.SpanRequired>input required</SC.SpanRequired>
                    <SC.Mark id={"message"}>Message</SC.Mark>
                    <SC.HelperGradLine>
                        <SC.FieldText required id={"message"} placeholder={"Hi, i will ..."} as={"textarea"}
                                      name={"message"}/>
                    </SC.HelperGradLine>
                    <Button type={"submit"}>Submit</Button>
                </SC.Form>
            </Container>
        </SC.Contacts>
    );
};
