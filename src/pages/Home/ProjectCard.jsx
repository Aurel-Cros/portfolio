import styled from 'styled-components';
import * as mixins from '../../styles/mixins';
import colors from '../../styles/colors';

import getContent from '../../utils/getContent';
import Button from "../../components/Button";
import { icons } from "../../components/Icons";

const StyledProjectCard = styled.div`
    width: 45%;
    ${mixins.blocks.bdradius}
    ${mixins.glassmorph.light}
    padding: 0.9rem;
    display: grid;
    grid-template-columns: 25% 1fr;
    grid-template-rows: 1fr;
    place-items: center;
    gap: 1rem;
`
const ColumnLeft = styled.div`
    grid-column: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
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

const ProjectDate = styled.p`
    ${mixins.text.subtext}
    margin: 0;
    padding: 1rem 1.5rem;
    background-image: url(${icons.all.calendar});
    background-repeat: no-repeat;
    background-size: 1.2rem;
    background-position: 0 50%;
`
const ProjectLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding-bottom: 1.5rem;
`
const DemoLink = styled.a`
    padding: 0.5% 2rem;
    background-image: url(${icons.all.popout});
    background-size: 1.5rem;
    background-position: 0 50%;
    background-repeat: no-repeat;
    &.inactive {
        filter: grayscale(100%) contrast(10%);
        cursor: default;
    }
`

export default function ProjectCard({ $data }) {
    const content = getContent().pages.home;
    console.log($data)
    return (
        <>
            <StyledProjectCard>
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
                    <ProjectDate>{$data.text.date}</ProjectDate>
                </ColumnLeft>
                <ColumnRight>
                    <p>{$data.text.shortText}</p>
                    <ProjectLinks>
                        <DemoLink href={$data.demoLink} className={$data.demoLink ? null : 'inactive'}>Live demo</DemoLink>
                        <Button>{content.More_details}</Button>
                    </ProjectLinks>
                </ColumnRight>
            </StyledProjectCard>
        </>
    )
}