import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import {MDCTopAppBar} from '@material/top-app-bar'

import Dashboard from './pages/Dashboard';
import Login from './pages/Login'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<Dashboard/>}>
        </Route>
        <Route path="/login" element={<Login/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
