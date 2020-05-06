import React from 'react';
import MyPosts from "./myPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' alt=''/>
            </div>
            <div>
                ava + desc
            </div>
            <MyPosts/>
        </div>
    );

};

export default Profile;