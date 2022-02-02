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

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

function App() {
  return (
    <Router>
      <header class="mdc-top-app-bar">
        <div class="mdc-top-app-bar__row">
          <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
            <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button" aria-label="Open navigation menu">menu</button>
          </section>
        <div/>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </header>

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
