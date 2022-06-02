import { NavBar } from '../../components'
import {Alert, UserResult, UserSearch} from '../../containers'
import './Home.css'
import { Link } from 'react-router-dom'



function Home() {

  return (
    <>
    <NavBar />
      <div className="alert">
        <Alert />
      </div>
    <Link className="link" to="/user/tomyotwongjai">Go to My Profile</Link>
    <UserSearch />
    <UserResult />
    </>
  )
}

export default Home