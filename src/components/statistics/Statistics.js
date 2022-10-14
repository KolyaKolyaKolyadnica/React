import PropTypes from 'prop-types';
import s from '../statistics/Statistics.module.css';

function Statistics({ title, stats }) {
  const listItems = stats.map(stat => {
    const statArr = stat.label.split('');
    const formatClass = statArr.slice(1, statArr.length).join('');

    return (
      <li key={stat.id} className={`${s.item} ${s[formatClass]}`}>
        <span className={s.label}>{stat.label}</span>
        <span className={s.percentage}>{stat.percentage}%</span>
      </li>
    );
  });

  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statsList}>{listItems}</ul>
    </section>
  );
}
export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};
