import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

function FriendList({ friendsData }) {
  return (
    <section className={css.friends_main}>
      <ul className={css.friends__list}>
        {friendsData.map(friendsDataitem => {
          console.log(friendsDataitem.isOnline);
          return (
            <li key={friendsDataitem.id} className={css.friends_card}>
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
    }).isRequired
  ).isRequired,
};
// id: PropTypes.number.isRequired,
// avatar: PropTypes.string.isRequired,
// name: PropTypes.string.isRequired,
// isOnline: PropTypes.bool.isRequired,

export default FriendList;
