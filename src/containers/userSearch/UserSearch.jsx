import {useState, useContext} from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'
import './UserSearch.css'


function UserSearch() {
  const githubContext = useContext(GithubContext)
  const alertContext = useContext(AlertContext)

  const {setAlert} = alertContext;
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (text === '' || text === ' ') {
      setAlert('Please enter something');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return(
    <>
      <div className="wrapper">
          <form onSubmit={handleSubmit} className='form'>
            <input className="input-form" type='text' name='text' placeholder='Search Users...' value={text} onChange={handleChange} />
            <button className="search-btn">Search</button>
          </form>

          {githubContext.users.length > 0 && (
            <button className="clear-btn" onClick={githubContext.clearUsers}>
              clear
            </button>
          )}
      </div>
    </>
  )
}

export default UserSearch;
