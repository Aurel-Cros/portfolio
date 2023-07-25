import { useContext } from 'react';
import { LangContext } from './context.jsx';
import data from '../data/content.json';

export default function getContent() {
    const { lang } = useContext(LangContext);
    console.log(data);
    return data[lang];
}