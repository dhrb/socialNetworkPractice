const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {profilePage: {
		posts: [
			{ id: 1, post: "hi, pots" , likesCount: 12 },
			{ id: 2, post: "it`s my first post", likesCount: 8 },
			{ id: 3, post: "third my post", likesCount: 8 },
			{ id: 4, post: "my four post", likesCount: 8 },
			{ id: 5, post: "posssssssssssttttt", likesCount: 8 },
			{ id: 6, post: "very nice post", likesCount: 8 },
		],
		newPostText: "",
	},}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 7,
				post: action.post,
				likesCount: 0,
			};
			state.profilePage.posts.push(newPost);
			state.profilePage.newPostText = "";
			return state;
		case UPDATE_NEW_POST_TEXT:
			state.profilePage.newPostText = action.text;
			return state;
		default:
			return state;
	}
};
export let addPostActionCreator = (text) => {
	return {
		post: text,
		type: ADD_POST,
	};
};

export let updateNewPostTextActionCreator = (text) => {
	return {
		type: UPDATE_NEW_POST_TEXT,
		newText: text,
	};
};

export default profileReducer;
