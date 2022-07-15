import style from './../Navbar.module.css'
import userAvatar from './../../../assets/userAvatar.jpg'

const FriendsList = (props) => {

    return (
        <div className={style.friendItem}>
            <img src={userAvatar} className={style.navFrinedsAvatar} alt='navFriendList'/>
            <br />
            {props.name}
        </div>
    )
}

export default FriendsList;