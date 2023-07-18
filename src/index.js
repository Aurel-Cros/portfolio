import './assets/fr-flag.svg';
import './assets/uk-flag.svg';

import './style.scss';

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

const root = createRoot(document.querySelector("#root"));

root.render(
   <App />
);