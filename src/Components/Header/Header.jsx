import logo from "./../../assets/logo1.svg";
import notifyBell from "./../../assets/head_notify_24.svg";
import playSong from "./../../assets/playSong.svg";
import nextSong from "./../../assets/nextSong.svg";
import prevSong from "./../../assets/prevSong.svg";
import userAvatar from "./../../assets/headerAvatar.svg";
import style from "./Header.module.css";

const Header = () => {
	return (
		<div className={style.header}>
			<div className={style.headerLogo}>
				<img src={logo} className={style.logo} alt="logo" />
			</div>
			<div className={style.headerSearch}>
				<input type="text" className={style.headerSearchBox} placeholder="Search" />
			</div>
			<div className={style.headerNotifyBell}>
				<img src={notifyBell} className={style.notifyBell} alt="notifyBell" />
			</div>
			<div className={style.headerPlayer}>
				<img src={prevSong} className={style.playerItem} alt="prevSong" />
				<img src={playSong} className={style.playerItem} alt="playSong" />
				<img src={nextSong} className={style.playerItem} alt="nextSong" />
				<span className={style.playerSongName}> Snow Patrol — What If This Storm E...</span>
			</div>
			<div className={style.headerUserLogin}>
				<p className={style.userNameLogin}> Dmitriy </p>
				<img src={userAvatar} className={style.headerAvatar} alt="headerAvatar" />
			</div>
		</div>
	);
};

export default Header;
