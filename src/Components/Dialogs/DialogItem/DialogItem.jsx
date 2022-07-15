import styles from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let path = "/dialog/" + props.id;

    return (
        <div className = {styles.dialogItem + ' ' + styles.active }>
            <NavLink to = {path}>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;