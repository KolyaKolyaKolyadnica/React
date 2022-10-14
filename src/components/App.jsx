import Container from './container/Container';
import Profile from './profile/Profile';
import user from './profile/user';

import Statistics from './statistics/Statistics';
import data from './statistics/data'


import FriendList from "./friendList/FriendList"
import friends from './friendList/friends';

import TransactionHistory from './transactionHistory/TransactionHistory'
import transactions from './transactionHistory/transactions'

export const App = () => {
  return (
    <div>
      <Container>
        <p style={{fontSize:40}}>
          React homework template<br/>
          <span style={{fontSize:20}}>(Scroll down)</span>
        </p>                
      </Container>              
            
      <Container>
        <Profile user={user}/>
      </Container>
            
      <Container>
        <Statistics title="Upload stats" stats={data}/>
        <Statistics stats={data}/>
      </Container>  

      <Container>
        <FriendList friends={friends} />  
      </Container>

      
      <Container>
        <TransactionHistory items={transactions} />  
      </Container>
    </div>
  );
};
