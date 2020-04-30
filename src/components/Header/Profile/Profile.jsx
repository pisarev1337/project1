import React from 'react';
import p from './Profile.module.css'
import {NavLink} from "react-router-dom";

const MyProfile = (props) => {
    return (


        <div className={p.Profile}>
            <NavLink exact ActiveClassName={p.MyProfile} to='/Profile'>My Profile</NavLink>
            <a className={p.MyProfile} href='#'>My Wall</a>
            <a className={p.MyProfile} href='#'>My Friends</a>
            <a className={p.MyProfile} href='#'>My Setting</a>
            <a className={p.LogOut} href='#'><img
                src='https://www.clipartmax.com/png/full/205-2059350_logoff-icon-windows-10-alternative-clipart-design-u2022-arrow-with-circle-png.png'/>
            </a>

        </div>

    )
}
export default MyProfile