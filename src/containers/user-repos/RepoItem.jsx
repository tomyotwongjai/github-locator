import React from 'react'
import propTypes from 'prop-types'

function RepoItem({ repo: {html_url, name}}) {
  return (
    <div className="repo-card">
        <h3>
            <a href={html_url} target="_blank">{name}</a>
        </h3>
    </div>
  )
}

RepoItem.propTypes = {
    repo: propTypes.object.isRequired,
}

export default RepoItem