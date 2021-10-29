import React from "react";
import profileCss from './Profile.module.css';
import Post from '../MyPosts/Post'


const UserInfo = (props) => {
    return (
        <div className={profileCss.userInfo}>
            <img className={profileCss.userImage}
                 src='https://mocah.org/thumbs/4562144-simple-simple-background-primary-colors-minimalism-geometry-abstract.png'
                 alt='bgcontentimg'/>
            <span className={profileCss.userName}>
                {props.name + ' ' + props.surname}
            </span>
        </div>
    )
}

const Profile = (props) => {
    return (
        <div className={profileCss.profile}>
            <div className={profileCss.userName}>
                <UserInfo name='Dima' surname='Horbatiuk'/>
            </div>
            <div className={profileCss.myPostItem}>
                <div className={profileCss.newPost}>
                    <textarea
                        className={profileCss.textArea}
                        placeholder={'Whats new?'}
                    />
                    <br />
                    <div className={profileCss.postBtn}>
                        <button className={profileCss.btn}>
                            Send
                        </button>
                    </div>
                    </div>
                </div>
                <Post />
        </div>
    )
}

export default Profile;