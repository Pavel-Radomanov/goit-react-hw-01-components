import PropTypes from 'prop-types';
import StatisticList from './StatisticList';

function Statistics({ title, children }) {
  return (
    <section class="statistics">
      {title && <h2 class="title">{title}</h2>}
      <StatisticList items={data} />
      {children}
    </section>
    // <div>
    //   {title && <h2>{title}</h2>}
    //   {children}
    // </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Statistics;
