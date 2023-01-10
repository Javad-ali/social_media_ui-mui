import React from 'react'
import {Grid,Paper,Avatar,Typography,TextField,Button,Checkbox} from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const Signup=()=>{
    const paperStyle={padding:'30px 20px',width:300,margin:"20px auto"}
    const header={margin:0}
    const avatarStyle={backgroundColor:'#663399'}
    const marginTop={marginTop:6}
    return(
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon/>
                    </Avatar>
                <h2 style={header}>Sign Up</h2>
                <Typography variant='caption' gutterBottom>Please fill this form to create an account</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder='Eneter your name'/>
                    <TextField fullWidth label='Email' placeholder='Eneter your email'/>
                    <FormControl style={marginTop}>
  <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
  <RadioGroup style={{display:'initial'}}>
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
  </RadioGroup>
</FormControl>
                    <TextField fullWidth label='Phone Number' placeholder='Enter your Number'/>
                    <TextField fullWidth label='Password' placeholder='Enter your Password'/>
                    <TextField fullWidth label='Confirm Password ' placeholder='Enter confirm Password'/>
                    <FormControlLabel
          control={
            <Checkbox name="gilad" color="Secondary" />
          }
          label="I Accept The Terms And Conditions."
        />
                    <Button type='submit' variant='contained' color='primary'>Sign Up</Button>




                </form>
            </Paper>
        </Grid>
    )
}
export default Signup;