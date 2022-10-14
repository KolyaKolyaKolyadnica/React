import PropTypes from 'prop-types';
import s from '../container/Container.module.css';

function Container({ children }) {
  return <div className={s.container}>{children}</div>;
}
export default Container;

Container.propTypes = {
  // Так и не понял какой приходит тип в первом случаче!!!

  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
