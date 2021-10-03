import React from "react";
import postCss from './Post.module.css';

let props = {
    'name' : "dmitriy",
    'surname' : "horbatiuk"
}

const Post = () => {
    return (<>
        <div className={postCss.post}>
            <div className={postCss.user}>
                <img className={postCss.userImg} src={'https://www.meme-arsenal.com/memes/f897ed14b527e2f2d0b05ee5ad006dee.jpg'} alt='userAvatar' />
                <p classname={postCss.user}>{props.name}</p>
                <span></span>
            </div>
            
        </div>
    </>
    )}

export default Post;

//user name +useravatar
//date
//comments