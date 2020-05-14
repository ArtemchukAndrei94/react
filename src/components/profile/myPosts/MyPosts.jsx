import React from 'react';
import Post from "./post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
debugger
    let postsEl = props.posts.map(p => <Post message={p.message} likes={p.likes}/>);
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.p(text);
        newPostElement.current.value = "";
    };

    return (
        <div className={classes.myPosts}>
            <textarea ref={newPostElement}></textarea>
            <div>
                <button onClick={ addPost }>add post</button>
            </div>
            {postsEl}
        </div>
    );

};

export default MyPosts;