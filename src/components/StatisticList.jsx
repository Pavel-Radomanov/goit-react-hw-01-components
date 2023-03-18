import PropTypes from 'prop-types';
import StatisticItem from '/StatisticItem';

function StatisticList({ stats }) {
  return (
    <ul>
      {stats.map(item => (
        <li key={item.id}>
          <StatisticItem label={item.label} percentage={item.percentage} />
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
// import Painting from './Painting';
// import PropTypes from 'prop-types';

// function PaintingList({ items }) {
//   return (
//     <ul>
//       {items.map(item => (
//         <li key={item.id}>
//           <Painting
//             imageUrl={item.url}
//             title={item.title}
//             author={item.author.tag}
//             profileUrl={item.author.url}
//             price={item.price}
//             quantity={item.quantity}
//           />
//         </li>
//       ))}
//     </ul>
//   );
// }

// PaintingList.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   ),
// };

// export default PaintingList;
