
import './assets/images/favicon.png';

import FontStyles from './styles/globalFonts';
import GlobalStyles from './styles/globalStyles';

import { createRoot } from 'react-dom/client';
import App from './components/App';
import { Fragment } from 'react';

const root = createRoot(document.querySelector("#root"));

root.render(
   <Fragment>
      <FontStyles />
      <GlobalStyles />
      <App />
   </Fragment>
);