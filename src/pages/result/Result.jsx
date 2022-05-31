import React, {useEffect, useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import GithubContext from '../../context/github/githubContext'
import RepoContainer from '../../containers/user-repos/RepoContainer'
import {AiOutlineCheck, AiOutlineClose, AiFillGithub} from 'react-icons/ai'
import './Result.css'

function Result() {
  const {login} = useParams();
  const githubContext = useContext(GithubContext);

  const {
    getUser,
    loading,
    user: {
      hireable,
      avatar_url,
      bio,
      name,
      html_url,
      company,
      blog,
      location,
      followers,
      following,
      public_repos,
      public_gists,
    },
    repos,
    getUserRepos,
  } = githubContext;

  useEffect(() => {
    getUser(login);
    getUserRepos(login);
  }, []);

  if (loading) return <Loader />;
  return (
    <div className="repo-container">
    <Link to='/' className='back-btn'>Back to Search</Link>
    <div className="hire-icon">
    Hireable: {''}
    {hireable ? (
      <AiOutlineCheck style={{color: "green"}} />
    ) : (<AiOutlineClose  style={{color: "red"}}  />)}
    </div>

    {/* Head */}

    <div className="avatar-header">
      <div className="title">
        <img src={avatar_url} alt={name} className="avatar-img" />
        <h1>{name}</h1>
        {location && <p>Location: {location}</p>}
      
      </div>
      <a href={html_url} className="repo-link">
        <AiFillGithub className="github-icon" style={{color: "white"}} />
      </a>
    </div>

    {/* Bio */}

    <div className="body">
      {bio && (
        <>
          <h3>Bio</h3>
          <p>{bio}</p>
        </>
      )}

      <ul>
        <li>
        {login && (
                <>
                  <strong>Username:</strong> {login}
                </>
              )}
        </li>
        <li>
        {company && (
                <>
                  <strong>Company:</strong> {company}
                </>
              )}
        </li>
        <li>
        {blog && (
                <>
                  <strong>Website:</strong> <a href={blog}>{blog}</a>
                </>
              )}
        </li>
      </ul>
    </div>

    <div className="social-info">
        <ul>
          <li>Followers: {followers}</li>
          <li>Following: {following}</li>
          <li>PublicRepo: {public_repos}</li>
          <li>Public Gist: {public_gists}</li>
        </ul>
    </div>

    <div className="repo">
      <RepoContainer repos={repos} />
    </div>
  </div>
  )
}


export default Result;