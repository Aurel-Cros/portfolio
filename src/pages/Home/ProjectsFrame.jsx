import getContent from "../../utils/getContent";
import getProjects from "../../utils/getProjects";
import ProjectCard from "./ProjectCard";

import Button from "../../components/Button";

import styled from 'styled-components';
import * as mixins from '../../styles/mixins';

const ProjectsSection = styled.section`
`

const SectionTitle = styled.h2`
    margin-left: 3.2rem;
`
const ProjectsList = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    gap: 1.2rem;
`

export default function ProjectsFrame() {
    const content = getContent().pages.home;
    const projects = getProjects();
    return (
        <ProjectsSection>
            <SectionTitle>{content.Projects}</SectionTitle>
            <ProjectsList>
                {projects.map(project =>
                    <ProjectCard key={project.name + project.date} $data={project}></ProjectCard>
                )}
            </ProjectsList>
        </ProjectsSection>
    )
}