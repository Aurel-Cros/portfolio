import Button from "../../components/Button";
import getContent from "../../utils/contentManager";

import styled from 'styled-components';
import * as mixins from '../../styles/mixins';

import { icons } from "../../components/Icons";

import portrait from '../../assets/images/portrait.webp';

const IntroFrameElement = styled.div`
    ${mixins.glassmorph.medium};
    ${mixins.blocks.bdradius};
    width: 100%;
    display: grid;
    padding: 1rem;
    row-gap: 0.5rem;
    grid-template-columns: 1fr 4fr 20rem auto;
    grid-template-rows: 20% 2rem auto 2fr auto;
    place-items: start;
    
    h1 {
        margin: auto 0 0;
        line-height: 80%;
        grid-row: 1;
        grid-column: 3 / span 2;
        overflow: hidden;
        white-space: nowrap;
    }
`
const IntroShortText = styled.p`
        margin: auto 0 0;
        line-height: 80%;
        grid-column: 1/3;
        justify-self: end;
        margin-right: 1.5rem;
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

const ProfilePic = styled.img`
    grid-column: -2;
    grid-row: 2/4;
    place-self: start start;

    width: 12.5rem;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: top center;
    scale: -1 1;

    border-radius: 50%;
`
const IntroLongText = styled.p`
    grid-row: 3;
    grid-column: 1 / 4;
    margin: 0;
    padding: 1rem;
`

const TechStack = styled.div`
    grid-row: 4;
    grid-column: 1 / 4;
    display: flex;
    flex-direction: column;

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
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }
    img {
        max-width: 3rem;
        max-height: 2rem;
    }
`

const AboutButton = styled(Button)`
    padding: 0.25rem 2.3rem;
    grid-column: 3/4;
    grid-row: 4;
    place-self: start end;
`

const CvButton = styled.a`
    grid-column: 1 / -1;
    grid-row: -2;
    padding: 0.1rem 2rem;
    background-image: url(${icons.all.cv});
    background-size: 1.5rem 1.5rem;
    background-repeat: no-repeat;
    background-position: 0 50%;
`

export default function IntroFrame() {
    const content = getContent().pages.home;
    const mainIcons = Object.entries(icons.mainTech);

    return (
        <IntroFrameElement>
            <IntroShortText>{content.Hi}</IntroShortText>
            <h1>Aurélien Cros</h1>
            <IntroShortText>{content.and_im}</IntroShortText>
            <SubTitle>{content.web_dev}</SubTitle>
            <ProfilePic src={portrait} />
            <IntroLongText>{content.intro_long_text}</IntroLongText>
            <TechStack>
                <p>{content.I_use}</p>
                <div>
                    {mainIcons.map(entry => {
                        const icon = entry.splice(',');
                        return <img src={icon[1]} key={icon[0]} />
                    })}
                </div>
                <p>{content.and_more}</p>
            </TechStack>
            <CvButton href="./cv.pdf" target="_blank">{content.CV}</CvButton>
            <AboutButton to="/about-me">{content.know_more}</AboutButton>

        </IntroFrameElement>
    )
}