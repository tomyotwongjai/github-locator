import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'


function UserItem({ user: { avatar_url, login } }) {
  return (
    <div>
      <div>
        <div>
          <img src={avatar_url} alt={login}  style={{ width: '60px' }} />
        </div>

      </div>
      <div>
        <h2>{login}</h2>
        <div>
          <Link to={`/user/${login}`}>View Profile</Link>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};


export default UserItem;