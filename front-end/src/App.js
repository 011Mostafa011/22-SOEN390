import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./stores/indexStore";

// Components
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar
                style={{
                  display: "flex",
                  width: "350px",
                  justifyContent: "space-around",
                }}
              >
                <Link
                  to="/"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Dashboard
                  </Typography>
                </Link>
                <Link
                  to="/login"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Login
                  </Typography>
                </Link>
              </Toolbar>
            </AppBar>
          </Box>

          <section className="container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
