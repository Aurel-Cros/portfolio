import styled from 'styled-components';
import * as mixins from '../styles/mixins';
import { icons } from "./Icons";
import getContent from "../utils/getContent";

const ProjectDate = styled.p`
    ${mixins.text.subtext}
    grid-column: 1;
    margin: 0;
    &:before {
        display: inline-block;
        content: "";
        margin: -0.33rem 0.5rem;
        width: 1.5rem;
        height: 1.5rem;
        background-image: url(${icons.all.calendar});
        background-size: 1.2rem;
        background-position: 0 50%;
        background-repeat: no-repeat;
    }
`
const Container = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 0.5rem;
`
const DemoLink = styled.a`
    &:before {
        background-image: url(${icons.all.popout});
    }
`
const GitLink = styled.a`
    &:before {
        background-image: url(${icons.all.githubdb});
    }
`
export default function ProjectLinks({ $data }) {
    const content = getContent().pages.work;
    return (
        <Container>
            <ProjectDate>{$data.currentLangText.date}</ProjectDate>
            <GitLink className="underline" href={$data.github} target="_blank">GitHub</GitLink>
            {$data.demoLink && <DemoLink href={$data.demoLink} target="_blank" className={($data.demoLink ? null : 'inactive') + ' underline'}>{content.seeOnline}</DemoLink>}
        </Container>
    )
}