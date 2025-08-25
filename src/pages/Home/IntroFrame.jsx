import getContent from "../../utils/getContent";
import formatText from "../../utils/formatText";

import styled from 'styled-components';
import * as mixins from '../../styles/mixins';

import GlowFrame from "../../components/GlowFrame";
import portrait from '../../assets/images/portrait.webp';
import linkedin from '../../assets/images/linkedin_logo.png';

const MOBILE_BREAKPOINT = import.meta.env.VITE_MOBILE_WIDTH_THRESHOLD || 800;

const IntroFrameElement = styled.section`
    ${mixins.glassmorph.light};
    ${mixins.blocks.bdradius};
    display: grid;
    padding: 1rem;
    row-gap: 0.5rem;
    grid-template-columns: 1fr 4fr 20rem auto;
    place-items: start;
    
    position: relative;
    left: ${({ $pos }) => $pos}vw;
    transition: left 500ms ease-in-out 350ms;

    h1 {
        margin: auto 0 0;
        line-height: 80%;
        grid-row: 1;
        grid-column: 3 / span 2;
        overflow: hidden;
        white-space: nowrap;
    }

    @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
        display: flex;
        flex-flow: column nowrap;
        gap: 1rem;
        place-items: center;
    }
`
const IntroShortText = styled.p`
    margin: auto 0 0;
    line-height: 80%;
    grid-column: 1/3;
    justify-self: end;
    margin-right: 1.5rem;

    @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
        margin-right: 0;
    }

`
const SubTitle = styled.div`
    ${mixins.text.subtitle}
    margin: auto 0 0;
    line-height: 80%;
    grid-column: 3 / span 2;
    grid-row: 2;
    overflow: hidden;
    white-space: nowrap;

`
const IntroLongText = styled.div`
    grid-row: 3;
    grid-column: 1 / 4;
    margin: 0;
    margin-bottom: 1rem;
    padding: 1rem;
    align-self: center;
    p {
        margin: 0%;
        &:not(:first-child) {
            margin-top: 0.5rem;
        }
    }
    @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
        margin-bottom: 0;
    }
`

const LinkedInLink = styled.div`
    padding: 1rem;
    margin: 1rem 2rem 0;
    border-radius: 0.5rem;
    border: 1px solid rgba(0,240,120, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    `

const LinkedInLogo = styled.img`
    width: 2rem;
    height: auto;
    padding: 0 1rem;
    vertical-align: middle;
    `

export default function IntroFrame() {

    const content = getContent().pages.home;

    return (
        <IntroFrameElement itemScope="http://schema.org/Person" $pos='0'>
            <IntroShortText>{content.Hi}</IntroShortText>
            <h1 itemProp="name">Aurélien Cros</h1>
            <IntroShortText>{content.and_im}</IntroShortText>
            <SubTitle itemProp="jobTitle">{content.web_dev}</SubTitle>
            <GlowFrame itemProp="image" width='12.5rem' src={portrait} />
            <IntroLongText>
                {formatText(content.intro_long_text)}

                <LinkedInLink>
                    <LinkedInLogo src={linkedin} />
                    <a href="https://www.linkedin.com/in/aurelien-cros/" target="_blank">Cliquez ici pour être téléporté vers mon profil ! </a>
                </LinkedInLink>
            </IntroLongText>

        </IntroFrameElement>
    )
}