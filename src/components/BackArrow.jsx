import { Link, useLocation } from "react-router-dom";

export default function () {
    const location = useLocation();
    const { hash, pathname, search } = location;
    const target = /\/project\/(?:.+)/.test(pathname) ? "/my-work" : "/"
    console.log(pathname)
    return pathname !== "/" ? (
        <div className="back-arrow">
            <Link to={target}>Retour</Link>
        </div>
    ) : null
}