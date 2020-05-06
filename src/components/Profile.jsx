import React from 'react';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.profile}>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'/>
            </div>
            <div>
                ava + desc
            </div>
            <div>
                my post
                <div>
                    new post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
            </div>
        </div>
    );

};

export default Profile;