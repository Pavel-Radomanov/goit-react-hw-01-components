import PropTypes from 'prop-types';

const StatisticItem = ({ label, percentage }) => {
  return (
    <div>
      <span class="label">.{label}</span>
      <span class="percentage">{percentage}%</span>
    </div>
  );
};
console.log(StatisticItem);

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
