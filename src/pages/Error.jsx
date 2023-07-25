import getContent from '../utils/contentManager.js';

export default function Error() {
    const content = getContent();
    return (
        <>
            <h1>{content.error.e404}</h1>
        </>
    )
}