import React from 'react';
import Post from "./post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
    let postsEl = props.posts.map(p => <Post message={p.message} likes={p.likes}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    };

    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.dispatch( {type: 'UPDATE-NEW-POST-TEXT', newText: text});
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