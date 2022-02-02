import React, { useState } from "react";
import {Grid, Paper, Avatar, TextField, Typography} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

const axios = require('axios').default;

const Login=()=>{

    const paperStyle={padding:20, height:'50vh',width:360, margin:"20px auto"}
    const avatarStyle={backgroundColor:'blue'}
    const buttonStyle={margin:"8px 0"}
    const textFieldStyle={margin:"10px 0"}

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        console.log(email)
        console.log(password)
        axios.post('http://localhost:1337/api/v1/entrance/login',{
            emailAddress: email,
            password: password
        }).then(function (response){
            console.log(response);
        }).catch(function(error){
            console.log(error)
        })
    }

    return(
        <Grid>
            <Paper elevation ={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField style={textFieldStyle} value={email} onInput={ e=>setEmail(e.target.value)} label='Email' placeholder='Enter your email address' fullWidth required/>
                    <TextField style={textFieldStyle} value={password} onInput={e=>setPassword(e.target.value)} label='Password' placeholder='Enter your password' type='password' fullWidth required/>
                
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type="submit" color="primary" fullWidth variant="contained" style={buttonStyle}>Sign in</Button>
                </form>
                <Typography>
                    <Link to="">
                        Forgot password  
                    </Link>
                </Typography>
                <Typography> New to the app?
                    <Link to="/signup">
                        Sign Up
                    </Link>
                </Typography>
                    

            </Paper>
        </Grid>
    )
}

export default Login;