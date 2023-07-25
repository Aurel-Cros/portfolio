import { useContext } from 'react';
import { LangContext } from './context.jsx';
import data from '../data/content.js';

export default function getContent() {
    const { lang } = useContext(LangContext);
    return data[lang];
}