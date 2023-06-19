import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import BlogManageMenu from "./Menu/BlogManageMenu";
import {root} from "./NavigationBarCommon";

function AdminNavigationBar(){
    return(
        <Box>
            <AppBar position="static"
                    sx={root}>
                <Toolbar>
                    <Link to={"home"} style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button color="inherit">首页</Button>
                    </Link>
                    <Link to={"category"} style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button color="inherit">分类</Button>
                    </Link>
                    <BlogManageMenu/>
                    <Link to={"project"} style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button color="inherit">项目</Button>
                    </Link>
                    <Link to={"addBlog"} style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button color="inherit">添加博客</Button>
                    </Link>
                    <Typography variant={"h6"}  sx={{flexGrow:1}} textAlign={"center"}> KSLC的博客 </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default AdminNavigationBar;
