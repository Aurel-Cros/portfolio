import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: ${({ $width }) => $width};
    aspect-ratio: 1;

    img {        
        width: 100%;
        aspect-ratio: 1;
        height: auto;
        object-fit: cover;
        object-position: top center;
        scale: -1 1;
        
        border-radius: 50%;
    }
    @media screen and (max-width: ${import.meta.env.MOBILE_WIDTH_THRESHOLD}px){
        align-self: center;
    }
    
    #bg {
    position: absolute;
    z-index: -1;
    filter: blur(2px);
    width: 100%;
    scale: 1.01;
    aspect-ratio: 1;
    border-radius: 50%;
    background-size: 100% 100%;
    background-position: center center;
    background-image: conic-gradient(from 0deg at 50% 50%, #00FFFFFF 0%, #00FF0EFF 12%, #F6FF00FF 24%, #FF6500FF 36%, #FF0000FF 48%, #FF009FFF 60%, #B000FFFF 72%, #073AFFFF 84%, #00FFFF 96%);

    animation: rotation 4s infinite linear;
    }
    @keyframes rotation {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
`

export default function GlowFrame({ src, width }) {
    return (<Container $width={width}>
        <div id="bg"></div>
        <img src={src} width="200" height="200" alt="Portrait"></img>
    </Container>)
}