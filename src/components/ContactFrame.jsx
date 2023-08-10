import { useState } from "react";
import getContent from "../utils/getContent";

import styled from 'styled-components';
import * as mixins from '../styles/mixins';
import iconSend from '../assets/icons/contact-lime.svg';
import colors from '../styles/colors';

const ContactSection = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: 1rem;
`
const inputFont = `
    font-family: Montserrat;
    font-size: 0.825rem;
    color: ${colors.greyText}7F;
    letter-spacing: 0.05rem;
`
const StyledInput = styled.input`
    appearance: none;
    -moz-appearance: textfield;
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

    transition: background-position 400ms ease-in-out;
    &:hover {
        background-position:  0.5rem 50%, 0 0;
    }
    &:active {
        scale: 0.975;
        box-shadow: inset 1px 1px 4px ${colors.greyText};
    }
`
function sendMessage(formData) {
    console.log("VALIDATE AND SEND : ", formData);
    // Validate and send
}

export default function ContactFrame() {
    const [form, setForm] = useState(null);
    const content = getContent().pages.home;
    const errors = getContent().error;
    return (
        <ContactSection>
            <h2>{content.Contact}</h2>
            <form id="contact-form">
                <ContactSection>
                    <StyledInput type="text" placeholder={content.contact_name} onBlur={(e) => {
                        e.target.reportValidity();
                        if (e.target.checkValidity())
                            setForm({ ...form, name: e.target.value })
                    }} required />

                    <StyledInput type="email" placeholder={content.contact_mail} onBlur={(e) => {
                        e.target.reportValidity();
                        if (e.target.checkValidity())
                            setForm({ ...form, mail: e.target.value })
                    }} pattern="^([a-zA-Z0-9]+([\-\/#!%$'&+*=?^_.\{\|\}~]*[a-zA-Z0-9]+)*){1,63}@([a-zA-Z0-9]+([.\-][a-zA-Z0-9]+)*){1,63}\.[a-z]{2,63}$" title="email-example@domain.extension"
                        required />

                    <StyledInput type="tel" placeholder={content.contact_phone} onBlur={(e) => {
                        e.target.reportValidity();
                        if (e.target.checkValidity())
                            setForm({ ...form, phone: e.target.value })
                    }} pattern="^(\+|00)?[0-9 \-.]{7,16}$" required title={errors.tel_format} />

                    <StyledTextA minLength="80" placeholder={content.contact_message} onBlur={(e) => {
                        e.target.reportValidity();
                        if (e.target.checkValidity())
                            setForm({ ...form, message: e.target.value })
                    }} required />

                    <SendBtn onClick={(e) => {
                        e.preventDefault();
                        const contactForm = document.querySelector("#contact-form");
                        contactForm.reportValidity();
                        if (contactForm.checkValidity())
                            sendMessage(form);
                    }
                    }>{content.contact_send} </SendBtn>
                </ContactSection>
            </form >
        </ContactSection >
    )
}