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
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.messageText;
    } else if (action.type === SEND_MESSAGE) {
        let msg = state.newMessageText;
        let newMsg = {id: 5, message: msg};
        state.newMessageText = "";
        state.messages.push(newMsg);
    }

    return state;
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