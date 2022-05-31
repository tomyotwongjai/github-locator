import React, {useContext} from 'react'
import Loader from '../../components/Loader/Loader'
import GithubContext from '../../context/github/githubContext'
import UserItem from './UserItem'


function UserResult() {
  const githubContext = useContext(GithubContext);
  const {loading, users} = githubContext;

  if(loading) return <Loader />;
  return (
    <div >
      {users.map(user => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );  
  }
 
 

export default UserResult;