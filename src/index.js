import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/app/app";
import {books} from "./mocks/books";


ReactDOM.render(
    <App books={books} />,
    document.getElementById('root')
);
