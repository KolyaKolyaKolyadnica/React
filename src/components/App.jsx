import Container from './container/Container';
import Profile from './profile/Profile';
import user from './profile/user';

import Statistics from './statistics/Statistics';
import data from './statistics/data.json'


import FriendList from "./friendList/FriendList"
import friends from './friendList/friends.json';

import TransactionHistory from './transactionHistory/TransactionHistory'
import transactions from './transactionHistory/transactions.json'

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
        <Profile 
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}/>
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
