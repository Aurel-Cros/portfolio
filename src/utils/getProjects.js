import { useContext } from 'react';
import { LangContext } from './context';
import projects from '../data/projects';

export default function getProjects() {
    const { lang } = useContext(LangContext);

    projects.forEach((project, index, array) => {
        array[index].currentLangText = project.text[lang];
    })

    return projects;
}