import React from 'react';
import './App.css';
import Login from './Component/login';
import Dashboard from './Component/dashboard'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Menu, MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function App() {

  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar style={{display: "flex", width:"350px", justifyContent:"space-around"}}>
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none'}}>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Dashboard
                </Typography>
              </Link>
              <Link to="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Login
                </Typography>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>



      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>


    
/* <main class="mdc-top-app-bar--fixed-adjust">
App content
</main>
     */
  );
}

export default App;
