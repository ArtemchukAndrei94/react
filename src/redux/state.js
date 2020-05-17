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
            ]
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
        if (action.type === 'ADD-POST') {
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
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._rerenderEntireTree(this._state);
        }
    }
};

export default store;
window.store = store;