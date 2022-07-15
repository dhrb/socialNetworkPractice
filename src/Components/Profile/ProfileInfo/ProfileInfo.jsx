import styles from './ProfileInfo.module.css';
import bg from './../../../assets/bgimage.jpg';

const ProfileInfo = () => {
    return (
        <div className = {styles.profileInfo}>
            <div className = {styles.profileBackground}>
                <img 
                    src={bg}
                    alt='profileBgImg'
                    className = {styles.profileInfoBgImg}
                />
            </div>
            <div className = {styles.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;