import React from 'react';
import Post from "./post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = () => {
    return (
        <div className={classes.myPosts}>
            <textarea>

            </textarea>
            <div><button>save</button></div>
            <Post message='Hi'/>
            <Post message='It`s my first post'/>
            <Post message='second post'/>
        </div>
    );

};

export default MyPosts;