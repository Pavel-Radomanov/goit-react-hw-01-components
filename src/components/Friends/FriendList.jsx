import PropTypes from 'prop-types';
// import clsx from 'clsx';
import css from './FriendList.module.css';

function FriendList({ friends }) {
  console.log(friends);
  return (
    <section className={css.friends_main}>
      <ul className={css.friends__list}>
        {friends.map(({ id, avatar, name, isOnline }) => {
          // console.log(clsx({ className: false }));
          const getStatus = value => {
            if (value) {
              return css['friends_on'];
            } else {
              return css['friends_off'];
            }
          };

          console.log(id);
          return (
            <li key={id} className={css.friends_item}>
              <span
                className={getStatus(isOnline)}
                // className={clsx({
                //   'css.friends_on': isOnline,
                //   'css .friends_off': !isOnline,
                // })}
              ></span>
              <img
                className={css.friends_avatar}
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className={css.friends_name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
// in props input of friends (not list of props)
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
// id: PropTypes.number.isRequired,
// avatar: PropTypes.string.isRequired,
// name: PropTypes.string.isRequired,
// isOnline: PropTypes.bool.isRequired,

export default FriendList;
