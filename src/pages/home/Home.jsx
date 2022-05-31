import React from 'react'
import UserSearch from '../../containers/userSearch/UserSearch'
import UserResult from '../../containers/userResult/UserResult'
import NavBar from '../../components/NavBar/NavBar'


function Home() {
  return (
    <>
    <NavBar />
    <UserSearch />
    <UserResult />
    </>
  )
}

export default Home