import React from "react";
import styles from "./Dialogs.module.css";
import MessageItem from "./Message/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {
	const dialogElements = props.state.dialogsPage.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />);
	const messageElements = props.state.dialogsPage.messagesData.map((m) => <MessageItem message={m.message} />);
	
	const messageArea = React.createRef();
	const userArea = React.createRef();
	
	let addMessage = () => {
		let text = messageArea.current.value;
		let user = userArea.current.value;
		let action = addMessageCreator(text, user);
		props.dispatch(action)
	}

	let onDataChange = () => {
		let text = messageArea.current.value
		let user = userArea.current.value;
		let action = updateNewMessageCreator(text, user);
		props.dispatch(action)
	}

	return (
		<div className={styles.dialogs}>
			<div className={styles.addDialog}>
				<div className={styles.newMessage}>
					<textarea
						className={styles.addUser}
						value={ props.newUserName }
						ref={userArea} 
						onChange={ onDataChange }
					/>
					<textarea
						onChange={ onDataChange }
						value={props.newMessageText}
						ref={messageArea}
					/>
					<button onClick={ addMessage } >add dialog</button>
				</div>
			</div>
			<div className={styles.dialogsData}>
				<div className={styles.dialog}>
					{dialogElements}
				</div>
				<div className={styles.message}>
					{messageElements}
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
