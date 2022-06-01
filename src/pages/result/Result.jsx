import React, {useEffect, useContext} from 'react'
import { Link, useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import GithubContext from '../../context/github/githubContext'
import RepoContainer from '../../containers/user-repos/RepoContainer'
import {AiOutlineCheck, AiOutlineClose, AiFillGithub, AiOutlineArrowLeft} from 'react-icons/ai'
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
    <>
        <div className="profile-container">
          <div className="profile-header">
            <Link id="backlink" to="/"><AiOutlineArrowLeft className="arrow-left" /></Link>
            <h2>
              Hireable: {hireable ? <AiOutlineCheck style={{ color: "green" }} /> : <AiOutlineClose style={{ color: "red" }} />}
            </h2>
          </div>
        </div>

        <div className="profile-info">
          <div className="profile-image">
            <img src={avatar_url} alt="profile" />
          </div>
          <div className="profile__info-main">
            <span>{name}</span>
            {location ? <p>Location: {location}</p> : null}
            {company ? <p>Company: {company}</p> : null}
            <a href={html_url} target="_blank" rel="noopener noreferrer">
              {blog ? <p> {blog}</p> : null}
            </a>
          </div>

          <h2>Bio:</h2>
          <p className="user-bio">
            {bio ? <span> {bio}</span> : null}
          </p>

          <div className="profile-stats">
            <div className="profile-stats__item">
              <span>Followers: {followers}</span>
              <span>Following: {following}</span>
              <span>Repos: {public_repos}</span>
              <span>Gist: {public_gists}</span>
            </div>
          </div>

          <h2 id="repos-title">Repos:</h2>
          <div className="profile-repos">
            <RepoContainer repos={repos} />
          </div>
        </div>

    </>
  )
}


export default Result;