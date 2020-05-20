import React from 'react';
import Post from "./post/Post";
import classes from "./MyPosts.module.css";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";


const MyPosts = (props) => {
    let postsEl = props.posts.map(p => <Post message={p.message} likes={p.likes}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onChangePost = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={classes.myPosts}>
            <textarea ref={newPostElement} onChange={onChangePost} value={props.newPostText}/>
            <div>
                <button onClick={ addPost }>add post</button>
            </div>
            {postsEl}
        </div>
    );

};

export default MyPosts;