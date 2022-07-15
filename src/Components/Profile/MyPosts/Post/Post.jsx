import styles from './Post.module.css';
import postImg from './../../../../assets/postItem.png'


const Post = (props) => {
    return (
        <div className = {styles.post}>
            <div className = {styles.container}>
                <img 
                    src = {postImg}
                    alt='postImage'
                    className = {styles.postImg}    
                />
                { props.posts }
            </div>
            <div className = {styles.likes}>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )
}

export default Post;