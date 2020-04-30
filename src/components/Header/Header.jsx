import React from 'react';
import s from './Header.module.css';
import Profile from './Profile/Profile';

const Header = () => {
    return (
        <div className={s.Header}>
            <a href='#'> <img src='https://sun9-4.userapi.com/c857732/v857732308/cde62/NHH5coo266s.jpg'/> </a>
            <a className={s.Name} href='#'>MySN</a>
            <Profile/>


        </div>


    )
}
export default Header;