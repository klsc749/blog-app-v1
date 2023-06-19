
import {Box, Paper} from "@mui/material";
import BlogManageTable from "../../component/BlogManageTable/BlogManageTable";



function BlogManagePage(){
    return(
        <Box component={Paper} sx={{
            flexGrow: 1,
            marginLeft: '16px',
            marginRight: '16px',
        }}>
            <BlogManageTable/>
        </Box>
    )
}

export default BlogManagePage;