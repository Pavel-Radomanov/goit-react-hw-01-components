import PropTypes from 'prop-types';
import css from './Profile.module.css';
// import defoltImage from '../defolt.jpg'; for webpuck path

// =======shablon=======
// const UserData = {
//   username: 'Jacques Gluke',
//   tag: 'jgluke',
//   location: 'Ocho Rios, Jamaica',
//   avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png', or defoltImage
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };
const Profile = props => {
  // const Profile = ({ avatar = defoltImage, username = 'noname', tag, location, stats }) => { 2-nd variant destructurisation
  const { avatar, username, tag, location, stats } = props;
  // console.log(avatar);
  return (
    <div className={css.profile_main}>
      {/* console.log(css.profile_main); */}
      <div className={css.profile_description}>
        <img src={avatar} alt="User avatar" className={css.profile_avatar} />
        <p className={css.profile_username}>{username}</p>
        <p className={css.profile_tag}>@{tag}</p>
        <p className={css.profile_location}>{location}</p>
      </div>
      <ul className={css.profile_stats}>
        <li>
          <span className={css.profile_label}>Followers </span>
          <span className={css.profile_quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={css.profile_label}>Views </span>
          <span className={css.profile_quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={css.profile_label}>Likes </span>
          <span className={css.profile_quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),

  //   Repeta video
};

export default Profile;
