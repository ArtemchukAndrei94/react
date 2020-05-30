import React from 'react';
import Post from "./post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
    let postsEl = props.posts.map(p => <Post message={p.message} likes={p.likes}/>);
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={classes.myPosts}>
            <textarea ref={newPostElement}
                      onChange={onChangePost}
                      value={props.newPostText}/>
            <div>
                <button onClick={ onAddPost }>add post</button>
            </div>
            {postsEl}
        </div>
    );

};

export default MyPosts;