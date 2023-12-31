import { styled } from 'styled-components';
import getContent from '../../utils/getContent';
import * as mixins from '../../styles/mixins';
import portrait from '../../assets/images/portrait.webp';

const AboutSection = styled.section`
    ${mixins.glassmorph.light};
    ${mixins.blocks.bdradius};
    display: grid;
    padding: 1rem;
    row-gap: 0.5rem;
    grid-template-columns: 1fr 10% max(33%, 14rem);
    grid-template-rows: auto auto auto;
    place-items: start;
    
    h1 {
        margin: 0 0 2.4rem;
        line-height: 80%;
        grid-row: 1;
        grid-column: 2;
        overflow: hidden;
        white-space: nowrap;
    }

    @media screen and (max-width: ${process.env.MOBILE_WIDTH_THRESHOLD}px){
        display: block flex;
        flex-direction: column;
        align-items: center;
    }
`

const ProfilePic = styled.img`
    grid-column: 3;
    grid-row: 2;
    place-self: start center;

    width: 12.5rem;
    object-fit: cover;
    object-position: top center;
    scale: -1 1;

    border-radius: 1.7rem;

    @media screen and (max-width: ${process.env.MOBILE_WIDTH_THRESHOLD}px){
        place-self: center;
    }
`

const TextBlock = styled.div`
    grid-row: 2;
    grid-column: 1/3;
    h2 {
        margin-top: 0;
        text-align: center;
    }
    &:last-child {
        grid-row: 3;
        grid-column: 1/-1;
    }
    ul {
        list-style: none;
        display: flex;
        flex-flow: column nowrap;
        gap: 1.5rem;
    }
    p, ul {
        margin-left: 2rem;
        padding: 0;
    }
`

export default function About() {
    const content = getContent().pages.about;
    return (
        <AboutSection>
            <h1>{content.title}</h1>
            <ProfilePic src={portrait} />
            {content.blocks.map((block, i) => {
                let output = [<h2 key="title">{block.title}</h2>];
                if (block.paragraphs) {
                    output.push(...block.paragraphs.map((para, i) => <p key={i}>{para}</p>))
                }
                else if (block.list) {
                    output.push(<ul key="list">{block.list.map((list, i) => <li key={i}>{list.icon + ' ' + list.text}</li>)}</ul>);
                }
                return <TextBlock key={'b' + i}>{output}</TextBlock>;
            })}
        </AboutSection>
    )
}