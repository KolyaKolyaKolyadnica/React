import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  const listItems = items.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    );
  });

  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{listItems}</tbody>
    </table>
  );
}

export default TransactionHistory;

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
