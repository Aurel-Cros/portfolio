import getContent from "../../utils/getContent";
import styled from 'styled-components';
import * as mixins from '../../styles/mixins';

const ErrorFrame = styled.div`
    ${mixins.glassmorph.medium};
    ${mixins.blocks.bdradius};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`
export default function Error() {
    const content = getContent().error;
    return (
        <ErrorFrame>
            <h1>{content.e404}</h1>
        </ErrorFrame>
    )
}