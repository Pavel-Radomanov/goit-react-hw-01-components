import PropTypes from 'prop-types';
import StatisticItem from '/StatisticItem';

function StatisticList({ stats }) {
  return (
    <ul>
      {stats.map(item => (
        <li key={item.id}>
          <StatisticItem label={item.label} percentage={item.percentage} />
          console.log(item);
        </li>
      ))}
    </ul>
  );
}
StatisticList.propTypes = {
  title: PropTypes.string,

  data: PropTypes.number.isRequired,
  //   Repeta video
};
export default StatisticList;
