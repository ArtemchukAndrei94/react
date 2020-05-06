import React from 'react';
import Post from "./post/Post";

const MyPosts = () => {
    return (
         <div>
            <textarea></textarea>
             <button>save</button>
             <Post message='Hi'/>
             <Post message='It`s my first post'/>
             <Post message='second post'/>
        </div>
    );

};

export default MyPosts;