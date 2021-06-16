import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import FriendsList from './components/FriendsList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/protectedList'>Protected Friends List</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/protectedList' component={FriendsList}/>
          <Route path='/login' component={Login}/>
          <Route component={Login}/>
        </Switch>
      </header>
    </div>
    </Router>
  );
}

export default App;