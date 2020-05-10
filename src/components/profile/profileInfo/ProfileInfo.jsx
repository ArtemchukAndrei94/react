import React from 'react';
import classes from "./ProfileInfo.module.css";
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' alt=''/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + desc
            </div>
        </div>
    );

};

export default ProfileInfo;