import React from "react";
import postCss from './Post.module.css';
import profile from './../'

const Post = (props) => {
    return (<>
        <div className={postCss.post}>
            <div className={postCss.user}>
                <img className={postCss.userImg} src={'https://www.meme-arsenal.com/memes/f897ed14b527e2f2d0b05ee5ad006dee.jpg'} alt='userAvatar' />
                <p classname={postCss.user}>{props.name + ' ' + props.surname}</p>
                <p><time type='datetime-local'>date</time></p>
            </div>
            
        </div>
    </>
    )}

export default Post;