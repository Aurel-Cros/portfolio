import styled from 'styled-components';
import * as mixins from '../../styles/mixins';
import colors from '../../styles/colors';
import formatText from '../../utils/formatText';
import { icons } from "../../components/Icons";
import getContent from "../../utils/getContent";

const StyledProjectCard = styled.div`
    ${mixins.blocks.bdradius}
    ${mixins.glassmorph.light}
    padding: 0.9rem;
    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-columns: 20% 1fr;
    place-items: center;
    gap: 1rem;
`
const ColumnLeft = styled.div`
    grid-row: 1/-1;
    grid-column: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    height: 100%;
`
const ColumnRight = styled.div`
    grid-row: 2;
    grid-column:2;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1rem;
    height: 100%;
    p {
        margin: 0;
    }
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
    grid-row: 1;
    grid-column: 2;
    place-self: center;
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
const ProjectLinks = styled.div`
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
export default function ProjectCardLg({ $data }) {
    const content = getContent().pages.work;
    return (
        <>
            <StyledProjectCard>
                <ProjectTitle>{$data.name}</ProjectTitle>
                <ColumnLeft>
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
                        <GitLink className="underline" href={$data.github} target="_blank">GitHub</GitLink>
                        <DemoLink href={$data.demoLink} target="_blank" className={($data.demoLink ? null : 'inactive') + ' underline'}>{content.seeOnline}</DemoLink>
                    </ProjectLinks>
                </ColumnLeft>
                <ColumnRight>
                    {formatText($data.currentLangText.longText)}
                </ColumnRight>
            </StyledProjectCard>
        </>
    )
}