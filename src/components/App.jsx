import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './NavBar.jsx';
import BackArrow from './BackArrow.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Work from '../pages/Work.jsx';
import Contact from '../pages/Contact.jsx';
import Project from '../pages/Project.jsx';
import Error from '../pages/Error.jsx';
import { LangProvider } from '../utils/context.jsx';

export default function App() {

    return (
        <Router>
            <LangProvider>
                <NavBar />
                <BackArrow />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-me" element={<About />} />
                        <Route path="/my-work" element={<Work />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/project/:project-id" element={<Project />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </main>
            </LangProvider>
        </Router>
    )
}