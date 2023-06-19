import React, { useState } from "react";
import {Menu, MenuItem, ListItemIcon, ListItemText, Button, Box, Typography} from "@mui/material";
import ImportContactsSharpIcon from '@mui/icons-material/ImportContactsSharp';
import DraftsIcon from "@mui/icons-material/Drafts";
import DeleteIcon from "@mui/icons-material/Delete";
import {NavigateFunction, useNavigate} from "react-router-dom";

function AdminMangeMenu() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <Button color="inherit" onClick={handleClick}>
                管理
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 4,
                    sx: {
                        minWidth: "180px",
                        paddingTop: "8px",
                        paddingBottom: "8px",
                        background: "linear-gradient(90deg, rgba(63,81,181,1) 0%, rgba(92,107,192,1) 70%, rgba(171,71,188,1) 100%)"
                    },
                }}
            >
                {BlogManageMenuItem(navigate)}
                {DraftsMenuItem(navigate)}
                {RecycleBinMenuItem(navigate)}
            </Menu>
        </Box>
    );
}

function BlogManageMenuItem(navigate : NavigateFunction){
    function handleClick(){
        navigate("/admin/blogManage")
    }
    return(
        <MenuItem onClick={handleClick}>
            <ListItemIcon>
                <ImportContactsSharpIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={<Typography color="white">博客管理</Typography>} />
        </MenuItem>
    )
}

function DraftsMenuItem(navigate : NavigateFunction){
    function handleClick(){
        navigate("/admin/drafts")
    }
    return(
        <MenuItem onClick={handleClick}>
            <ListItemIcon>
                <DraftsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={<Typography color="white">草稿箱</Typography>} />
        </MenuItem>
    )
}

function RecycleBinMenuItem(navigate : NavigateFunction){
    function handleClick(){
        navigate("/admin/recycleBin")
    }
    return(
        <MenuItem onClick={handleClick}>
            <ListItemIcon>
                <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={<Typography color="white">回收站</Typography>} />
        </MenuItem>
    )
}

export default AdminMangeMenu;
