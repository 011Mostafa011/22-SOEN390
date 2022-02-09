import React, { useState } from "react";
import { Grid, Paper, Avatar, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Link, Navigate } from "react-router-dom";

import { connect } from "react-redux";
import { login } from "../actions/userActions";

const Login = ({ login }) => {
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 360,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "blue" };
  const buttonStyle = { margin: "8px 0" };
  const textFieldStyle = { margin: "10px 0" };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    login(email, password)
      .then(() => {
        setNavigate(true);
      })
      .catch((err) => console.log(err));
  };

  if (navigate) {
    return <Navigate push to="/" />;
  } else {
    return (
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <form onSubmit={handleSubmit}>
            <TextField
              style={textFieldStyle}
              value={email}
              onInput={(e) => setEmail(e.target.value)}
              label="Email"
              placeholder="Enter your email address"
              fullWidth
              required
            />
            <TextField
              style={textFieldStyle}
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              label="Password"
              placeholder="Enter your password"
              type="password"
              fullWidth
              required
            />

            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              color="primary"
              fullWidth
              variant="contained"
              style={buttonStyle}
            >
              Sign in
            </Button>
          </form>
          <Typography>
            <Link to="">Forgot password</Link>
          </Typography>
          <Typography>
            {" "}
            New to the app?
            <Link to="/signup">Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    );
  }
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
