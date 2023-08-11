import { styled } from 'styled-components';
import ProjectCardLg from './ProjectCardLg';
import getContent from '../../utils/getContent';
import getProjects from '../../utils/getProjects';

const SectionTitle = styled.h1`
    text-align: center;
`
const ProjectsList = styled.div`
    display: flex;
    flex-flow: column nowrap;
    gap: 1.2rem;
`
export default function Work() {
    const content = getContent().pages.work;
    const projects = getProjects();
    return (
        <>
            <SectionTitle>{content.title}</SectionTitle>

            <ProjectsList>
                {projects.map(project =>
                    <ProjectCardLg key={project.name + project.date} $data={project}></ProjectCardLg>
                )}
            </ProjectsList>
        </>
    )
}