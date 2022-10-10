import PropTypes from 'prop-types';
import s from '../profile/Profile.module.css';

function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={s.container}>
      <div className={s.info}>
        <div className={s.imgContainer}>
          <img src={avatar} alt={username} />
        </div>
        <h1>{username}</h1>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
      <ul className={s.stats}>
        <li>
          <p>Followers</p>
          <p className={s.quantity}>{stats.followers}</p>
        </li>
        <li>
          <p>Views</p>
          <p className={s.quantity}>{stats.views}</p>
        </li>
        <li>
          <p>Likes</p>
          <p className={s.quantity}>{stats.likes}</p>
        </li>
      </ul>
    </div>
  );
}
export default Profile;

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};
