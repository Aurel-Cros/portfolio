import Button from "../../components/Button";
import getContent from "../../utils/getContent";
import formatText from "../../utils/formatText";

import styled from 'styled-components';
import * as mixins from '../../styles/mixins';

import { icons } from "../../components/Icons";
import GlowFrame from "../../components/GlowFrame";
import portrait from '../../assets/images/portrait.webp';

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

    @media screen and (max-width: ${process.env.MOBILE_WIDTH_THRESHOLD}px){
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

    @media screen and (max-width: ${process.env.MOBILE_WIDTH_THRESHOLD}px){
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
    @media screen and (max-width: ${process.env.MOBILE_WIDTH_THRESHOLD}px){
        margin-bottom: 0;
    }
`
const TechStack = styled.div`
    grid-row: 4;
    grid-column: 1 / 4;
    display: flex;
    flex-direction: column;
    max-width: 100%;

    p {

        &:first-child {
        ${mixins.text.subtitle}
        margin-top: 0;
        }
        &:last-child {
        align-self: end;
        margin-bottom: 0;
        }
    }
    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        max-width: 100%;
    }
    img {
        max-width: 3rem;
        max-height: 2rem;
    }
`
const AboutButton = styled(Button)`
    padding: 0.25rem 2.3rem;
    grid-area: 3 / 3 / 4 / 4;
    place-self: end;

    @media screen and (max-width: ${process.env.MOBILE_WIDTH_THRESHOLD}px){
        align-self: center;
    }
`
const CvButton = styled.a`
    grid-column: 1 / -1;
    grid-row: 5 / 6;
    &:before {
        background-image: url(${icons.all.cv});
    }

    @media screen and (max-width: ${process.env.MOBILE_WIDTH_THRESHOLD}px){
        margin-bottom: 0.5rem;
    }
`

export default function IntroFrame() {

    const content = getContent().pages.home;
    const mainIcons = Object.entries(icons.technologies);

    return (
        <IntroFrameElement itemScope="http://schema.org/Person" $pos='0'>
            <IntroShortText>{content.Hi}</IntroShortText>
            <h1 itemProp="name">Aurélien Cros</h1>
            <IntroShortText>{content.and_im}</IntroShortText>
            <SubTitle itemProp="jobTitle">{content.web_dev}</SubTitle>
            <GlowFrame itemProp="image" width='12.5rem' src={portrait} />
            <IntroLongText>{formatText(content.intro_long_text)}</IntroLongText>
            <AboutButton to="/about-me">{content.know_more}</AboutButton>
            <TechStack>
                <p>{content.I_use}</p>
                <div>
                    {mainIcons.map(entry => {
                        const icon = entry.splice(',');
                        return <img src={icon[1].icon} key={icon[0]} alt={icon[1].name} title={icon[1].name} />
                    })}
                </div>
                <p>{content.and_more}</p>
            </TechStack>
            <CvButton className="underline" href="./files/CV_AURELIEN_CROS_Sept_24.pdf" target="_blank">{content.CV}</CvButton>

        </IntroFrameElement>
    )
}