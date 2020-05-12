import React from 'react';
import Post from "./post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = (props) => {
debugger
    let postsEl = props.posts.map(p => <Post message={p.message} likes={p.likes}/>);

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