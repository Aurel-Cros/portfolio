import getContent from "../../utils/contentManager";

import styled from 'styled-components';
import * as mixins from '../../styles/mixins';

const NameTitles = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    gap: 0.5rem;
    margin: 1rem 0;
    h1, p {
        margin: 0;
        line-height: 80%;
    }
`
const SubTitle = styled.span`
    ${mixins.text.subtitle}
`
const IntroFrameElement = styled.div`
    ${mixins.glassmorph.medium};
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-end;
`

export default function IntroFrame() {
    const content = getContent().pages.home;
    return (
        <IntroFrameElement>
            <NameTitles>
                <p>{content.Hi}</p><h1>Aurélien Cros</h1>
            </NameTitles>
            <NameTitles>
                <p>{content.and_im} <SubTitle>{content.web_dev}</SubTitle></p>
            </NameTitles>
        </IntroFrameElement>
    )
}