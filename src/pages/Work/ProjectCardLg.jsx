import styled from 'styled-components';
import * as mixins from '../../styles/mixins';
import colors from '../../styles/colors';

import { icons } from "../../components/Icons";

const StyledProjectCard = styled.div`
    ${mixins.blocks.bdradius}
    ${mixins.glassmorph.light}
    padding: 0.9rem;
    display: grid;
    grid-template-columns: 20% 1fr;
    place-items: center;
    gap: 1rem;
`
const ColumnLeft = styled.div`
    grid-column: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
`
const ColumnRight = styled.div`
    grid-column:2;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    height: 100%;
`
const TechStack = styled.div`
    position: relative;
    border-radius: 0.68966rem;
    border: 1px solid ${colors.greyText};
    background: ${colors.whiteBase25};
    margin: 1rem auto 0; 
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;

    padding: 0.5rem;
    gap: 0.5rem;
    img {
        max-width: 2rem;
        max-height: 1.5rem;
    }
    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    &:before {
        position: absolute;
        content: "Tech stack :";
        font-variant: small-caps;
        top: 0;
        left: 50%;
        translate: -50% -100%;
        font-size: 1rem;
        overflow: hidden;
        white-space: nowrap;

    }
`
const ProjectTitle = styled.h2`
    margin: 0;
    font-size: 1.38rem;
    font-weight: 500;
    font-variant: all-small-caps;
    letter-spacing: 0.07586rem; 
    text-align: justify;
`
const ProjectBadge = styled.img`
    object-fit: cover;
    object-position: center center;
    width: 5.4rem;
    height: 5.4rem;
    border-radius: 50%;
`

const ProjectDate = styled.p`
    ${mixins.text.subtext}
    grid-column: 1;
    margin: 0;
    padding: 0.25rem 1.5rem;
    background-image: url(${icons.all.calendar});
    background-repeat: no-repeat;
    background-size: 1.2rem;
    background-position: 0 50%;
`
const ProjectLinks = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: 0.25rem;
`
const DemoLink = styled.a`
    padding : 0.25rem;
    padding-left: 1.5rem;
    background-image: url(${icons.all.popout});
    background-size: 1.25rem;
    background-position: 0 50%;
    background-repeat: no-repeat;
    &.inactive {
        filter: grayscale(100%) contrast(10%);
        cursor: default;
    }
`
const GitLink = styled(DemoLink)`
    background-image: url(${icons.all.githubdb});
`
export default function ProjectCardLg({ $data }) {
    return (
        <>
            <StyledProjectCard>
                <ColumnLeft>
                    <ProjectTitle>{$data.name}</ProjectTitle>
                    <ProjectBadge src={$data.image} />
                    <TechStack>
                        {
                            $data.techs.map(tech => {
                                const techIcon = icons.technologies[tech].icon;
                                const techName = icons.technologies[tech].name
                                return (
                                    <div key={techName}>
                                        <img src={techIcon} alt={techName} title={techName} /> {techName}
                                    </div>
                                )
                            })
                        }
                    </TechStack>
                    <ProjectLinks>
                        <ProjectDate>{$data.currentLangText.date}</ProjectDate>
                        <GitLink href={$data.github} target="_blank">GitHub</GitLink>
                        <DemoLink href={$data.demoLink} target="_blank" className={$data.demoLink ? null : 'inactive'}>Live demo</DemoLink>
                    </ProjectLinks>
                </ColumnLeft>
                <ColumnRight>
                    <p>{$data.currentLangText.longText}</p>
                </ColumnRight>
            </StyledProjectCard>
        </>
    )
}