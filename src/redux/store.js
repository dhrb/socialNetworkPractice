import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
	_callSubscriber() {
		console.log("state changed");
	},
	_state: {
		profilePage: {
			posts: [
				{ id: 1, post: "hi, pots" , likesCount: 12 },
				{ id: 2, post: "it`s my first post", likesCount: 8 },
				{ id: 3, post: "third my post", likesCount: 8 },
				{ id: 4, post: "my four post", likesCount: 8 },
				{ id: 5, post: "posssssssssssttttt", likesCount: 8 },
				{ id: 6, post: "very nice post", likesCount: 8 },
			],
			newPostText: "",
		},
		dialogsPage: {
			dialogsData: [
				{ id: 1, name: "Dimych" },
				{ id: 2, name: "Andrew" },
				{ id: 3, name: "Sveta" },
				{ id: 4, name: "Sasha" },
				{ id: 5, name: "Viktor" },
				{ id: 6, name: "Valera" },
			],
			newUserName: "",
			messagesData: [
				{ id: 1, message: "hello Dmitry" },
				{ id: 2, message: "hi, Yooooo" },
				{ id: 3, message: "hello Dmitry" },
				{ id: 4, message: "hello Dmitry" },
				{ id: 5, message: "hello Dmitry" },
				{ id: 6, message: "hello Dmitry" },
			],
			newMessageText: "",
		},
		sidebar: {},
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._callSubscriber(this._state);
	},
};

export default store;
