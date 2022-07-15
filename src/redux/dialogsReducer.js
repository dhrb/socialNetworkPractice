const SEND_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let initialState = {dialogsPage: {
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
    },}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE :
            let newMessageText = {
                id: '9',
                message: action.text,
            };
            let newUserName = {
                id: 9,
                name: action.user
            }
            state.dialogsPage.dialogsData.push(newUserName)
            state.dialogsPage.messagesData.push(newMessageText)
            return state;

        case UPDATE_NEW_MESSAGE_TEXT :
            state.dialogsPage.newUserName = action.user;
            state.dialogsPage.newMessageText = action.text;


            return state;
        default :
            return state;
    }
}

export let addMessageCreator = (text, user) => {
    return {
        type: SEND_MESSAGE,
        text: text,
        user: user,
    }
}

export let updateNewMessageCreator = (text, user) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        text: text,
        user: user,
    }
}

export default dialogsReducer;