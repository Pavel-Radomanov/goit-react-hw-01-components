import PropTypes from 'prop-types';
// import StatisticList from './StatisticList';
// import data from '../data/data.json';
function Statistics({ title }) {
  // console.log(stats);
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      {/* <StatisticList items={data} /> */}

      {/* <ul class="stat-list">
        <li class="item">
          <span class="label">.docx</span>
          <span class="percentage">4%</span>
        </li> */}
      {/* <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage">14%</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">41%</span>
        </li>
        <li class="item">
          <span class="label">.mp4</span>
          <span class="percentage">12%</span>
        </li> */}
      {/* </ul> */}
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Statistics;
