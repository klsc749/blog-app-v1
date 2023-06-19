import React from 'react';
import { Button, TextField, Grid, Typography, Paper, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import {UserServiceApi} from "../service/admin/UserServiceApi";
import {useNavigate} from "react-router-dom";

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
    boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
    background: 'rgba(255, 255, 255, 0.5)', // Semi-transparent background
    backdropFilter: 'blur(10px)', // Gaussian blur
}));

const StyledButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    marginTop: theme.spacing(2),
}));

const Login: React.FC = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        UserServiceApi.login(username,password).then((res)=>{
            if(res.code === 200){
                localStorage.setItem("token",res.data.token);
                localStorage.setItem("username",username);
                navigate('/admin');
            }
        })
        // TODO: handle login logic here
    };

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item xs={12} sm={8} md={6} lg={4}>
                <StyledPaper>
                    <Box textAlign="center">
                        <Typography variant="h5">登录</Typography>
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            required
                            margin="normal"
                            label="username"
                            variant="outlined"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                        <TextField
                            fullWidth
                            required
                            margin="normal"
                            label="Password"
                            type="password"
                            variant="outlined"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <StyledButton fullWidth variant="contained" type="submit">
                            Login
                        </StyledButton>
                    </form>
                </StyledPaper>
            </Grid>
        </Grid>
    );
};

export default Login;
