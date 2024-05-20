import styled from 'styled-components';
import * as mixins from '../../styles/mixins';
import colors from '../../styles/colors';
import formatText from '../../utils/formatText';
import { icons } from "../../components/Icons";
import ProjectLinks from '../../components/ProjectLinks';
import defaultImage from "../../assets/icons/cmd-app.svg";

const StyledProjectCard = styled.div`
    ${mixins.blocks.bdradius}
    ${mixins.glassmorph.light}
    padding: 0.9rem;
`
const ColumnLeft = styled.div`
    float:left;
    margin: 1rem;
    width: min(40%, 200px);
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
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
    margin: 0.5rem 0;
    font-size: 1.38rem;
    font-weight: 500;
    font-variant: all-small-caps;
    letter-spacing: 0.07586rem; 
    text-align: center;
`
const ProjectBadge = styled.img`
    object-fit: cover;
    object-position: center center;
    width: 5.4rem;
    height: 5.4rem;
    border-radius: 50%;
`

export default function ProjectCardLg({ $data }) {
    return (
        <>
            <StyledProjectCard>
                <ColumnLeft>
                    <ProjectBadge src={$data.image ?? defaultImage} />
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
                    <ProjectLinks $data={$data}>
                    </ProjectLinks>
                </ColumnLeft>
                <ProjectTitle>{$data.name}</ProjectTitle>
                {formatText($data.currentLangText.longText)}
            </StyledProjectCard>
        </>
    )
}