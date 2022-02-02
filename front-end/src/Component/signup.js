import React, { useState } from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

const axios = require('axios').default;

const Signup=()=>{
const paperStyle={padding:'30px 20px', width:400, margin:"20px auto"}
const headerStyle={margin:0}
const avatarStyle={backgroundColor:'blue'}
const textFieldStyle={margin:"5px 0"}

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [fname, setFname] = useState('');
const [lname, setLname] = useState('');
const [number, setNumber] = useState('');
const [address, setAddress] = useState('');


function handleSubmit(event){
    event.preventDefault();
    console.log(email)
    console.log(password)
    axios.post('http://localhost:1337/api/v1/entrance/signup',{
        emailAddress: email,
        password: password,
        fullName: fname + ' ' + lname
    }).then(function (response){
        console.log(response);
    }).catch(function(error){
        console.log(error)
    })
}

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align="center">
                    <Avatar style={avatarStyle}>
                        <HealthAndSafetyOutlinedIcon/>
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant="caption">Fill the following form to create your account</Typography>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <TextField style={textFieldStyle} fullWidth value={fname} onInput={ e=>setFname(e.target.value)} label='First Name' placeholder='Enter first name' ></TextField>
                    <TextField style={textFieldStyle} fullWidth value={lname} onInput={ e=>setLname(e.target.value)} label='Last Name' placeholder='Enter last name'></TextField>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Male" />
                            <FormControlLabel value="male" control={<Radio />} label="Female" />
                        </RadioGroup>
                    </FormControl>
                    
                    <TextField style={textFieldStyle} fullWidth value={email} onInput={ e=>setEmail(e.target.value)} label='Email Address' placeholder='Enter your email address'></TextField>
                    <TextField style={textFieldStyle} fullWidth value={number} onInput={ e=>setNumber(e.target.value)} label='Phone Number'></TextField>
                    <TextField style={textFieldStyle} fullWidth value={address} onInput={ e=>setAddress(e.target.value)} label='Address' placeholder='Enter your home address'></TextField>

                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">Select your role:</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="Health Official" control={<Radio />} label="Health Official" />
                            <FormControlLabel value="Immigration Officer" control={<Radio />} label="Immigration Officer" />
                            <FormControlLabel value="Medical Doctor" control={<Radio />} label="Medical Doctor" />
                            <FormControlLabel value="Patient" control={<Radio />} label="Patient" />
                            <FormControlLabel value="Administrator" control={<Radio />} label="Administrator" />
                        </RadioGroup>
                    </FormControl>
                    <TextField style={textFieldStyle} fullWidth value={password} onInput={ e=>setPassword(e.target.value)} label='Password' type='password' placeholder='Enter password'></TextField>
                    <TextField style={textFieldStyle} fullWidth label='Confirm Password' type='password' placeholder='Confirm password'></TextField>
                    <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="I agree to sell my soul to big pharma"
                    />
                    <Button type='submit' variant='contained' color='primary'>Sign Up</Button>
                </form>                
            </Paper>
        </Grid>
    )
}

export default Signup;