import styled from 'styled-components';
import * as mixins from '../../styles/mixins';
import colors from '../../styles/colors';

import Button from "../../components/Button";
import { icons } from "../../components/Icons";
import getContent from '../../utils/getContent';
import ProjectLinks from '../../components/ProjectLinks';

const StyledProjectCard = styled.div`
    ${mixins.blocks.bdradius}
    ${mixins.glassmorph.light}
    padding: 0.9rem;
    display: grid;
    grid-template-columns: 25% 1fr;
    grid-template-rows: auto 1fr auto;
    place-items: center;
    gap: 1rem;
`
const ProjectTitle = styled.h3`
    grid-row: 1;
    grid-column: 2;
    place-self: center;
    font-size: 1.25rem;
    font-weight: 500;
    font-variant: all-small-caps;
    letter-spacing: 0.025rem; 
    text-align: justify;
`
const ColumnLeft = styled.div`
    grid-column: 1;
    grid-row: 1 / -1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
`
const ColumnRight = styled.div`
    grid-column:2;
    grid-row: 2/-1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 1rem;
    height: 100%;
`
const TechStack = styled.div`
    border-radius: 0.68966rem;
    border: 1px solid ${colors.greyText};
    background: ${colors.whiteBase25};

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    padding: 0.5rem;
    gap: 0.5rem;
    img {
        max-width: 2rem;
        max-height: 1.5rem;
    }
`
const ProjectBadge = styled.img`
    object-fit: cover;
    object-position: center center;
    width: 5.4rem;
    height: 5.4rem;
    border-radius: 50%;
`

export default function ProjectCard({ $data }) {
    const content = getContent().pages.home;
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
                                    <img key={techName} src={techIcon} alt={techName} title={techName} />
                                )
                            })
                        }
                    </TechStack>
                    <ProjectLinks $data={$data}>
                    </ProjectLinks>
                </ColumnLeft>
                <ColumnRight>
                    <p>{$data.currentLangText.shortText}</p>
                    <Button to="/my-work">{content.More_details}</Button>
                </ColumnRight>
            </StyledProjectCard >
        </>
    )
}