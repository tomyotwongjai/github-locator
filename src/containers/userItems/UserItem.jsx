import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import './UserItems.css'


function UserItem({ user: { avatar_url, login } }) {
  return (
    <div className="container">
      <div className="item-wrapper">
        <div className="image-container">
          <img src={avatar_url} alt={login}  />
        </div>
      </div>
      <div className="info-container">
        <h2 className="user-name">{login}</h2>
        <div className="link-container" >
          <Link className="profile-link"  to={`/user/${login}`}>View Profile</Link>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};


export default UserItem;