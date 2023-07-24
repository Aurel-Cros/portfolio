import { useParams } from "react-router-dom";
export default function Project() {
    const { projectId } = useParams();
    return (
        <div>
            <h1>Page projet : {projectId}</h1>
        </div>
    )
}