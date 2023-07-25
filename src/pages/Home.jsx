import { Link } from "react-router-dom";
import getContent from '../utils/contentManager.js';

export default function Home() {
    const content = getContent().pages.home;
    return (
        <>
            <div className="intro-frame">
                <div className="title-name">
                    <div>
                        <p>{content.Hi}</p>
                        <h1>Aurélien Cros</h1>
                    </div>
                    <div>
                        <p>{content.and_im} <span className="sub-title">{content.web_dev}</span></p>
                    </div>
                </div>
                <img src="../assets/images/portrait.jpg" alt="Photo de profil" />
            </div>
            <Link to="/nowhere">Error test.</Link>
        </>
    )
}