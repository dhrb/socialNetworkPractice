import React from "react";
import profileCss from './Profile.module.css';
import Post from './MyPosts/Post'


const Profile = () => {
    return (
        <div>
            <div className={profileCss.profileImage}>
                <img className={profileCss.image} src='https://mocah.org/thumbs/4562144-simple-simple-background-primary-colors-minimalism-geometry-abstract.png' alt='bgcontentimg'/>
            </div>

            <div className={profileCss.avaInfo}>

            </div>
            <div className={profileCss.myPostItem}>
                <div className={profileCss.newPost}>
                    <span className={profileCss.newPost} New post> New Post </span>
                    <br/>
                    <textarea className='postText' />
                    <button className={profileCss.postBtn}> Add post</button>
                    <button className={profileCss.delBtn}> Delete post</button>
                </div>
                <Post />
            </div>
        </div>
    )
}

export default Profile;