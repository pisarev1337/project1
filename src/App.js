import React from 'react';
import App from './App.css';
import Header from './components/Header/Header.jsx';
import Fonts from './Fonts/Fonts.css';
import LeftNavbar from "./components/LeftNavbar/LeftNavbar";
import Content from "./components/Content/Content";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import Message from './components/LeftNavbar/Message/Message';


const Web = (props) => {
    let DialogsName = [
        {id: 1, name: 'Nikita'},
        {id: 2, name: 'Kseniya'},
        {id: 3, name: 'Timofey'},
        {id: 4, name: 'Evgeniy'},
        {id: 5, name: 'Vlad'},
        {id: 6, name: 'Maksim'}
    ]
    return (
        <body>
        <BrowserRouter>
            <div>
                <Header/>
                <LeftNavbar/>

                <Route path='/News' component={Content}/>
                <Route path='/Profile' component={Profile}/>
                <Route path='/Message' render={() => <Message DialogsName={DialogsName}/>}/>

            </div>
        </BrowserRouter>
        </body>

    )
}

export default Web;
