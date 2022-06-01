import React, {useContext, useState} from 'react'
import Loader from '../../components/Loader/Loader'
import GithubContext from '../../context/github/githubContext'
import UserItem from '../userItems/UserItem'
import './UserResult.css'


function UserResult() {
  const githubContext = useContext(GithubContext);
  const {loading, users} = githubContext;
  
  const [value, setValue] = useState(6);
  const [showResult, setShowResult] = useState(false);

  const handleShowResult = () => {
    setShowResult(!showResult);

    showResult ? setValue((6)) : setValue(users.length);
  }

  if(loading) return <Loader />;
  return (
    <div className="item-container" >
      <div className="grid-item">
      {users.map((user, index) => index < value && (
        <UserItem  key={index} user={user} />
      ))}
      </div>
      {githubContext.users.length > 1 && (<button className="show-btn" onClick={handleShowResult}>{showResult ? 'Go Back' : 'Show All'}</button>)}
    </div>
  );  
  }
 
 

export default UserResult;