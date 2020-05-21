const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi", likes: 12},
                {id: 2, message: "It`s my first post", likes: 25},
                {id: 3, message: "second post", likes: 124}
            ],
            newPostText: ''
        },
        dialogsPage: {
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
        },
    },
    _rerenderEntireTree() {
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {
        debugger
        if (action.type === ADD_POST) {
            if (this._state.profilePage.newPostText !== "") {
                let newPost = {
                    id: 5,
                    message: this._state.profilePage.newPostText,
                    likes: 0
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = "";
                this._rerenderEntireTree(this._state);
            }
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireTree(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.messageText;
            this._rerenderEntireTree(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let msg = this._state.dialogsPage.newMessageText;
            let newMsg = {id: 5, message: msg};
            this._state.dialogsPage.messages.push(newMsg);
            this._state.dialogsPage.newMessageText = "";
            this._rerenderEntireTree(this._state);
        }
    }
};


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
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

export default store;
