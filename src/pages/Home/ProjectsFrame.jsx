import { Link } from "react-router-dom";

import getContent from "../../utils/getContent";
import getProjects from "../../utils/getProjects";
import ProjectCard from "./ProjectCard";

import styled from 'styled-components';
import * as mixins from '../../styles/mixins';

import colors from "../../styles/colors";

const ProjectsSection = styled.section`
`

const SectionTitle = styled.h2`
    margin-left: 3.2rem;
`
const ProjectsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    gap: 1.2rem;
`
const MoreProjects = styled(Link)`
    ${mixins.glassmorph.light}
    ${mixins.text.subtitle}
    color: ${colors.greyText};
    justify-self: center;
    align-self: center;
    padding: 0.85rem;
    justify-content: center;
    align-items: center;
    gap: 0.33rem;
    border-radius: 0.69rem;
    border: none;
    transition: all 200ms ease-in-out;

    &:hover {
        color: ${colors.whiteBase};
        background-color: ${colors.darkBlue50};
        letter-spacing: 0.1rem;
    }
`

export default function ProjectsFrame() {
    const content = getContent().pages.home;
    const projects = getProjects().filter((project, index) => index <= 2);
    return (
        <ProjectsSection>
            <SectionTitle>{content.Projects}</SectionTitle>
            <ProjectsList>
                {projects.map(project =>
                    <ProjectCard key={project.name + project.date} $data={project}></ProjectCard>
                )}
                <MoreProjects to="/my-work">{content.All_projects}</MoreProjects>
            </ProjectsList>
        </ProjectsSection>
    )
}