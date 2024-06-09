import React from "react";
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';

const LoginPage = () => {
    const PaperStyle = { padding: 80, height: '80vh', width: 320, margin: "20px auto" }
    const avtarStyle = { backgroundColor: 'green' }

    return (

        <Grid>
            <Paper elevation={10} style={PaperStyle}>
                <Grid align='center'>
                    <Avatar style={avtarStyle}>KS</Avatar>
                    <h2>Evernote</h2>
                    <p>Remember everything important</p>
                </Grid>
                <div style={{ margin: "10px 0" }}>
                    <GoogleLogin />

                </div>
                <div style={{display:"flex" , alignItems:"center", justifyContent:"space-between"}}>
                    <div style={{backgroundColor:"gray", width:"45%",height:1}}/>
                    <span> or </span>
                    <div style={{backgroundColor:"gray" , width:"45%",height:1}}/>
                </div>

                <TextField placeholder="Email address or username" fullWidth required size="small" style={{marginTop:"10px"}}/>

                <br />
                <br />
                <Button variant="contained" color="success" fullWidth required>
                    Continue
                </Button>
                <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Remember me for 30 days" />
                <p>Don't have an account ?</p>

                <Typography>
                    <Link  style={{color:"green",textDecoration:"none"}} >
                        
                        Create account
                    </Link>
                </Typography>
            </Paper>

        </Grid>
    )
}
export default LoginPage;