import React from "react";
import profileCss from './Profile.module.css';
import Post from './MyPosts/Post'
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={profileCss.profile}>
            <ProfileInfo />
            <Post />
            <Post />
        </div>
    )
}

export default Profile;