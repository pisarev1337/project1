import M from './Message.module.css'
import React from 'react';
import {NavLink} from "react-router-dom";


const MessageItem = (props) => {
    let path = '/Message/' + props.id;
    return (

        <NavLink to={path}> {props.name}</NavLink>
    )
}
const Message = (props) => {


    let UserName = props.DialogsName.map(dialog => <MessageItem name={dialog.name} id={dialog.id}/>)
    return (
        <div className={M.UserName}>

            {UserName}

        </div>

    )
}

export default Message;
