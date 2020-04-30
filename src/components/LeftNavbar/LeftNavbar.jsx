import React from 'react';
import L from './LeftNavbar.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";


const LeftNavbar = (props) => {


    return (

        <div className={L.LeftBar}>
            <a className={L.LeftNav} href='#'>My Page</a> <br/>
            <NavLink to='/News' ActiveClassName={L.active}>My News</NavLink> <br/>
            <NavLink to='Message' className={L.LeftNav}>My Message</NavLink> <br/>
            <a className={L.LeftNav} href='#'>My Photos</a> <br/>
            <a className={L.LeftNav} href='#'>My Music</a> <br/>
            <a className={L.LeftNav} href='#'>My Videos</a> <br/>
            <a className={L.LeftNav} href='#'>My Groups</a> <br/>
            <a className={L.LeftNav} href='#'>My Games</a> <br/>

        </div>

    )
}
export default LeftNavbar;