import React from 'react'
import UserSearch from '../../containers/userSearch/UserSearch'
import UserResult from '../../containers/userResult/UserResult'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'


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