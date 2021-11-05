import React from "react";
import postCss from './Post.module.css';

const db = {
    'name' : "Dmitriy",
    'surname' : "Horbatiuk"
}

const Post = () => {
    return (
        <div className={postCss.post}>
            <div className={postCss.postHeader}>
                <span>{db.name + ' ' + db.surname}</span>
                <span> 2 November 10:12PM </span>
            </div>
            <div className={postCss.postBody}>
                <p> Some text</p>
            </div>
            <div className={postCss.postFooter}>
                <span>136</span>
                <button> like </button>
            </div>
        </div>
    )
}

export default Post;