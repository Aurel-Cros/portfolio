import getContent from "../../utils/getContent";
import styled from 'styled-components';
import * as mixins from '../../styles/mixins';
import { Link } from "react-router-dom";

const ErrorFrame = styled.div`
    ${mixins.glassmorph.medium};
    ${mixins.blocks.bdradius};
    width: 100%;
    padding: 1rem;
`
export default function Error() {
    const content = getContent().pages.error;
    return (
        <ErrorFrame>
            <h1>{content.e404}</h1>
            <Link to="/">Retour</Link>
        </ErrorFrame>
    )
}