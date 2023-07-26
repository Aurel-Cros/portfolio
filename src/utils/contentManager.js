import { useContext } from 'react';
import { LangContext } from './context';
import data from '../data/content';

export default function getContent() {
    const { lang } = useContext(LangContext);
    return data[lang];
}