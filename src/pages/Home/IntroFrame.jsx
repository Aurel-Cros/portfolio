import getContent from "../../utils/contentManager";

import styled from 'styled-components';
import * as mixins from '../../styles/mixins';

import portrait from '../../assets/images/portrait.webp';

const IntroFrameElement = styled.div`
    ${mixins.glassmorph.medium};
    ${mixins.blocks.bdradius};
    width: 100%;
    display: grid;
    padding: 1rem;
    row-gap: 1rem;
    grid-template-columns: 1fr 4fr 20rem auto;
    grid-template-rows: 20% 2rem auto 2fr 1fr;
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
        margin-right: 1.8rem;
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

export default function IntroFrame() {
    const content = getContent().pages.home;
    return (
        <IntroFrameElement>
            <IntroShortText>{content.Hi}</IntroShortText>
            <h1>Aurélien Cros</h1>
            <IntroShortText>{content.and_im}</IntroShortText>
            <SubTitle>{content.web_dev}</SubTitle>
            <ProfilePic src={portrait} />
            <IntroLongText>{content.intro_long_text}</IntroLongText>
        </IntroFrameElement>
    )
}