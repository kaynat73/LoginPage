import React from "react";
import { Grid, Paper, TextField, FormControlLabel, Checkbox, Button, Typography, Link, Container } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import "./loginPage.css";


const LoginPage = () => {
    const PaperStyle = { padding: 80, height: '80vh', width: 320, margin: "20px auto" }

    return (

        <Container>
            <Paper elevation={10} style={PaperStyle}>
                <Grid align='center' marginBottom={5}>

                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq86rwBFHelCnedKHpe7aUqDfc9IFI6HjzeA&s"
                        style={{ height: '49px', marginRight: '10px' }}
                    />
                    <h2>Evernote</h2>
                    <p>Remember everything important

                    </p>
                </Grid>
                {/* <div style={{ margin: "10px 0" }}>
                    <GoogleLogin />

                </div> */}
                <button className="buttonlogin">
                    <img 
                        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                        style={{ height: '24px', marginRight: '10px' }}
                    />
                    Sign in with Google
                </button>
                <button className="buttonlogin">
                    <img
                        src="https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo-1998-present.png"
                        style={{ height: '20px', marginRight: '10px' }}
                    />
                    Sign in with Apple
                </button>
                <div className="line">
                    <div className="line1" />
                    <span> or </span>
                    <div className="line1" />
                </div>

                <TextField placeholder="Email address or username" fullWidth required size="small" style={{ margin: "9px 0" }} />

                <Button  variant="contained" fullWidth required style={{ marginBottom: '25px', backgroundColor: '#43b343' }} >
                    Continue
                </Button>
                <FormControlLabel control={<Checkbox defaultChecked color="success" style={{ color: '#43b343' }} />} label="Remember me for 30 days" />
                <p>Don't have an account ?</p>

                <Typography>
                    <Link  style={{ color: "#43b343", textDecoration: "none" }} >
                        Create account
                    </Link>
                </Typography>
            </Paper>

        </Container>
    )
}
export default LoginPage;