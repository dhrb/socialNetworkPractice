import React from "react";
import profileInfoCss from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={profileInfoCss.Info}>

            <div className={profileInfoCss.mainInfo}>
                <img className={profileInfoCss.userImage}
                     src='https://mocah.org/thumbs/4562144-simple-simple-background-primary-colors-minimalism-geometry-abstract.png'
                     alt='bgcontentimg'/>
                <br />
                <span className={profileInfoCss.userName}>
                        {props.name + ' ' + props.surname}
                    </span>
            </div>
            <div className={profileInfoCss.profile}>
                <div className={profileInfoCss.createPost}>
                    <textarea
                        className={profileInfoCss.textArea}
                        placeholder={'Whats new?'}
                    ></textarea>
                    <div className={profileInfoCss.postBtn}>
                        <button> Send </button>
                    </div>
                </div>
            </div>
    </div>
    )
}

export default ProfileInfo;