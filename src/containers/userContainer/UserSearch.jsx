import {useState, useContext} from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'


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
      setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  return(
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <input type='text' name='text' placeholder='Search Users...' value={text} onChange={handleChange} />
        <input type='submit' value='Search' />
      </form>
      {githubContext.users.length > 0 && (
        <button onClick={githubContext.clearUsers}>
          clear
        </button>
      )}
    </div>
  )
}

export default UserSearch;
