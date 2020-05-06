import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img src='https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg'/>
            <label>{props.message}</label>
            <div>
                <span>
                    Like
                </span>
            </div>
        </div>
    )
};

export default Post;