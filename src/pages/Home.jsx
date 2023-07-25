import { useContext } from "react";
import { LangContext } from '../utils/context.jsx';
import { Link } from "react-router-dom";

export default function Home() {
    const { lang, setLang } = useContext(LangContext);
    const frTitle = 'Page d\'accueil';
    const enTitle = 'Home page';

    return (
        <div>
            <h1>{lang === 'fr' ? frTitle : enTitle}</h1>
            <Link to="/nowhere">This should be an error.</Link>
        </div>
    )
}