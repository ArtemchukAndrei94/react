import React from 'react';
import MyPosts from "./myPosts/MyPosts";
import ProfileInfo from "./profileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts/>
        </div>
    );
};

export default Profile;