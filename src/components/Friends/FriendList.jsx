import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

function FriendList({ friendsData }) {
  const getStatus = value => {
    if (value) {
      return css['friends_on'];
    } else {
      return css['friends_off'];
    }
  };
  return (
    <section className={css.friends_main}>
      <ul className={css.friends__list}>
        {friendsData.map(friendsDataitem => {
          console.log(friendsDataitem.isOnline);
          return (
            <li key={friendsDataitem.id} className={css.friends_card}>
              <span
                // className={css.friends_on}
                className={getStatus(friendsDataitem.isOnline)}
                // className={clsx({
                //   'css.friends_on': isOnline,
                //   'css .friends_off': !isOnline,
                // })}
              ></span>
              <FriendListItem
                avatar={friendsDataitem.avatar}
                name={friendsDataitem.name}
                isOnline={friendsDataitem.isOnline}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
// in props input of friends (not list of props)
FriendList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
// id: PropTypes.number.isRequired,
// avatar: PropTypes.string.isRequired,
// name: PropTypes.string.isRequired,
// isOnline: PropTypes.bool.isRequired,

export default FriendList;
