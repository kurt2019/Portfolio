import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";

export const Contacts = () => {
    return (
        <StyleContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm>
                    <Mark id={"name"}>Name</Mark>
                    <Field id={"name"} placeholder={"Your Name"}/>
                    <Mark id={"email"}>Email</Mark>
                    <Field id={"email"} placeholder={"Value"} required/>
                    <Mark id={"message"}>Message</Mark>
                    <Field id={"message"} placeholder={"Hi, i will ..."} as={"textarea"}/>
                    <button>Submit</button>
                </StyledForm>
            </Container>
        </StyleContacts>
    );
};

const StyleContacts= styled.section`
  height: 90vh;
  background-color: rgba(128, 132, 225, 0.89);
  padding-top: 140px;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
`

const Mark = styled.label`
    
`

const Field = styled.input`
    
`