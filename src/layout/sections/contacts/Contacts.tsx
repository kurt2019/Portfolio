import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/Container";
import {SectionTitle} from "../../../components/SectionTitle";
import {font} from "../../../styles/Common";
import {theme} from "../../../styles/Theme";
import {StyledButtonMain} from "../../../components/Button";

export const Contacts = () => {
    return (
        <StyleContacts>
            <Container>
                <SectionTitle>Contacts</SectionTitle>
                <StyledForm>
                    <Mark id={"name"}>Name</Mark>
                    <Field id={"name"} placeholder={"Example"}/>
                    <Mark id={"email"}>Email</Mark>
                    <Field id={"email"} typeof={"email"} placeholder={"Value"} required/>
                    <SpanRequired>input required</SpanRequired>
                    <Mark id={"message"}>Message</Mark>
                    <HelperGradLine>
                    <FieldText id={"message"} placeholder={"Hi, i will ..."} as={"textarea"}/>
                    </HelperGradLine>
                    <StyledButtonMain>Submit</StyledButtonMain>
                </StyledForm>
            </Container>
        </StyleContacts>
    );
};


const StyleContacts= styled.section`
  padding:  140px 0 190px 0;
`

const StyledForm = styled.form`
  max-width: 532px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 28px 0 0 0;
  color: ${theme.colors.mainFont};
  position: relative;
  
  ${StyledButtonMain} {
    margin-top: 22px;
    width: 100%;
  }
`

const HelperGradLine = styled.div`
  background-image: ${theme.lineGrad};
  height: 165px;
  width: 100%;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FieldText = styled.textarea`
  height: calc(165px - 4px);
  width: calc(100% - 4px);
  padding: 14px 18px;
  border: 0;
  outline: 0;
  background-color: ${theme.colors.primaryBg};
  resize: none;
  color: ${theme.colors.mainFont};

  &::placeholder {
    color: ${theme.colors.mainFont};
  }
`


const Mark = styled.label`
  ${font({weight: 400, lineHeight: "17px", Fmax: 14, Fmin: 14})};
  margin-bottom: 6px;
`

const Field = styled.input`
  margin-bottom: 25px;
  border: 1px solid rgb(189, 235, 234);
  border-radius: 6px;
  height: 48px;
  background-color: inherit;
  color: ${theme.colors.mainFont};
  padding-left: 19px;
  outline: none;

  &::placeholder {
    color: ${theme.colors.mainFont};
  }

  &:focus::placeholder {
    color: #919B9B;
  }
`

const SpanRequired = styled.span`
  color: #C05353;
  font-weight: 500;
  font-size: 14px;
  position: absolute;
  top: 42%;
  right: 0;
  cursor: default;
`
