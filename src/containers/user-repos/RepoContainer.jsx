import React from 'react'
import RepoItem from './RepoItem'
import PropTypes from 'prop-types'

function RepoContainer({repos}) {
  return (
    repos.map(repo => <RepoItem repo={repo} key={repo.id} />)
  )
}

RepoContainer.propTypes = {
    repos: PropTypes.array.isRequired,
  };

export default RepoContainer