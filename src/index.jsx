import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { initializeApp } from 'firebase/app';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCjE87WMsk2alE368lC60CbB_p3H3UVQwM',
  authDomain: 'ariel-wallet.firebaseapp.com',
  projectId: 'ariel-wallet',
  storageBucket: 'ariel-wallet.appspot.com',
  messagingSenderId: '977417305422',
  appId: '1:977417305422:web:069fb96babe1aee66a721f',
  measurementId: 'G-BTKVYLFME3',
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
