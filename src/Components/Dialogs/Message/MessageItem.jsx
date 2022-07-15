import styles from './../Dialogs.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';

const MessageItem = (props) => {
    let path = "/dialog/" + props.id;

    return (
        <div className = {styles.messageItem}>
            <NavLink to = {path}>
                {props.message}
            </NavLink>
        </div>
    )
}

export default MessageItem;