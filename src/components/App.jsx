import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar';
import BackArrow from './BackArrow';
import Home from '../pages/Home';
import About from '../pages/About';
import Work from '../pages/Work';
import Contact from '../pages/Contact';
import Project from '../pages/Project';
import Error from '../pages/Error';
import { LangProvider } from '../utils/context';

export default function App() {

    return (
        <Router>
            <LangProvider>
                <NavBar />
                <BackArrow />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-me" element={<About />} />
                    <Route path="/my-work" element={<Work />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/project/:project-id" element={<Project />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </LangProvider>
        </Router>
    )
}