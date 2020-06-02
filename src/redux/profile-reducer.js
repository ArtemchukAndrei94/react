const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hi", likes: 12},
        {id: 2, message: "It`s my first post", likes: 25},
        {id: 3, message: "second post", likes: 124}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST : {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            };
            debugger
            let newState = {...state};
            newState.posts = [...state.posts];
            newState.posts.push(newPost);
            newState.newPostText = "";
            return newState;
        }
        case UPDATE_NEW_POST_TEXT: {
            let newState = {...state};
            newState.newPostText = action.newText;
            return newState;
        }
        default:
            return state;

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

export default profileReducer;