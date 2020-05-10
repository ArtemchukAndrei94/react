import React from 'react';
import Post from "./post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: "Hi", likes: 12},
        {id: 2, message: "It`s my first post", likes: 25},
        {id: 3, message: "second post", likes: 124}
    ];

    let postsEl = postsData.map(p => <Post message={p.message} likes={p.likes}/>);

    return (
        <div className={classes.myPosts}>
            <textarea></textarea>
            <div>
                <button>save</button>
            </div>
            {postsEl}
        </div>
    );

};

export default MyPosts;