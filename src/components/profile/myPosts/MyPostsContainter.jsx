import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
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

};

export default MyPostsContainer;