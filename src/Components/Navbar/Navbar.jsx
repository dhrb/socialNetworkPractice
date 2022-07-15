import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import navProfileIcon from "./../../assets/navProfileIcon.svg";
import navMessages from "./../../assets/navMessages.svg";
import navNews from "./../../assets/navNews.svg";
import navMusic from "./../../assets/navMusic.svg";
import navSettings from "./../../assets/navSettings.svg";
import FriendsList from "./FriendsList/FriendsList";

const Navbar = (props) => {
	// const friendsNames = props.friendsNav.dialogsData.map((fn) => <FriendsList name={fn.name} id={fn.id} />);

	return (
		<div className={style.nav}>
			<div className={style.nav}>
				<div className={style.navItem}>
					<img src={navProfileIcon} className={style.navIcon} alt="navIcon" />
					<NavLink to="/profile">Profile</NavLink>
				</div>
				<div className={style.navItem}>
					<img src={navMessages} className={style.navIcon} alt="navIcon" />
					<NavLink to="/dialogs">Messages</NavLink>
				</div>
				<div className={style.navItem}>
					<img src={navNews} className={style.navIcon} alt="navIcon" />
					<NavLink to="/news">News</NavLink>
				</div>
				<div className={style.navItem}>
					<img src={navMusic} className={style.navIcon} alt="navIcon" />
					<NavLink to="/music">Music</NavLink>
				</div>
				<div className={style.navItem}>
					<img src={navSettings} className={style.navIcon} alt="navIcon" />
					<NavLink to="/settings">Settings</NavLink>
				</div>
			</div>
			<div className={style.navFriends}>
				{/*{friendsNames}*/}
			</div>
		</div>
	);
};

export default Navbar;
