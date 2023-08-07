import { useState } from "react";
import Button from "../../components/Button";
import getContent from "../../utils/getContent";

import styled from 'styled-components';
import * as mixins from '../../styles/mixins';
import iconSend from '../../assets/icons/contact-lime.svg';
import colors from '../../styles/colors';


const ContactSection = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 1rem;
`

const SectionTitle = styled.h2`
    margin-left: 3.2rem;
`
const inputFont = `
    font-family: Montserrat;
    font-size: 0.825rem;
    color: ${colors.greyText}7F;
    letter-spacing: 0.05rem;
`

const StyledInput = styled.input`
    ${mixins.glassmorph.heavy}
    ${inputFont}
    background: rgba(249, 251, 242, 0.5);
    border-radius: 0.69rem;
    border: none;
    padding: 0.45rem;
    width: 21rem;
`
const StyledTextA = styled.textarea`
    ${mixins.glassmorph.heavy}
    ${inputFont}
    background: rgba(249, 251, 242, 0.50);
    border-radius: 0.69rem;
    border: none;
    padding: 0.45rem;
    width: 21rem;
    min-height: 8rem;
`

const SendBtn = styled.button`
    ${mixins.text.nav}
    cursor: pointer;
    color: ${colors.lime};
    text-align: center;

    background: url(${iconSend}), linear-gradient(to left, ${colors.darkBlue} 65%, ${colors.lime} 120%);
    background-repeat: no-repeat;
    background-size: 1.5rem, 200% 100%;
    background-position:  0.5rem 50%, 100% 0;
    border: none;
    border-radius: 1rem;
    padding: 0.5rem 1rem 0.5rem 2.5rem;

    letter-spacing: -0.007rem;
    text-decoration: none;

    transition: background-position 500ms ease-in-out;
    &:hover {
        background-position:  0.5rem 50%, 0 0;
    }
    &:active {
        scale: 0.98;
        box-shadow: inset 1px 1px 4px ${colors.greyText};
    }
`

export default function ContactFrame() {
    const content = getContent().pages.home;
    return (
        <ContactSection>
            <SectionTitle>Contact me</SectionTitle>
            <StyledInput type="text" placeholder={content.contact_name} />
            <StyledInput type="text" placeholder={content.contact_mail} />
            <StyledInput type="text" placeholder={content.contact_phone} />
            <StyledTextA placeholder={content.contact_message} />
            <SendBtn>{content.contact_send} </SendBtn>
        </ContactSection>
    )
}