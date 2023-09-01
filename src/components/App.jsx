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
                <main>
                    <BackArrow />
                    <Routes>
                        <Route path={window.location.origin + "/"} element={<Home />} />
                        <Route path={window.location.origin + "/about-me"} element={<About />} />
                        <Route path={window.location.origin + "/my-work"} element={<Work />} />
                        <Route path={window.location.origin + "/contact"} element={<Contact />} />
                        <Route path={window.location.origin + "/project/:project-id"} element={<Project />} />
                        <Route path={window.location.origin + "*"} element={<Error />} />
                    </Routes>
                </main>
            </LangProvider>
        </Router>
    )
}