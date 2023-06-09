import Profile from './Profile/Profile';
import Statistics from './Statistic/Statistics';
import FriendList from './Friends/FriendList';
import TransactionHistory from './Transactions/Transaction';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
// console.log(transactions);
export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friendsData={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
