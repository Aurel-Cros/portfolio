import './assets/icons/fr-flag.svg';
import './assets/icons/uk-flag.svg';
import './assets/icons/github-white.svg';
import './assets/icons/linkedin.svg';
import './assets/icons/about.svg';
import './assets/icons/projects.svg';
import './assets/icons/contact-darkblue.svg';

import './assets/images/favicon.png';

import './CV_AURELIEN_CROS_Sept_24.pdf';

import FontStyles from './styles/globalFonts';
import GlobalStyles from './styles/globalStyles';

import { createRoot } from 'react-dom/client';
import App from './components/App';

const root = createRoot(document.querySelector("#root"));

root.render(
   <>
      <FontStyles />
      <GlobalStyles />
      <App />
   </>
);