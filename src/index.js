import './index.css';
import React from 'react';
import ReactDom from 'react-dom/client'; 
import App from './App';
import {Provider} from './context/books';

const el = document.getElementById('root');
const root = ReactDom.createRoot(el);

root.render(
    <Provider>
    <App />
    </Provider>
);