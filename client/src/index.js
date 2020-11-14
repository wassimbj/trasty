import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import './styles/normalize.css';

const GlobalStyles = createGlobalStyle`
  @media(max-width: 700px){
    body{ margin-bottom: 3rem; }
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root'),
);
