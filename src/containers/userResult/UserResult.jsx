import React, {useContext} from 'react'
import Loader from '../../components/Loader/Loader'
import GithubContext from '../../context/github/githubContext'
import UserItem from '../userItems/UserItem'
import './UserResult.css'


function UserResult() {
  const githubContext = useContext(GithubContext);
  const {loading, users} = githubContext;

  if(loading) return <Loader />;
  return (
    <div className="item-container" >
      <div className="grid-item">
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
      </div>
    
    </div>
  );  
  }
 
 

export default UserResult;