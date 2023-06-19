import React from 'react';
import {Container, Box, Typography, Avatar, Link} from "@mui/material";
const GuohuiImage = "/images/国徽.png";

const root = {
    display: 'flex',
    justifyContent : 'center',
    backgroundColor: (theme: { palette: { primary: { main: any; }; }; }) => theme.palette.primary.main,
    color: 'white',
    padding: (theme: { spacing: (arg0: number) => any; }) => theme.spacing(4),
    height: '5%',
    maxHeight: '5px',
};

function Footer() {

    return (
        <Box component="footer" sx={root} >
            <Container maxWidth="md">
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="h6">KSLC的博客</Typography>
                    <Box alignItems="center" display="flex">
                        <Avatar variant="square" src={GuohuiImage} sx={{ width: 24, height: 24, marginRight: 1 }}/>
                        <Link href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=2023012247"
                              target="_blank" rel="noopener" color="inherit">
                            京ICP备2023012247号
                        </Link>
                    </Box>
                    <Typography variant="body1">© {new Date().getFullYear()} All rights reserved.</Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;