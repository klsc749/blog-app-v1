import {Box, Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

function NotFound(){
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home');
    };
    return(
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                bgcolor: 'background.default',
                background: 'rgba(255, 255, 255, 0.7)',
                backdropFilter: 'blur(10px)',
            }}
        >
            <Typography variant="h2" component="h1" gutterBottom>
                404
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom>
                Page Not Found
            </Typography>
            <Typography variant="body1" gutterBottom>
                The page you're looking for doesn't exist or has been moved.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                onClick={handleClick}
                sx={{ mt: 2 }}
            >
                Go Home
            </Button>
        </Box>
    );
}

export default NotFound;