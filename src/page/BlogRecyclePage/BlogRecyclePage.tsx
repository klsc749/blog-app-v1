import {Box, Paper} from "@mui/material";
import BlogRecycleTable from "../../component/BlogRecycle/BlogRecycleTable";

function BlogRecyclePage(){
    return (
        <Box component={Paper} sx={{
            flexGrow: 1,
            marginLeft: '16px',
            marginRight: '16px',
        }}>
            <BlogRecycleTable/>
        </Box>
    )
}

export default BlogRecyclePage;