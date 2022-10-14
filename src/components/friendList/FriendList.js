import PropTypes from 'prop-types';
import FriendListItem from 'components/friendList/friendListItem/FriendListItem';
import s from './FriendList.module.css';

function FriendList({ friends }) {
  const listItems = friends.map(friend => {
    return (
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        key={friend.id}
      />
    );
  });

  return <ul className={s.friendList}>{listItems}</ul>;
}

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};
