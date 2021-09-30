import React from "react";
import profileCss from './Profile.module.css';

let props = {
    'name' : "Dmitriy ",
    'surname' : "Horbatiuk "
}

const Profile = () => {
    return (
        <div className={profileCss.content}>

            <div className={profileCss.profileImage}>
                <img className={profileCss.image} src='https://mocah.org/thumbs/4562144-simple-simple-background-primary-colors-minimalism-geometry-abstract.png' alt='bgcontentimg'/>
            </div>

            <div className={profileCss.avaInfo}>

                <span>{props.name}</span>
                <span>{props.surname}</span>
            </div>

            <div className={profileCss.myPostItem}>
                My posts
                <div className={profileCss.item}>
                    New post
                </div>
                <div className={profileCss.item}>
                    Post 1
                </div>
                <div className={profileCss.item}>
                    Post 2
                </div>
            </div>

        </div>
    )
}

export default Profile;