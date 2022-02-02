import React from "react";
import {Grid, Paper, Avatar, TextField, Typography, Link} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';


const Login=()=>{

    const paperStyle={padding:20, height:'50vh',width:360, margin:"20px auto"}
    const avatarStyle={backgroundColor:'blue'}
    const buttonStyle={margin:"8px 0"}
    const textFieldStyle={margin:"10px 0"}

    return(
        <Grid>
            <Paper elevation ={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField style={textFieldStyle} label='Email' placeholder='Enter your email address' fullWidth required/>
                <TextField style={textFieldStyle} label='Password' placeholder='Enter your password' type='password' fullWidth required/>
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
                <Typography>
                    <Link href="#" >
                        Forgot password
                    </Link>
                </Typography>
                <Typography> New to the app?
                    <Link href="#" >
                        Sign Up
                    </Link>
                </Typography>


            </Paper>
        </Grid>
    )
}

export default Login;