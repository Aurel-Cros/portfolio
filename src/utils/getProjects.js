import { useContext } from 'react';
import { LangContext } from './context';
import projects from '../data/projects';

export default function getProjects() {
    const list = [];
    const { lang } = useContext(LangContext);

    projects.forEach(project => {
        const projectWithLang = {
            name: project.name,
            techs: project.techs,
            image: project.image,
            text: project.text[lang]
        }
        list.push(projectWithLang);
    })

    return list;
}