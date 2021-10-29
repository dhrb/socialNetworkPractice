import React from "react";
import dialogsCss from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs" + props.id;

    return (
        <div className={dialogsCss.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const MessageItem = (props) => {
    return (
        <div className={dialogsCss.messageItem}>
                {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={dialogsCss.dialogs}>
            <div className={dialogsCss.dialog + '' + dialogsCss.active}>
                <DialogItem name='Dima' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Maks' id='3'/>
                <DialogItem name='Anton' id='4'/>
                <DialogItem name='Nikita' id='5'/>
            </div>
            <div className={dialogsCss.messages}>
                <MessageItem message='hello'/>
                <MessageItem message='its my second message'/>
                <MessageItem message='hello world'/>
                <MessageItem message='what about four message'/>
                <MessageItem message='this is five'/>
            </div>
        </div>
    )
}

export default Dialogs;