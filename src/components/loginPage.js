import React from "react";
import { Grid, Paper, Avatar, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';

const LoginPage = () => {
    const PaperStyle = { padding: 80, height: '80vh', width: 320, margin: "20px auto" }
    const avtarStyle = { backgroundColor: 'green' }

    return (

        <Grid>
            <Paper elevation={10} style={PaperStyle}>
                <Grid align='center' marginBottom={5}>
                    {/* <Avatar style={avtarStyle}>KS</Avatar> */}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq86rwBFHelCnedKHpe7aUqDfc9IFI6HjzeA&s"
                    style={{ height: '49px', marginRight: '10px' }}
                
                    />
                    <h2>Evernote</h2>
                    <p>Remember everything important</p>
                </Grid>
                {/* <div style={{ margin: "10px 0" }}>
                    <GoogleLogin />

                </div> */}
                <button

                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '10px 20px',
                        background: 'white',
                        color: 'black',
                        border: '1px solid #a9a4a45e',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        width: '100%',
                        marginBottom:'6px'

                    }}
                >
                    <img
                        src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                        style={{ height: '24px', marginRight: '10px' }}
                    />
                    Sign in with Google
                </button>

                <button

                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '10px 20px',
                        background: 'white',
                        color: 'black',
                        border: '1px solid #a9a4a45e',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        width: '100%',
                        marginBottom:'7px'

                    }}
                >
                    <img
                        src="https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo-1998-present.png"
                        style={{ height: '20px', marginRight: '10px' }}
                    />
                    Sign in with Apple
                </button>



                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ backgroundColor: "#a9a4a45e", width: "45%", height: 1 }} />
                    <span> or </span>
                    <div style={{ backgroundColor: "#a9a4a45e", width: "45%", height: 1 }} />
                </div>

                <TextField placeholder="Email address or username" fullWidth required size="small" style={{ margin: "9px 0" }} />

                <Button variant="contained"  fullWidth required style={{marginBottom:'25px',backgroundColor:'#43b343'}} >
                    Continue
                </Button>
                <FormControlLabel control={<Checkbox defaultChecked color="success" style={{color:'#43b343'}} />} label="Remember me for 30 days" />
                <p>Don't have an account ?</p>

                <Typography>
                    <Link style={{ color: "#43b343", textDecoration: "none" }} >

                        Create account
                    </Link>
                </Typography>
            </Paper>

        </Grid>
    )
}
export default LoginPage;