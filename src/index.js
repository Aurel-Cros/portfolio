import './assets/icons/fr-flag.svg';
import './assets/icons/uk-flag.svg';
import './assets/icons/github-white.svg';
import './assets/icons/linkedin.svg';
import './assets/icons/about.svg';
import './assets/icons/projects.svg';
import './assets/icons/contact-darkblue.svg';
import './style.scss';

import { createRoot } from 'react-dom/client';
import App from './components/App.jsx';

const root = createRoot(document.querySelector("#root"));

root.render(
   <App />
);