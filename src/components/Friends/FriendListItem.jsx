import PropTypes from 'prop-types';
// import clsx from 'clsx';
import css from './FriendListItem.module.css';
const getStatus = value => {
  console.log(value);
  if (value) {
    return css['friends_on'];
  } else {
    return css['friends_off'];
  }
};
function FriendListItem({ avatar, name, isOnline }) {
  console.log(isOnline);

  return (
    <div>
      <span className={getStatus(isOnline)} />
      <span>
        <img
          className={css.friends_avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.friends_name}>{name}</p>
      </span>
    </div>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
