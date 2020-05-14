import {rerenderEntireTree} from "./../render";


let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi", likes: 12},
            {id: 2, message: "It`s my first post", likes: 25},
            {id: 3, message: "second post", likes: 124}
        ]

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
    }

};

export let addPost = (postMessage) => {
    let newPost = {
        id : 5,
        message: postMessage,
        likes: 0
    };
  state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export default state;