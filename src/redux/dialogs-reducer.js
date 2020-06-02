const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Sveta"},
        {id: 3, name: "Anna"},
        {id: 4, name: "Vika"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Fine!!"}
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            let newState = {...state};
            newState.newMessageText = action.messageText;
            return newState;
        }
        case SEND_MESSAGE: {
            let newState = {...state};
            let msg = state.newMessageText;
            let newMsg = {id: 5, message: msg};
            newState.newMessageText = "";
            newState.messages.push(newMsg);
            return newState;
        }
        default:
            return state;
    }
};

export const newMessageTextActionCreator = (msg) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        messageText: msg
    }
};

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};

export default dialogsReducer;