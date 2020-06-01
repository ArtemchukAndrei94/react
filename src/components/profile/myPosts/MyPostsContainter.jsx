// eslint-disable-next-line no-unused-vars
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*const MyPostsContainer = () => {
    // let state = props.store.getState();


    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onChangePost = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                };


                return <MyPosts updateNewPostText={onChangePost}
                         addPost={addPost}
                         posts={state.profilePage.posts}
                         newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    );

};*/

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;