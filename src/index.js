import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let DialogsName = [
    {id: 1, name: 'Nikita'},
    {id: 2, name: 'Kseniya'},
    {id: 3, name: 'Timofey'},
    {id: 4, name: 'Evgeniy'},
    {id: 5, name: 'Vlad'},
    {id: 6, name: 'Maksim'}
]
ReactDOM.render(
    <React.StrictMode>
        <App DialogsName={DialogsName}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
