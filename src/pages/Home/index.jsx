import styled from 'styled-components';
import getContent from "../../utils/contentManager";

const NameTitles = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    gap: 0.5rem;
    margin: 1rem 0;
    h1, p {
        margin: 0;
        line-height: 80%;
    }
`

const IntroFrame = styled.div`
    @include Glassmorph-light();
`

export default function Home() {
    const content = getContent().pages.home;
    return (
        <IntroFrame>
            <NameTitles>
                <p>{content.Hi}</p><h1>Aurélien Cros</h1>
            </NameTitles>
            <NameTitles>
                <p>{content.and_im} <span>{content.web_dev}</span></p>
            </NameTitles>
        </IntroFrame>
    )
}