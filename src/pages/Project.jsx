import { useParams } from "react-router-dom";
export default function Project() {
    const { projectId } = useParams();
    return (
        <>
            <h1>Page projet : {projectId}</h1>
        </>
    )
}