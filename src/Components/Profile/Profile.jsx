import profileCss from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div className={profileCss.profile}>
			<ProfileInfo />
			<MyPosts
                state={props.profilePage}
                dispatch={props.dispatch}
            />
		</div>
	);
};

export default Profile;
