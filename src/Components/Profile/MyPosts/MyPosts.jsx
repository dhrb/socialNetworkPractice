import Post from "./Post/Post";
import styles from "./MyPosts.module.css";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props) => {
	const postElements = props.state.profilePage.posts.map((p) => <Post posts={p.post} likesCount={p.likesCount} />);
	const newPostElement = React.createRef();

	let addPost = () => {
		let text = newPostElement.current.value;
		let action = addPostActionCreator(text)
		text === '' ?
			alert('Введите комментарий')
		:
			props.dispatch(action);
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		let action = updateNewPostTextActionCreator(text)
		props.dispatch(action)
	}

	return (
		<div className={styles.myPosts}>
			<div className={styles.container}>
				<div className={styles.newPostArea}>
					<h3>My post</h3>
					<textarea
						onChange={onPostChange}
						placeholder={'введите сообщение'}
						ref={newPostElement}
						value={props.newPostText}/>
				</div>
				<div className={styles.addPostBtn}>
					<button onClick={addPost}>add post</button>
				</div>
			</div>
			{postElements}
		</div>
	);
};

export default MyPosts;
