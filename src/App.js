import {Home, Error, Result} from './pages';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Alert from './containers/alert/Alert';

function App() {
  return (
    <GithubState>
      <AlertState>
      <Router>
        <div className="alert">
          <Alert />
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route exact path="/user/:login" element={<Result />} />
        </Routes>
      </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
