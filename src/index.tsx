import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppHeader from './components/layouts/AppHeader';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/compat/app';
import firebaseConfig from './firebase-config';
import { ChakraProvider } from "@chakra-ui/react"

firebase.initializeApp(firebaseConfig)

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <AppHeader />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
