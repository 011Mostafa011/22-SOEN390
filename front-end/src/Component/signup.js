import React from 'react'
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';


const Signup=()=>{
const paperStyle={padding:'30px 20px', width:400, margin:"20px auto"}
const headerStyle={margin:0}
const avatarStyle={backgroundColor:'blue'}
const textFieldStyle={margin:"5px 0"}

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
                <form>
                    <TextField style={textFieldStyle} fullWidth label='First Name' placeholder='Enter first name' ></TextField>
                    <TextField style={textFieldStyle} fullWidth label='Last Name' placeholder='Enter last name'></TextField>
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
                    
                    <TextField style={textFieldStyle} fullWidth label='Email Address' placeholder='Enter your email address'></TextField>
                    <TextField style={textFieldStyle} fullWidth label='Phone Number'></TextField>
                    <TextField style={textFieldStyle} fullWidth label='Address' placeholder='Enter your home address'></TextField>

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
                    <TextField style={textFieldStyle} fullWidth label='Password' type='password' placeholder='Enter password'></TextField>
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