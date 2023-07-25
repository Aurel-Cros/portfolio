import content from '../data/content.json';
import { useContext } from 'react';
import { LangContext } from './context.jsx';

export default function getContent(id) {
    const { lang } = useContext(LangContext);
    return content[lang][id];
}